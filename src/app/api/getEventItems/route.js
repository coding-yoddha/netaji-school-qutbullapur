import connectToDB from "../../../../config/database";
import EventItem from "@/models/eventItem";
import Event from "@/models/event";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const eventId = searchParams.get("eventId");

    const [eventItemDocs, event] = await Promise.all([
      EventItem.find({ eventId }).select('-image').sort({ order: 1 }).lean(),
      Event.find({ eventId }).select('-image').lean(),
    ]);

    const eventItems = eventItemDocs.map((item) => ({
      ...item,
      imageUrl: `/api/image/eventItem/${item._id}`,
    }));

    return NextResponse.json({
      success: true,
      data: {
        eventItems,
        event,
      },
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again later." + error.message,
    });
  }
}

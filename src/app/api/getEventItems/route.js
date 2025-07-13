import connectToDB from "../../../../config/database";
import EventItem from "@/models/eventItem";
import Event from "@/models/event";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const eventId = searchParams.get("eventId");
    var eventItems = await EventItem.find({eventId}).sort({order: 1});
    eventItems = eventItems.map((event) => ({
      ...event._doc,
      image: event.image
        ? {
            data: event.image.data.toString("base64"), // Convert Buffer to Base64 if present
            contentType: event.image.contentType,
          }
        : undefined, // If image is not present, set it as undefined
    }));
    const event = await Event.find({eventId});
    return NextResponse.json({
      success: true,
      data: {
        eventItems,
        event
      },
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again later." + error.message,
    });
  }
}

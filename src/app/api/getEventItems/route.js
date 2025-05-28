import connectToDB from "../../../../config/database";
import EventItem from "@/models/eventItem";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const eventId = searchParams.get("eventId");
    var data = await EventItem.find({eventId});
    data = data.map((event) => ({
      ...event._doc,
      image: event.image
        ? {
            data: event.image.data.toString("base64"), // Convert Buffer to Base64 if present
            contentType: event.image.contentType,
          }
        : undefined, // If image is not present, set it as undefined
    }));
    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again later." + error.message,
    });
  }
}

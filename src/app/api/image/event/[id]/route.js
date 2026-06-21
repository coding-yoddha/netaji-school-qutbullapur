import connectToDB from "../../../../../../config/database";
import Event from "@/models/event";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await connectToDB();

    const { id } = await params;
    const event = await Event.findById(id).select("image").lean();

    if (!event || !event.image || !event.image.data) {
      return new NextResponse("Image not found", { status: 404 });
    }

    const { data, contentType } = event.image;

    return new NextResponse(data.buffer || data, {
      status: 200,
      headers: {
        "Content-Type": contentType || "image/png",
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
      },
    });
  } catch (error) {
    console.error("Error serving event image:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

import connectToDB from "../../../../../../config/database";
import EventItem from "@/models/eventItem";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await connectToDB();

    const { id } = await params;
    const eventItem = await EventItem.findById(id).select("image").lean();

    if (!eventItem || !eventItem.image || !eventItem.image.data) {
      return new NextResponse("Image not found", { status: 404 });
    }

    const { data, contentType } = eventItem.image;

    return new NextResponse(data.buffer || data, {
      status: 200,
      headers: {
        "Content-Type": contentType || "image/png",
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
      },
    });
  } catch (error) {
    console.error("Error serving event item image:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

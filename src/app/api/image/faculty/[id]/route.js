import connectToDB from "../../../../../../config/database";
import Faculty from "@/models/faculty";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await connectToDB();

    const { id } = await params;
    const faculty = await Faculty.findById(id).select("profilePicture").lean();

    if (!faculty || !faculty.profilePicture || !faculty.profilePicture.data) {
      return new NextResponse("Image not found", { status: 404 });
    }

    const { data, contentType } = faculty.profilePicture;

    return new NextResponse(data.buffer || data, {
      status: 200,
      headers: {
        "Content-Type": contentType || "image/png",
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
      },
    });
  } catch (error) {
    console.error("Error serving faculty image:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

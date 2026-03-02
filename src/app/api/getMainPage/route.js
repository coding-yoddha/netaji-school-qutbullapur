import connectToDB from "../../../../config/database";
import School from "@/models/school";
import Highlight from "@/models/highlight";
import Achievement from "@/models/achievement";
import Event from "@/models/event";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();

    const [
      schoolDocs,
      highlightDocs,
      achievement,
      contact,
      events,
    ] = await Promise.all([
      School.find().select('name description').lean(),
      Highlight.find({ showInMain: true }),
      Achievement.find().lean(),
      Contact.find().select('socialMedia').lean(),
      Event.find().select('-image').sort({ order: 1 }).lean(),
    ]);

    const schoolData = schoolDocs[0] || {};

    const hightlights = highlightDocs.map((hightlight) => ({
      ...hightlight._doc,
      image: hightlight.image
        ? {
            data: hightlight.image.data.toString("base64"), // Convert Buffer to Base64 if present
            contentType: hightlight.image.contentType,
          }
        : undefined, // If image is not present, set it as undefined
    }));

    const response = {
      schoolData: schoolData,
      hightlights,
      eventImages: [],
      achievement,
      socialMedia: contact[0]?.socialMedia,
      events,
    };
    return NextResponse.json({
      success: true,
      response,
    });
  } catch (error) {
    console.error("error: ", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again later.",
    });
  }
}

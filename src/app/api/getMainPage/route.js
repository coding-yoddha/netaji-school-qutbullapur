import connectToDB from "../../../../config/database";
import School from "@/models/School";
import Highlight from "@/models/Highlight";
import MainPageImage from "@/models/MainPageImage";
import Achievement from "@/models/Achievement";
import Review from "@/models/Review";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectToDB();

    const data = await School.find();
    const hightlights = await Highlight.find({ showInMain: true });
    const mainPageImage = await MainPageImage.find();
    const formattedEvents = mainPageImage.map((event) => ({
      title: event.title,
      description: event.description,
      thumbnailUrl: event.thumbnailUrl,
      order: event.order,
      isActive: event.isActive,
      image: event.image
        ? {
            data: event.image.data.toString("base64"), // Convert Buffer to Base64 if present
            contentType: event.image.contentType,
          }
        : undefined, // If image is not present, set it as undefined
    }));
    const achievement = await Achievement.find();
    const review = await Review.find();
    const contact = await Contact.find();
    const response = {
      about: data[0],
      hightlights,
      eventImages: formattedEvents,
      achievement,
      review,
      socialMedia: contact[0].socialMedia,
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

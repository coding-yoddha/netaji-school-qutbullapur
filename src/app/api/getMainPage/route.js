import connectToDB from "../../../../config/database";
import School from "@/models/School";
import Highlight from "@/models/Highlight";
import MainPageImage from "@/models/MainPageImage";
import Achievement from "@/models/Achievement";
import Review from "@/models/Review";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();

    const data = await School.find();
    const schoolData = {
      ...data[0]._doc,
      logo: data[0]
      ? {
          data: data[0].logo.data.toString("base64"), // Convert Buffer to Base64 if present
          contentType: data[0].logo.contentType,
        }
      : undefined,
    };
    let hightlights = await Highlight.find({ showInMain: true });
    hightlights = hightlights.map((hightlight) => ({
      ...hightlight._doc,
      image: hightlight.image
        ? {
            data: hightlight.image.data.toString("base64"), // Convert Buffer to Base64 if present
            contentType: hightlight.image.contentType,
          }
        : undefined, // If image is not present, set it as undefined
    }));
    let mainPageImage = await MainPageImage.find();
    mainPageImage = mainPageImage.map((event) => ({
      ...event._doc,
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
      schoolData: schoolData,
      hightlights,
      eventImages: mainPageImage,
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

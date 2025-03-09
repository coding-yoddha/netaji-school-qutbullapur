import connectToDB from "../../../../config/database";
import School from "@/models/School";
import Highlight from "@/models/Highlight";
import MainPageImage from "@/models/MainPageImage"
import Achievement from "@/models/Achievement";
import Review from "@/models/Review";
import Contact from "@/models/Contact"
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectToDB();

    const data = await School.find();
    const hightlights = await Highlight.find({ showInMain: true });
    const mainPageImage = await MainPageImage.find();
    const achievement = await Achievement.find();
    const review = await Review.find();
    const contact = await Contact.find();
    const response = {
      about: data[0],
      hightlights,
      eventImages: mainPageImage,
      achievement,
      review,
      socialMedia: contact[0].socialMedia
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

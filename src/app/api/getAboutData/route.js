import connectToDB from "../../../../config/database";
import About from "@/models/about";
import Highlight from "@/models/highlight";
import Faculty from "@/models/faculty"
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();

    const data = await About.find();
    const hightlights = await Highlight.find({showInAbout: true});
    const faculty = await Faculty.find({showInAbout: true});
    const response = {
      about: data[0],
      hightlights,
      faculty
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

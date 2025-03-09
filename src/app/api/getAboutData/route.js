import connectToDB from "../../../../config/database";
import About from "@/models/About";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectToDB();

    const careers = await About.find();

    // Convert Buffer to Base64 strings for image display
    // const formattedCareers = careers.map((career) => ({
    //   _id: career._id.toString(), // Convert _id to a string
    //   name: career.name,
    //   description: career.description,
    //   redirectPageName: career.redirectPageName,
    //   image: career.image
    //     ? {
    //         data: career.image.data.toString("base64"), // Convert Buffer to Base64 if present
    //         contentType: career.image.contentType,
    //       }
    //     : undefined, // If image is not present, set it as undefined
    // }));

    return NextResponse.json({
      success: true,
      data: careers,
    });
  } catch (error) {
    console.error("error: ", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again later.",
    });
  }
}

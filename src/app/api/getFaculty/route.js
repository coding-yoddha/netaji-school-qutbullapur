import connectToDB from "../../../../config/database";
import Faculty from "@/models/faculty";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();
    var faculties = await Faculty.find({ showInFacultyPage: true });
    faculties = faculties.map((faculty) => ({
      ...faculty._doc,
      profilePicture: faculty.profilePicture
        ? {
            data: faculty.profilePicture.data.toString("base64"), // Convert Buffer to Base64 if present
            contentType: faculty.profilePicture.contentType,
          }
        : undefined, // If image is not present, set it as undefined
    }));
    return NextResponse.json({
      success: true,
      response: faculties,
    });
  } catch (error) {
    console.error("error: ", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again later.",
    });
  }
}

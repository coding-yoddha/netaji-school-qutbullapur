import connectToDB from "../../../../config/database";
import Faculty from "@/models/faculty";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();
    const faculties = await Faculty.find({ showInFacultyPage: true })
      .select('personalInfo academicInfo position order')
      .sort({ order: 1 })
      .lean();

    const response = faculties.map((faculty) => ({
      ...faculty,
      imageUrl: `/api/image/faculty/${faculty._id}`,
    }));

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

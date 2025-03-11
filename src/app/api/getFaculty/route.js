import connectToDB from "../../../../config/database";
import Faculty from "@/models/faculty";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectToDB();
    const faculty = await Faculty.find({ showInFacultyPage: true });
    
    return NextResponse.json({
      success: true,
      response: faculty,
    });
  } catch (error) {
    console.error("error: ", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again later.",
    });
  }
}

import connectToDB from "../../../../config/database";
import Contact from "@/models/Contact";
import Faculty from "@/models/faculty";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();
    const contact = await Contact.find();
    const faculty = await Faculty.find({ showInContactPage: true });
    const response = {
        contact: contact[0],
        faculty,
    }
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

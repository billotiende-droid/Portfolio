import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    message:
      "Thanks for reaching out! I will respond with a tailored solution within 24 hours.",
  });
}

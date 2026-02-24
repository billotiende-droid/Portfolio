import { NextResponse } from "next/server";

const cvContent = `Bill Otiende | Full Stack Web Developer

Summary
Full Stack Web Developer with hands-on experience building scalable web applications.
Focused on problem solving, measurable outcomes, and reliable delivery.

Core Skills
- React, Next.js, Flask, PostgreSQL
- API design, integration, and performance optimization
- Agile delivery, Git workflows, and cross-functional collaboration
`;

export async function GET() {
  return new NextResponse(cvContent, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": "attachment; filename=Bill_Otiende_CV.txt",
    },
  });
}

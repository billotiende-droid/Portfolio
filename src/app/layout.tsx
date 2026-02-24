import "./globals.css";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Bill Otiende | Portfolio",
  description: "Full Stack Web Developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-7xl mx-auto mt-14 p-9 border border-gray-300 rounded-lg min-h-[80vh] bg-black/40">
          <NavBar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}

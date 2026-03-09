"use client";

import { profile } from "@/data/profile";

type HireMeButtonProps = {
  className?: string;
};

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function HireMeButton({ className }: HireMeButtonProps) {
  const calendlyUrl = profile.contact.calendlyUrl;

  const handleHireMe = () => {
    if (window.Calendly && calendlyUrl) {
      window.Calendly.initPopupWidget({ url: calendlyUrl });
    } else {
      // Fallback: open in new tab if Calendly hasn't loaded
      window.open(calendlyUrl, "_blank");
    }
  };

  return (
    <button
      type="button"
      onClick={handleHireMe}
      className={
        className ??
        "bg-blue-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition"
      }
    >
      Hire Me
    </button>
  );
}

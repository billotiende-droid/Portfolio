"use client";

import { useState } from "react";

type HireMeButtonProps = {
  className?: string;
};

export default function HireMeButton({ className }: HireMeButtonProps) {
  const [status, setStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleHireMe = async () => {
    setIsLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/hire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "portfolio" }),
      });

      const data = await response.json();
      setStatus(data.message ?? "Thanks for reaching out!");
    } catch {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        onClick={handleHireMe}
        disabled={isLoading}
        className={
          className ??
          "bg-blue-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition"
        }
      >
        {isLoading ? "Sending..." : "Hire Me"}
      </button>
      {status ? <span className="text-sm text-yellow-200">{status}</span> : null}
    </div>
  );
}

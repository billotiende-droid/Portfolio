import { profile } from "@/data/profile";

export default function AboutPage() {
  return (
    <section className="mt-8 text-gray-200">
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="mt-4 text-lg leading-relaxed">{profile.summary}</p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-gray-500 bg-black/40 p-5">
          <h2 className="text-xl font-semibold text-white">How I Solve Problems</h2>
          <ul className="mt-3 list-disc list-inside space-y-2">
            {profile.strengths.map((strength) => (
              <li key={strength}>{strength}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-gray-500 bg-black/40 p-5">
          <h2 className="text-xl font-semibold text-white">Measurable Outcomes</h2>
          <ul className="mt-3 list-disc list-inside space-y-2">
            {profile.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

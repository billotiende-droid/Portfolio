import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import { profile } from "@/data/profile";

export default function HomePage() {
  return (
    <>
      <header className="mt-5 text-gray-300 font-bold text-2xl">
        <h2>Hi, I am</h2>
        <h1 className="text-4xl">{profile.name}.</h1>
        <h2>
          <strong>{profile.title.toUpperCase()}.</strong>
        </h2>
        <p className="mt-2 text-lg font-semibold text-yellow-200">
          {profile.tagline}
        </p>
      </header>

      <section className="flex flex-col lg:flex-row items-start justify-between gap-6 p-6 mt-6 text-gray-300 font-semibold">
        <div className="flex-1 space-y-4 leading-relaxed">
          <p className="italic">{profile.summary}</p>
          <div>
            <h3 className="text-xl font-bold text-white">Problem-Solving Focus</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {profile.strengths.map((strength) => (
                <li key={strength}>{strength}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Selected Outcomes</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {profile.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </div>
        </div>

        <Image
          src="/images/pflio.jpg"
          alt="Profile picture"
          width={320}
          height={420}
          className="w-80 h-auto rounded-xl shadow-lg object-cover opacity-95"
        />
      </section>

      <CallToAction />
    </>
  );
}

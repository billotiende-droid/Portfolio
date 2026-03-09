import { profile } from "@/data/profile";
import HireForm from "@/components/HireForm"; // 1. Import your component

export default function ContactPage() {
  return (
    <section className="mt-8 text-gray-200">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-2 text-lg text-yellow-200">
        Let’s discuss the outcomes you want to achieve.
      </p>

      {/* Grid for Contact Info */}
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-gray-500 bg-black/40 p-5">
          <h2 className="text-xl font-semibold text-white">Reach Me</h2>
          <ul className="mt-3 space-y-2">
            <li>
              <span className="font-semibold text-white">Email:</span> {profile.contact.email}
            </li>
            <li>
              <span className="font-semibold text-white">Github:</span> {profile.contact.github}
            </li>
            <li>
              <span className="font-semibold text-white">Linkedin:</span> {profile.contact.linkedin}
            </li>
            <li>
              <span className="font-semibold text-white">Location:</span> {profile.contact.location}
            </li>
            <li>
              <span className="font-semibold text-white">Availability:</span> {profile.contact.availability}
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-gray-500 bg-black/40 p-5">
          <h2 className="text-xl font-semibold text-white">Engagement Focus</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-300">
            I partner with teams to uncover root causes, define clear success metrics, and deliver
            full-stack solutions that are secure, scalable, and easy to maintain.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-gray-300">
            Share your goals, timelines, and constraints, and I will propose the most effective
            technical approach.
          </p>
        </div>
      </div>

      {/* 2. Place the HireForm here */}
      <div className="mt-10">
        <HireForm />
      </div>
    </section>
  );
}
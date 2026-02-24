import { profile } from "@/data/profile";

export default function ServicesPage() {
  return (
    <section className="mt-8 text-gray-200">
      <h1 className="text-3xl font-bold">Services</h1>
      <p className="mt-2 text-lg text-yellow-200">
        Building solutions that prioritize outcomes, reliability, and measurable impact.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {profile.services.map((service) => (
          <article
            key={service.title}
            className="rounded-xl border border-gray-500 bg-black/40 p-5 shadow"
          >
            <h2 className="text-xl font-semibold text-white">{service.title}</h2>
            <p className="mt-3 text-sm leading-relaxed">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

import { profile } from "@/data/profile";

export default function PortfolioPage() {
  return (
    <section className="mt-8 text-gray-200">
      <h1 className="text-3xl font-bold">Portfolio</h1>
      <p className="mt-2 text-lg text-yellow-200">
        Case studies highlighting how I turn challenges into results.
      </p>

      <div className="mt-6 grid gap-6">
        {profile.projects.map((project) => (
          <article
            key={project.name}
            className="rounded-xl border border-gray-500 bg-black/40 p-5"
          >
            <h2 className="text-2xl font-semibold text-white">{project.name}</h2>
            <p className="mt-3 text-sm leading-relaxed">
              <span className="font-semibold text-white">Problem:</span> {project.problem}
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              <span className="font-semibold text-white">Solution:</span> {project.solution}
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              <span className="font-semibold text-white">Impact:</span> {project.impact}
            </p>
            <p className="mt-2 text-sm text-yellow-200">{project.stack}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

import HireMeButton from "@/components/HireMeButton";

export default function CallToAction() {
  return (
    <section className="mt-5 text-black">
      <div className="flex flex-wrap gap-4">
        <HireMeButton className="bg-yellow-400 rounded-3xl py-3 px-8 font-medium inline-block hover:bg-transparent hover:border-yellow-300 hover:text-white duration-300 hover:border border border-transparent" />
        <a
          href="/api/cv"
          className="bg-yellow-400 rounded-3xl py-3 px-8 font-medium inline-block hover:bg-transparent hover:border-yellow-300 hover:text-white duration-300 hover:border border border-transparent"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}

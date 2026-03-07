import HireMeButton from "@/components/HireMeButton";

// Extract button styles for maintainability and reuse
const buttonStyles = "bg-yellow-400 rounded-3xl py-3 px-8 font-medium inline-block hover:bg-transparent hover:border-yellow-300 hover:text-white duration-300 border border-transparent";

// Define CV file path as a constant for easy maintenance
const CV_PATH = "/images/Full-Stack Cv.pdf";
const CV_FILE_NAME = "Full-Stack-CV.pdf";

export default function CallToAction() {
  return (
    <section className="mt-5 text-black">
      <div className="flex flex-wrap gap-4">
        <HireMeButton className={buttonStyles} />
        <a
          href={CV_PATH}
          download={CV_FILE_NAME}
          className={buttonStyles}
          aria-label="Download my CV (PDF)"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Projects from "./components/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects/>
      <footer className="mt-20 py-10 border-t border-highlight/40 text-center">
        <p className="text-lg mb-2 text-headline font-semibold">
          Let’s get in touch
        </p>
        <p className="text-sm mb-4">
          Reach me at{" "}
          <a
            href="mailto:shaunatuinstra@gmail.com"
            className="text-highlight font-semibold hover:opacity-80"
          >
            shaunatuinstra@gmail.com
          </a>{" "}
          or find me here:
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/ShaunaAT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-paragraph hover:text-highlight font-bold transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shauna-tuinstra/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-paragraph hover:text-highlight font-bold transition"
          >
            LinkedIn
          </a>
        </div>
    </footer>
    </>
  );
}

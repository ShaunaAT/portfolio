import Link from "next/link";

const base = "/portfolio";

export default function Hero() {
  return (
    <section className="max-w-3xl mx-auto text-center py-24 bg-background">
      <h1 className="text-5xl font-extrabold text-headline">
        Hi, I&apos;m Shauna.
      </h1>
      <p className="mt-4 text-lg text-paragraph">
        I&apos;m a CS grad interested in building thoughtful, responsible software that connects creativity, curiosity, and code.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link
          href="/projects"
          className="px-6 py-3 rounded-full bg-button text-buttontext hover:brightness-95"
        >
          View my work
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 rounded-full border border-paragraph text-paragraph hover:bg-highlight hover:text-headline"
        >
          Contact
        </Link>
      </div>
    </section>
  );
}

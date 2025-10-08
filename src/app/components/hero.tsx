export default function Hero() {
  return (
    <section className="max-w-3xl mx-auto text-center py-24 bg-background">
      <h1 className="text-5xl font-extrabold text-headline">
        Hi, I’m Shauna.
      </h1>
      <p className="mt-4 text-lg text-paragraph">
        CS graduate passionate about ethical AI, solo travel, and creative communities.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <a
          href="#projects"
          className="px-6 py-3 rounded-full bg-button text-buttontext hover:brightness-95"
        >
          View my work
        </a>
        <a
          href="/contact"
          className="px-6 py-3 rounded-full border border-paragraph text-paragraph hover:bg-highlight hover:text-headline"
        >
          Contact
        </a>
      </div>
    </section>
  );
}

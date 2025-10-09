
export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 text-center">

        <h1 className="text-4xl font-bold text-headline mb-4">Let’s Connect</h1>
        <p className="text-paragraph mb-10 max-w-xl mx-auto">
        Whether you want to chat about a project, collaborate on something new,
        or just say hi, I’d love to hear from you!   
        </p>

        <div className="border-2 border-highlight rounded-xl p-6 mb-8 text-center">
            <p className="text-headline font-semibold">Email me at</p>
            <a
                href="mailto:shaunatuinstra@gmail.com"
                className="text-xl text-highlight font-bold hover:opacity-80 transition"
            >
                shaunatuinstra@gmail.com
            </a>
        </div>

        <div className="flex gap-6 items-center justify-center">
            <a
            href="https://github.com/ShaunaAT"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-button text-buttonText font-bold px-6 py-3 rounded-xl hover:opacity-90 transition"
            >
            GitHub
            </a>

            <a
            href="https://www.linkedin.com/in/shauna-tuinstra/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-button text-buttonText font-bold px-6 py-3 rounded-xl hover:opacity-90 transition"
            >
            LinkedIn
            </a>
        </div>
    </main>
  );
}
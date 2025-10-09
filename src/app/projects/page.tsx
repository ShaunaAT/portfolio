import Link from "next/link";

const projects = [
  {
    title: "BridgeMedAI",
    description:
      "Hackathon project for an AI-driven system for improving clinical trial recruitment and unifying patient records.",
    icon: "/bridgemed-icon.png",
    link: "/projects/bridgemed",
  },
  {
    title: "Campsite Scan",
    description:
      "Exploring lightweight computer vision models and datasets for forest fire risk detection at campsites",
    icon: "/campsite-icon__2_.png",
    link: "/projects/campsite",
  },
  {
    title: "Sorting Visualizer",
    description:
      "Interactive visualization tool to demonstrate foundational sorting algorithms.",
    icon: "/sorting-icon.png",
    link: "/projects/sorting",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-headline text-paragraph p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-background mb-10 text-center">
          Projects
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.link}
              className="group border-2 border-highlight rounded-2xl p-6 bg-background shadow-sm hover:shadow-md hover:-translate-y-1 transition"
            >
              <div className="flex items-center gap-3 mb-4 ">
                <img
                  src={project.icon}
                  alt={`${project.title} icon`}
                  className="w-10 h-10 rounded-full border border-highlight"
                />
                <h2 className="text-xl font-bold text-headline group-hover:text-highlight transition">
                  {project.title}
                </h2>
              </div>
              <p className="text-sm leading-relaxed">{project.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
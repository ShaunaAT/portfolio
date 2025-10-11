import ProjectCard from "./projectcard";

const projects = [
  {
    title: "BridgeMedAI",
    description: "First place hackathon project, an AI-driven system for improving clinical trial recruitment and unifying patient records.",
    link: "/projects/bridgemed",
    icon: "/portfolio/bridgemed-icon.png"
  },
  {
    title: "Campsite Scan",
    description: "Exploring lightweight computer vision models and datasets for forest fire risk detection at campsites.",
    link: "/projects/campsite",
    icon: "/portfolio/campsite-icon__2_.png"
  },
  {
    title: "Sorting Visualizer",
    description: "Interactive visualization tool to demonstrate foundational sorting algorithms.",
    link: "/projects/sorting", 
    icon: "/portfolio/sorting-icon.png"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-headline py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-background mb-12 text-center">
          Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

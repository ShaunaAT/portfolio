import ProjectCard from "./projectcard";

const projects = [
  {
    title: "BridgeMedAI",
    description: "First place project proposal for Synapsis Biohackathon, using AI to improve patient care.",
    link: "/projects/bridgemed",
    icon: "/bridgemed-icon.png"
  },
  {
    title: "Campsite Scan",
    description: "Exploring lightweight computer vision models for forest fire risk detection.",
    link: "/projects/campsite",
    icon: "/campsite-icon__2_.png"
  },
  {
    title: "Sorting Visualizer",
    description: "Interactive visualization tool to demonstrate foundational sorting algorithms.",
    link: "/projects/sorting", // can be a future internal page
    icon: "sorting-icon.png"
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

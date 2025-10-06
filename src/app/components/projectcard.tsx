interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  icon?: string; // rename from image -> icon
}

export default function ProjectCard({ title, description, link, icon }: ProjectCardProps) {
  return (
    <div className="relative rounded-xl border border-stroke bg-background p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition">
      
      {/* Icon + Title Row */}
      <div className="flex items-center gap-3 mb-4">
        {icon && (
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-background/10 border border-stroke overflow-hidden">
            <img
              src={icon}
              alt={`${title} icon`}
              className="w-4/5 h-4/5 object-contain"
            />
          </div>
        )}
        <h3 className="text-xl font-semibold text-headline">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-paragraph flex-grow">{description}</p>

      {/* Link */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block px-4 py-2 rounded-full bg-button text-button-text hover:brightness-95"
      >
        View Project
      </a>
    </div>
  );
}
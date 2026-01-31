interface TechTagProps {
  name: string;
}

export function TechTag({ name }: TechTagProps) {
  return <span className="tech-tag">{name}</span>;
}

interface TechTagsProps {
  technologies: string[];
  limit?: number;
}

export function TechTags({ technologies, limit }: TechTagsProps) {
  const displayTech = limit ? technologies.slice(0, limit) : technologies;
  
  return (
    <div className="flex flex-wrap gap-2">
      {displayTech.map((tech) => (
        <TechTag key={tech} name={tech} />
      ))}
    </div>
  );
}

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({ tag, title, description, center = true }: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""}`}>
      {tag && (
        <span className="inline-block px-3 py-0 text-xs font-semibold tracking-wider uppercase rounded-full bg-secondary text-secondary-foreground mb-3">
          {tag}
        </span>
      )}
      <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h2>
      {description && (
        <p className="mt-0 text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">{description}</p>
      )}
    </div>
  );
}

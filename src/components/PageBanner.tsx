interface PageBannerProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
}

export default function PageBanner({ title, subtitle, imageSrc }: PageBannerProps) {
  return (
    <section className="relative h-64 md:h-66 overflow-hidden">
      <img src={imageSrc} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 hero-gradient" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground animate-fade-up">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-base md:text-lg text-primary-foreground/80 max-w-2xl animate-fade-up" style={{ animationDelay: "0.15s" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

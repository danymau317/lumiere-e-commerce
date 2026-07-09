import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  subtitle: string;
  subtitleItalic?: string;
  description?: string;
  children?: ReactNode;
};

export default function Section({
  title,
  subtitle,
  subtitleItalic,
  description,
  children,
}: SectionProps) {
  return (
    <section className="px-5 lg:p-10">
      <header className="lg:mb-10">
        <h2 className="text-2xl uppercase tracking-widest text-title-secondary font-light mb-1">
          {title}
        </h2>
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <h2 className="font-playfair text-3xl text-title-primary font-semibold mb-2">
            {subtitle}
            {subtitleItalic && <span className="italic">categoría</span>}
          </h2>
          {description && (
            <p className="text-text-secondary text-justify">{description}</p>
          )}

          {children}
        </div>
      </header>
    </section>
  );
}

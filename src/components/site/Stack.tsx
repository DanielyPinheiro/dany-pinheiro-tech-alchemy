import { SectionHeading } from "./Solucoes";

const stack = ["Next.js", "TypeScript", "Tailwind CSS", "Power BI", "Excel VBA"];

export function Stack() {
  return (
    <section id="stack" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Stack" title="Ferramentas que dão velocidade às ideias" />
        <div className="mt-10 flex flex-wrap gap-3">
          {stack.map((tech) => (
            <span
              key={tech}
              className="glass rounded-full px-5 py-2.5 text-sm font-medium text-foreground transition hover:text-gold"
              style={{ boxShadow: "var(--shadow-glow-purple)" }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

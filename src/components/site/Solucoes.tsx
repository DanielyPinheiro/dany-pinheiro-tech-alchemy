import { BarChart3, Cog, ShieldCheck, Code2 } from "lucide-react";

const items = [
  {
    icon: Cog,
    title: "Automação de Processos",
    desc: "Workflows inteligentes que eliminam retrabalho e liberam tempo para decisões de alto valor.",
  },
  {
    icon: BarChart3,
    title: "Dashboards Estratégicos",
    desc: "Visualizações em Power BI e web que traduzem números em narrativas acionáveis.",
  },
  {
    icon: ShieldCheck,
    title: "Controles Internos",
    desc: "Frameworks de governança e compliance com rastreabilidade e segurança de ponta a ponta.",
  },
  {
    icon: Code2,
    title: "Desenvolvimento Web",
    desc: "Aplicações full-stack com Next.js, TypeScript e arquitetura escalável.",
  },
];

export function Solucoes() {
  return (
    <section id="solucoes" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Soluções" title="Inteligência aplicada ao seu negócio" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {items.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-glass)" }}
            >
              <div
                className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition group-hover:opacity-60"
                style={{ background: "radial-gradient(circle, var(--primary), transparent 60%)" }}
              />
              <div
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                style={{
                  background: "color-mix(in oklab, var(--gold) 15%, transparent)",
                  boxShadow: "var(--shadow-glow-gold)",
                }}
              >
                <Icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}

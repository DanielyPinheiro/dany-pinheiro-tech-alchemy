import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./Solucoes";
import { Reveal } from "./Reveal";

const projects = [
  {
    name: "Exclã Celebra",
    desc: "Plataforma de experiências e celebrações com identidade visual marcante.",
    tag: "Web • Branding",
    grad: "linear-gradient(135deg, var(--pink), var(--primary))",
  },
  {
    name: "Lumina",
    desc: "Sistema de iluminação de dados — dashboards executivos com narrativa visual.",
    tag: "Power BI • Data",
    grad: "linear-gradient(135deg, var(--gold), var(--pink))",
  },
  {
    name: "Oráculo",
    desc: "Motor analítico preditivo para apoio à tomada de decisão estratégica.",
    tag: "Analytics • IA",
    grad: "linear-gradient(135deg, var(--primary), oklch(0.45 0.18 280))",
  },
  {
    name: "LuzComAromas",
    desc: "E-commerce artesanal com automação de operações e controle de estoque.",
    tag: "Full-stack • Ops",
    grad: "linear-gradient(135deg, var(--gold), var(--primary))",
  },
];

export function Projetos() {
  return (
    <section id="projetos" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Projetos" title="Cases que combinam técnica e propósito" />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <article className="glass group h-full overflow-hidden rounded-2xl transition hover:-translate-y-1">
                <div className="relative h-44 w-full overflow-hidden">
                  <div className="absolute inset-0" style={{ background: p.grad, opacity: 0.85 }} />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, white 0, transparent 35%), radial-gradient(circle at 70% 70%, var(--gold) 0, transparent 40%)",
                      mixBlendMode: "overlay",
                      opacity: 0.4,
                    }}
                  />
                  <span className="absolute bottom-3 left-4 text-xs font-medium text-white/90">
                    {p.tag}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <ArrowUpRight className="h-5 w-5 text-gold transition group-hover:rotate-12" />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <a
                    href="#contato"
                    className="mt-4 inline-block text-sm font-semibold text-foreground transition hover:text-gold"
                  >
                    Ver case →
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

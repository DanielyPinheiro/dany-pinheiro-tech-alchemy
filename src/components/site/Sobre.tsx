import { Compass } from "lucide-react";
import { SectionHeading } from "./Solucoes";
import { Reveal } from "./Reveal";

export function Sobre() {
  return (
    <section id="sobre" className="relative py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <SectionHeading eyebrow="Sobre" title="Na interseção entre dados, tecnologia e estratégia." />
          <div className="mt-6 inline-flex h-12 w-12 items-center justify-center rounded-xl glass">
            <Compass className="h-6 w-6 text-gold" />
          </div>
          <p className="mt-6 text-base text-muted-foreground sm:text-lg">
            Sou Dani Pinheiro — analista de dados, consultora e desenvolvedora full-stack.
            Conecto governança, automação e visualização para transformar operações complexas
            em decisões claras. Trabalho onde o rigor analítico encontra a sensibilidade do
            design e a velocidade da engenharia moderna.
          </p>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Minha prática combina controles internos sólidos, dashboards executivos e produtos
            digitais sob medida — sempre com foco em significado, não apenas em métricas.
          </p>
        </div>

        <div className="glass relative rounded-3xl p-10 sm:p-14">
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl opacity-40"
            style={{ background: "var(--gradient-hero)" }}
          />
          <p className="relative text-2xl font-semibold leading-tight sm:text-4xl">
            Dados contam histórias.
            <br />
            <span className="text-gold-gradient">Eu dou significado.</span>
          </p>
          <p className="relative mt-4 text-sm text-muted-foreground">— assinatura Tech Alquimia</p>
        </div>
      </div>
    </section>
  );
}

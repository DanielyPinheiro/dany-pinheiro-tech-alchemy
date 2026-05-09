import { Mail, Linkedin } from "lucide-react";

export function Contato() {
  return (
    <section id="contato" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="glass relative overflow-hidden rounded-3xl p-10 text-center sm:p-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse at center, var(--gold), transparent 60%)",
            }}
          />
          <span className="relative text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Contato
          </span>
          <h2 className="relative mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Vamos transformar seus <span className="text-gold-gradient">dados</span> em{" "}
            <span className="text-pink-purple-gradient">estratégia</span>?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-muted-foreground">
            Conte sobre seu desafio. Respondo em até 24h com um plano inicial.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:contato@danypinheiro.com"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground"
              style={{
                background: "var(--gradient-pink-purple)",
                boxShadow: "var(--shadow-glow-pink)",
              }}
            >
              <Mail className="h-4 w-4" /> contato@danypinheiro.com
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            >
              <Linkedin className="h-4 w-4 text-gold" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Dany Pinheiro • Tech Alquimia</p>
        <p className="italic">Dados contam histórias. Eu dou significado.</p>
      </div>
    </footer>
  );
}

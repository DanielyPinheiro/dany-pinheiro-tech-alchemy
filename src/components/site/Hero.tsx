"use client";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { OwlMark } from "./OwlMark";

export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            Dani Pinheiro • Tech Alquimia
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Transformo{" "}
            <span className="text-pink-purple-gradient">dados complexos</span> em{" "}
            <span className="text-gold-gradient">decisões estratégicas</span>.
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Dani Pinheiro | Analista de Dados • Consultora • Desenvolvedora Full-stack •
            Especialista em Controles Internos.
          </p>
          <p className="mt-6 text-lg italic text-foreground/90">
            “Dados contam histórias.{" "}
            <span className="text-gold-gradient font-semibold not-italic">
              Eu dou significado.
            </span>
            ”
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projetos"
              className="rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:translate-y-[-1px]"
              style={{
                background: "var(--gradient-pink-purple)",
                boxShadow: "var(--shadow-glow-pink)",
              }}
            >
              Ver Projetos
            </a>
            <a
              href="#contato"
              className="glass rounded-full px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white/10"
            >
              Falar Comigo
            </a>
          </div>
        </motion.div>

        <div className="relative mx-auto aspect-square w-[min(440px,90%)]">
          <div
            className="absolute inset-0 rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, var(--gold), transparent 60%)", opacity: 0.35 }}
          />
          <div className="glass relative flex h-full w-full items-center justify-center rounded-[2rem] animate-float">
            <OwlMark className="h-2/3 w-2/3" />
          </div>
        </div>
      </div>
    </section>
  );
}

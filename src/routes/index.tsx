import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Solucoes } from "@/components/site/Solucoes";
import { Sobre } from "@/components/site/Sobre";
import { Projetos } from "@/components/site/Projetos";
import { Stack } from "@/components/site/Stack";
import { Contato, Footer } from "@/components/site/Contato";
import { GlowBackground } from "@/components/site/GlowBackground";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dany Pinheiro • Tech Alquimia — Dados, Estratégia e Tecnologia" },
      {
        name: "description",
        content:
          "Portfólio de Dani Pinheiro: analista de dados, consultora e desenvolvedora full-stack. Transformo dados complexos em decisões estratégicas.",
      },
      { property: "og:title", content: "Dany Pinheiro • Tech Alquimia" },
      {
        property: "og:description",
        content:
          "Dados contam histórias. Eu dou significado. Soluções em automação, dashboards, controles internos e desenvolvimento web.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <GlowBackground />
      <Navbar />
      <main>
        <Hero />
        <Solucoes />
        <Sobre />
        <Projetos />
        <Stack />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

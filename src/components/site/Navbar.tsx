import { OwlMark } from "./OwlMark";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#projetos", label: "Projetos" },
  { href: "#stack", label: "Stack" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 z-50 w-[min(1100px,calc(100%-2rem))] -translate-x-1/2">
      <nav className="glass flex items-center justify-between rounded-full px-4 py-2.5 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <OwlMark className="h-8 w-8" />
          <span className="text-sm font-bold tracking-wide">
            DANY <span className="text-muted-foreground font-medium">• TECH ALQUIMIA</span>
          </span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contato"
          className="rounded-full px-4 py-1.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          style={{ background: "var(--gradient-pink-purple)", boxShadow: "var(--shadow-glow-pink)" }}
        >
          Vamos falar
        </a>
      </nav>
    </header>
  );
}

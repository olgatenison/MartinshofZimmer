// components/Header.tsx

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-gold bg-(--bezel)/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold font-serif text-2xl uppercase text-gold">
            M
          </div>

          <div className="leading-tight text-gold">
            {" "}
            <div className="font-serif text-xl tracking-widest uppercase text-dark-green">
              Martinshof
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold">
              Zimmer
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-(--gray-green)  md:flex">
          <a className="transition hover:text-white" href="#apartments">
            Apartments
          </a>
          <a className="transition hover:text-white" href="#vorteile">
            Vorteile
          </a>
          <a className="transition hover:text-white" href="#konditionen">
            Konditionen
          </a>
          <a className="transition hover:text-white" href="#kontakt">
            Kontakt
          </a>
        </nav>

        <a
          href="#kontakt"
          className="rounded-full bg-bezel px-5 py-2.5 text-sm font-semibold text-(--dark-green)  transition-all duration-500 ease-out hover:bg-(--gold) hover:text-white font-wide font-serif border-gold border"
        >
          Unterkunft anfragen
        </a>
      </div>
    </header>
  );
}

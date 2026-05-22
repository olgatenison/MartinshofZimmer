// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-dark-green/90 px-5 py-12 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 text-center md:grid-cols-[1fr_1.2fr_1fr] md:text-left">
        <div>
          <div className="font-serif text-2xl">Martinshof Apartments</div>
          <p className="mt-3 text-sm text-white/60">© 2026 Martinshof</p>
        </div>

        <address className="not-italic leading-7 text-white/70">
          Michael P. Martin · Martin Michael GmbH
          <br />
          Hauptstraße 28 · 2183 St. Ulrich – Neusiedl/Zaya
          <br />
          Österreich
        </address>

        <div className="flex flex-col items-center gap-3 text-sm text-white/70 md:items-end md:text-right">
          <a href="#" className="transition hover:text-white">
            Datenschutz
          </a>
          <span>Erstellt von DVI</span>
        </div>
      </div>
    </footer>
  );
}

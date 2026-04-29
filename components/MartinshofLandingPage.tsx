export default function MartinshofLandingPage() {
  const benefits = [
    { title: "Ruhige Lage", text: "Entspannte Umgebung im Weinviertel" },
    { title: "Parkplätze vor Ort", text: "Direkt bei den Apartments" },
    { title: "WLAN inklusive", text: "Für Arbeit und Kommunikation" },
    { title: "Reinigung alle 14 Tage", text: "Sauber und zuverlässig" },
  ];

  const apartmentFeatures = [
    "2–3 separate Apartments",
    "4–6 Personen pro Apartment",
    "Ausschließlich Einzelbetten",
    "Eigene Wohnküche",
    "Aufenthaltsbereich",
    "Voll ausgestattet",
  ];

  const houses = [
    {
      name: "Apartment Haus 1",
      text: "Funktionale Unterkunft für Teams, die eine klare und unkomplizierte Wohnlösung benötigen.",
    },
    {
      name: "Apartment Haus 2",
      text: "Ideal für Monteure, Bau- und Projektteams mit Bedarf an separaten Schlafmöglichkeiten.",
    },
    {
      name: "Apartment Haus 3",
      text: "Ruhig gelegen, gepflegt und auf längere Aufenthalte von Mitarbeitern ausgelegt.",
    },
  ];

  const process = [
    "Flexible Mietdauer: wöchentlich oder monatlich",
    "Individuelle Preisgestaltung je nach Bedarf",
    "Firmenrechnung selbstverständlich",
    "Klare und transparente Abwicklung",
    "Kurzfristige Lösungen möglich",
  ];

  const targetGroups = [
    "Bauunternehmen",
    "Montagefirmen",
    "Industrieprojekte",
    "Projektteams in Österreich",
  ];

  return (
    <main className="min-h-screen bg-[#f7f2ea] text-[#17231d]">
      {/* <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#10251d]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c69b4a] text-lg font-semibold text-[#d9b66f]">
              M
            </div>
            <div className="leading-tight text-white">
              <div className="text-xs uppercase tracking-[0.35em] text-[#d9b66f]">
                Weingut
              </div>
              <div className="font-serif text-xl">Martinshof</div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
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
            className="rounded-full bg-[#c69b4a] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-[#b2873f]"
          >
            Unterkunft anfragen
          </a>
        </div>
      </header> */}

      {/* <section
        id="top"
        className="relative overflow-hidden bg-[#10251d] pt-24 text-white"
      >
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -left-24 top-28 h-72 w-72 rounded-full bg-[#c69b4a]/30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#4d6b45]/40 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur">
              Firmenapartments im Weinviertel · Niederösterreich
            </div>
            <h1 className="max-w-3xl font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl">
              Firmenapartments im Weinviertel
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76 md:text-xl">
              Komfortable Unterkünfte für Ihre Mitarbeiter – ideal für Bau-,
              Montage- und Industrieprojekte in Österreich.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#kontakt"
                className="rounded-full bg-[#c69b4a] px-7 py-4 text-center font-semibold text-white shadow-xl shadow-black/20 transition hover:bg-[#b2873f]"
              >
                Jetzt Verfügbarkeit anfragen
              </a>
              <a
                href="#apartments"
                className="rounded-full border border-white/20 px-7 py-4 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Apartments ansehen
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-4/5 rounded-4xl border border-white/15 bg-white/10 p-3 shadow-2xl shadow-black/30 backdrop-blur">
              <div
                className="relative flex h-full items-end overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat p-6 text-white"
                style={{ backgroundImage: "url('/hero.jpg')" }}
              >
                <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/15 to-transparent" />

                <div className="relative z-10">
                  <div className="text-sm uppercase tracking-[0.3em] text-white/70">
                    Martinshof
                  </div>
                  <div className="mt-2 font-serif text-3xl font-semibold">
                    Firmenapartments
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 hidden w-56 rounded-3xl bg-white p-5 text-[#17231d] shadow-2xl md:block">
              <div className="text-3xl font-semibold text-[#c69b4a]">4–6</div>
              <div className="mt-1 text-sm text-[#4e5d53]">
                Personen pro Apartment
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section id="vorteile" className="relative z-10 -mt-10 px-5 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 rounded-4xl bg-white p-3 shadow-2xl shadow-[#10251d]/10 md:grid-cols-4">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.4rem] border border-[#eadfcd] bg-[#fbf8f2] p-6 text-center items-center"
            >
              <div className="mb-4 h-10 w-10 rounded-full bg-[#c69b4a]/15" />
              <h3 className="font-semibold font-serif uppercase text-dark-green">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-green">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section> */}

      <section id="apartments" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c69b4a]">
            Unsere Apartments
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl">
            Funktional. Klar. Auf Arbeitsteams ausgelegt.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#627064]">
            Die Apartments bieten alles, was Mitarbeiter während eines Projekts
            brauchen: separate Schlafbereiche, eigene Küche und eine ruhige
            Umgebung nach der Arbeit.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {apartmentFeatures.map((feature) => (
            <div
              key={feature}
              className="rounded-[1.6rem] border border-[#eadfcd] bg-white p-7 shadow-sm"
            >
              <div className="mb-5 h-12 w-12 rounded-2xl bg-[#10251d]" />
              <h3 className="text-lg font-semibold">{feature}</h3>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {houses.map((house, index) => (
            <article
              key={house.name}
              className="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-[#10251d]/8"
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-[#eee4d4] to-[#b6a987] text-sm uppercase tracking-[0.3em] text-white">
                Foto {index + 1}
              </div>
              <div className="p-7">
                <h3 className="font-serif text-2xl">{house.name}</h3>
                <p className="mt-3 leading-7 text-[#627064]">{house.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c69b4a]">
              Für Unternehmen
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              Für welche Unternehmen das geeignet ist
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#627064]">
              Unsere Apartments sind für Unternehmen gedacht, die Mitarbeiter
              für Projekte in Österreich einsetzen. Geeignet für Teams aus Bau,
              Montage und Industrie, die eine zuverlässige und klare
              Unterkunftslösung benötigen.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {targetGroups.map((group) => (
              <div key={group} className="rounded-[1.6rem] bg-[#f7f2ea] p-7">
                <div className="mb-5 h-10 w-10 rounded-full bg-[#c69b4a]" />
                <h3 className="text-lg font-semibold">{group}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="konditionen"
        className="mx-auto max-w-7xl px-5 py-24 lg:px-8"
      >
        <div className="rounded-[2.5rem] bg-[#10251d] p-8 text-white md:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d9b66f]">
                Konditionen
              </p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                So arbeiten wir
              </h2>
              <p className="mt-6 leading-8 text-white/70">
                Keine komplizierten Buchungswege, sondern eine direkte
                Abstimmung und eine Lösung, die zum Projekt passt.
              </p>
            </div>
            <div className="grid gap-3">
              {process.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-5 rounded-2xl border border-white/10 bg-white/8 p-5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#c69b4a] text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="self-center text-white/86">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eee4d4] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c69b4a]">
                Warum Martinshof?
              </p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                Warum Unternehmen uns wählen
              </h2>
            </div>
            <p className="text-lg leading-8 text-[#627064]">
              Als familiengeführtes Weingut im Weinviertel bieten wir nicht nur
              Unterkünfte, sondern eine klare, funktionierende Lösung für
              Unternehmen und ihre Mitarbeiter.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              "Ruhige Lage mit guter Erreichbarkeit",
              "Schnelle Kommunikation und verlässliche Abstimmung",
              "Gepflegte, funktionale Apartments",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.8rem] bg-white p-8 shadow-sm"
              >
                <div className="mb-6 h-12 w-12 rounded-2xl bg-[#10251d]" />
                <h3 className="text-xl font-semibold leading-7">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] bg-white p-6 shadow-2xl shadow-[#10251d]/10 md:p-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] bg-[#10251d] p-8 text-white md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d9b66f]">
              Kontakt
            </p>
            <h2 className="mt-4 font-serif text-4xl">Schreiben Sie uns</h2>
            <p className="mt-5 leading-8 text-white/72">
              Wir melden uns schnellstmöglich mit passenden Informationen bei
              Ihnen.
            </p>
            <div className="mt-10 space-y-5 text-white/86">
              <p>+43 664 3567 360</p>
              <p>weingut@martinshof.at</p>
              <p>Hauptstraße 28, 2183 St. Ulrich – Neusiedl/Zaya, Österreich</p>
            </div>
          </div>

          <form className="grid gap-4 self-center">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                className="rounded-2xl border border-[#eadfcd] bg-[#fbf8f2] px-5 py-4 outline-none transition focus:border-[#c69b4a]"
                placeholder="Name"
              />
              <input
                className="rounded-2xl border border-[#eadfcd] bg-[#fbf8f2] px-5 py-4 outline-none transition focus:border-[#c69b4a]"
                placeholder="E-Mail"
              />
            </div>
            <input
              className="rounded-2xl border border-[#eadfcd] bg-[#fbf8f2] px-5 py-4 outline-none transition focus:border-[#c69b4a]"
              placeholder="Unternehmen"
            />
            <input
              className="rounded-2xl border border-[#eadfcd] bg-[#fbf8f2] px-5 py-4 outline-none transition focus:border-[#c69b4a]"
              placeholder="Telefon"
            />
            <textarea
              className="min-h-36 rounded-2xl border border-[#eadfcd] bg-[#fbf8f2] px-5 py-4 outline-none transition focus:border-[#c69b4a]"
              placeholder="Nachricht"
            />
            <label className="flex gap-3 text-sm leading-6 text-[#627064]">
              <input type="checkbox" className="mt-1" />
              <span>
                Ich willige in die Verarbeitung meiner Daten gemäß der
                Datenschutzerklärung ein.
              </span>
            </label>
            <button
              type="button"
              className="mt-2 rounded-full bg-[#c69b4a] px-7 py-4 font-semibold text-white transition hover:bg-[#b2873f] md:w-fit"
            >
              Anfrage senden
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[#10251d] px-5 py-12 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1.2fr_1fr]">
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
          <div className="flex flex-col gap-3 text-sm text-white/70 md:text-right">
            <a href="#">Datenschutz</a>
            <span>Erstellt von DVI</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

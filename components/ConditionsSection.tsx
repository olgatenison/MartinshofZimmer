// components/ConditionsSection.tsx

const process = [
  "Flexible Mietdauer: wöchentlich oder monatlich",
  "Individuelle Preisgestaltung je nach Bedarf",
  "Firmenrechnung selbstverständlich",
  "Klare und transparente Abwicklung",
  "Kurzfristige Lösungen möglich",
];

export default function ConditionsSection() {
  return (
    <section
      id="konditionen"
      className="relative overflow-hidden bg-dark-green py-24 text-white"
    >
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-wide text-gold">
              Konditionen
            </p>

            <h2 className="mt-4 max-w-xl font-serif text-4xl tracking-wide text-white md:text-5xl">
              So arbeiten wir
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-white/72">
              Keine komplizierten Buchungswege, sondern eine direkte Abstimmung
              und eine Lösung, die zum Projekt passt.
            </p>

            <a
              href="#kontakt"
              className="mt-8 inline-flex rounded-full bg-gold px-7 py-4 text-sm font-semibold tracking-[0.03em] text-white shadow-xl shadow-black/20 transition-all duration-500 ease-out hover:-translate-y-0.5 hover:bg-white hover:text-dark-green"
            >
              Angebot anfordern
            </a>
          </div>

          <div className="grid gap-3">
            {process.map((item, index) => (
              <div
                key={item}
                className="group flex items-center gap-5 rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/12"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold font-serif text-lg font-semibold text-white shadow-lg shadow-black/15">
                  {index + 1}
                </div>

                <p className="text-base leading-7 text-white/82">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const houses = [
  {
    name: "Apartment Anne-Mari",
    text: "Funktionale Unterkunft für Teams, die eine klare und unkomplizierte Wohnlösung benötigen.",
    img: "/01a.png",
  },
  {
    name: "Apartment Erich",
    text: "Ideal für Monteure, Bau- und Projektteams mit Bedarf an separaten Schlafmöglichkeiten.",
    img: "/02a.png",
  },
  {
    name: "Apartment Herwig",
    text: "Ruhig gelegen, gepflegt und auf längere Aufenthalte von Mitarbeitern ausgelegt.",
    img: "/03a.png",
  },
];

const apartmentFeatures = [
  {
    title: "2–3 separate Apartments",
    text: "Flexible Aufteilung für kleinere und größere Arbeitsteams.",
  },
  {
    title: "4–6 Personen pro Apartment",
    text: "Ausreichend Platz für Mitarbeiter während kurz- oder langfristiger Projekte.",
  },
  {
    title: "Eigene Wohnküche",
    text: "Praktisch ausgestattet für gemeinsames Kochen und Selbstversorgung.",
  },
  {
    title: "Aufenthaltsbereich",
    text: "Ein separater Bereich zum Essen, Entspannen und Zusammenkommen.",
  },
  {
    title: "Voll ausgestattet",
    text: "Alles Wesentliche ist vorhanden – funktional, sauber und unkompliziert.",
  },
];

export default function Funktional() {
  return (
    <section id="apartments" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-wide text-gold">
          Unsere Apartments
        </p>

        <h2 className="mt-4 font-serif text-4xl text-dark-green md:text-6xl">
          Funktional. Klar. Auf Arbeitsteams ausgelegt.
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-green">
          Die Apartments bieten alles, was Mitarbeiter während eines Projekts
          brauchen: separate Schlafbereiche, eigene Küche und eine ruhige
          Umgebung nach der Arbeit.
        </p>
      </div>

      <div className="mt-16 grid items-center gap-14 lg:grid-cols-[0.9fr_1fr]">
        <div className="relative min-h-90">
          <div className="absolute left-0 top-16 h-65 w-52.5 overflow-hidden rounded-[1.7rem] bg-white p-2 shadow-2xl shadow-dark-green/30 ring-1 ring-white/70 md:h-82.5 md:w-67.5">
            <div className="relative h-full w-full overflow-hidden rounded-[1.25rem]">
              <Image
                src="/02.jpg"
                alt="Martinshof Apartment Schlafzimmer"
                fill
                priority
                sizes="(min-width: 1024px) 270px, 45vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute left-37.5 top-0 h-62.5 w-47.5 overflow-hidden rounded-[1.7rem] bg-white p-2 shadow-2xl shadow-dark-green/30 ring-1 ring-white/70 md:left-55 md:h-80 md:w-60">
            <div className="relative h-full w-full overflow-hidden rounded-[1.25rem]">
              <Image
                src="/03.jpg"
                alt="Martinshof Apartment Wohnbereich"
                fill
                priority
                sizes="(min-width: 1024px) 240px, 42vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="space-y-5">
            {apartmentFeatures.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-4 border-b border-gold/30 pb-5"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />

                <div>
                  <h3 className="font-serif text-lg uppercase tracking-wide text-dark-green">
                    {feature.title}
                  </h3>

                  <p className="mt-2 max-w-xl text-base leading-7 text-gray-green">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24 grid gap-5 lg:grid-cols-3">
        {houses.map((house) => (
          <article
            key={house.name}
            className="group overflow-hidden rounded-4xl bg-white shadow-xl shadow-[#10251d]/8 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#10251d]/14"
          >
            <div className="relative aspect-4/3 overflow-hidden bg-[#eee4d4]">
              <Image
                src={house.img}
                alt={house.name}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/35 via-black/5 to-transparent opacity-80" />
            </div>

            <div className="p-7">
              <h3 className="font-serif text-lg uppercase tracking-wide text-dark-green">
                {house.name}
              </h3>

              <p className="mt-3 leading-7 text-gray-green">{house.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

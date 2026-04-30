// components/TargetGroups.tsx

import { Building2, Hammer, Factory, UsersRound } from "lucide-react";

const targetGroups = [
  {
    title: "Bauunternehmen",
    icon: Building2,
  },
  {
    title: "Montagefirmen",
    icon: Hammer,
  },
  {
    title: "Industrieprojekte",
    icon: Factory,
  },
  {
    title: "Projektteams in Österreich",
    icon: UsersRound,
  },
];

export default function TargetGroups() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-6 text-sm uppercase tracking-wide text-gold">
              Für Unternehmen
            </p>

            <h2 className="mt-4 font-serif text-4xl text-dark-green md:text-5xl">
              Für welche Unternehmen das geeignet ist
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-green">
              Unsere Apartments sind für Unternehmen gedacht, die Mitarbeiter
              für Projekte in Österreich einsetzen. Geeignet für Teams aus Bau,
              Montage und Industrie, die eine zuverlässige und klare
              Unterkunftslösung benötigen.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {targetGroups.map((group) => {
              const Icon = group.icon;

              return (
                <div
                  key={group.title}
                  className="flex min-h-48 flex-col items-center justify-center rounded-[1.6rem] bg-[#f7f2ea] p-7 text-center transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg border border-gold/30"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-dark-green">
                    <Icon className="h-6 w-6 text-gold" strokeWidth={1.8} />
                  </div>

                  <h3 className="font-serif text-lg  uppercase tracking-wide text-dark-green">
                    {group.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#f6f1e8] px-5 py-8 text-[#14231c] lg:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10 flex flex-col gap-5 rounded-[2rem] bg-dark-green px-6 py-6 text-white shadow-2xl shadow-dark-green/10 md:flex-row md:items-center md:justify-between md:px-8">
          <Link href="/de" className="font-serif text-3xl tracking-wide">
            Martinshof Apartments
          </Link>

          <Link
            href="/de"
            className="w-fit rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-dark-green"
          >
            Zurück zur Startseite
          </Link>
        </header>

        <section className="rounded-[2.5rem] bg-white p-6 shadow-2xl shadow-dark-green/10 md:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">
            Datenschutz
          </p>

          <h1 className="mt-4 font-serif text-4xl text-dark-green md:text-5xl">
            Datenschutzerklärung
          </h1>

          <div className="mt-10 space-y-8 text-gray-green">
            <section>
              <h2 className="mb-3 text-xl font-semibold text-dark-green">
                1. Verantwortlicher
              </h2>

              <p className="leading-7">
                Martin Michael GmbH
                <br />
                Geschäftsführer: Michael P. Martin
                <br />
                Hauptstraße 28
                <br />
                2183 Neusiedl/Zaya
                <br />
                Österreich
                <br />
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:weingut@martinshof.at"
                  className="text-gold transition hover:underline"
                >
                  weingut@martinshof.at
                </a>
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-dark-green">
                2. Allgemeine Hinweise
              </h2>

              <p className="leading-7">
                Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges
                Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich
                und entsprechend der gesetzlichen Datenschutzvorschriften.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-dark-green">
                3. Kontaktformular
              </h2>

              <p className="leading-7">
                Wenn Sie uns über das Kontaktformular kontaktieren, verwenden
                wir Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage.
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Name</li>
                <li>E-Mail-Adresse</li>
                <li>Telefonnummer</li>
                <li>Unternehmen, optional</li>
                <li>Nachricht</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-dark-green">
                4. Rechtsgrundlage
              </h2>

              <p className="leading-7">
               Die Verarbeitung erfolgt gemäß{" "}
<a
  href="https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gold transition hover:underline"
>
  Art. 6 Abs. 1 lit. a DSGVO
</a>{" "}
sowie{" "}
<a
  href="https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gold transition hover:underline"
>
  Art. 6 Abs. 1 lit. b DSGVO
</a>
, sofern Ihre Anfrage der Anbahnung eines Vertragsverhältnisses
dient.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-dark-green">
                5. Speicherdauer
              </h2>

              <p className="leading-7">
                Ihre Daten werden nur so lange gespeichert, wie dies für die
                Bearbeitung Ihrer Anfrage erforderlich ist oder gesetzliche
                Aufbewahrungspflichten bestehen.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-dark-green">
                6. Weitergabe von Daten
              </h2>

              <p className="leading-7">
                Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt
                nicht, sofern keine gesetzliche Verpflichtung besteht. Zur
                technischen Übermittlung von Kontaktanfragen werden
                E-Mail-Dienste verwendet.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-dark-green">
                7. Cookies
              </h2>

              <p className="leading-7">
                Diese Website verwendet technisch notwendige Cookies. Analyse-
                oder Marketing-Cookies werden nur nach entsprechender
                Einwilligung eingesetzt.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-dark-green">
                8. Ihre Rechte
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>Auskunft über gespeicherte Daten</li>
                <li>Berichtigung unrichtiger Daten</li>
                <li>Löschung Ihrer Daten</li>
                <li>Einschränkung der Verarbeitung</li>
                <li>Datenübertragbarkeit</li>
                <li>Widerspruch gegen die Verarbeitung</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-dark-green">
                9. Kontakt
              </h2>

              <p className="leading-7">
                Bei Fragen zum Datenschutz kontaktieren Sie uns bitte unter:{" "}
                <a
                  href="mailto:weingut@martinshof.at"
                  className="text-gold transition hover:underline"
                >
                  weingut@martinshof.at
                </a>
              </p>
            </section>

            <p className="border-t border-[#eadfcd] pt-6 text-sm text-gray-green/70">
              Stand: Mai 2026
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
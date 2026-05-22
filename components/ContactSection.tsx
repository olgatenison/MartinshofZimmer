// components/ContactSection.tsx

export default function ContactSection() {
  return (
    <section id="kontakt" className="px-5 pb-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] bg-white p-6 shadow-2xl shadow-dark-green/10 md:p-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-4xl bg-dark-green/90 p-8 text-white md:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">
            Kontakt
          </p>

          <h2 className="mt-4 font-serif text-4xl tracking-wide">
            Schreiben Sie uns
          </h2>

          <p className="mt-5  text-white border-b-2 border-gold/30 pb-10 text-balance">
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
              className="rounded-2xl border border-[#eadfcd] bg-[#fbf8f2] px-5 py-4 outline-none transition focus:border-gold"
              placeholder="Name"
              name="name"
              type="text"
            />

            <input
              className="rounded-2xl border border-[#eadfcd] bg-[#fbf8f2] px-5 py-4 outline-none transition focus:border-gold"
              placeholder="E-Mail"
              name="email"
              type="email"
            />
          </div>

          <input
            className="rounded-2xl border border-[#eadfcd] bg-[#fbf8f2] px-5 py-4 outline-none transition focus:border-gold"
            placeholder="Unternehmen"
            name="company"
            type="text"
          />

          <input
            className="rounded-2xl border border-[#eadfcd] bg-[#fbf8f2] px-5 py-4 outline-none transition focus:border-gold"
            placeholder="Telefon"
            name="phone"
            type="tel"
          />

          <textarea
            className="min-h-36 resize-none rounded-2xl border border-[#eadfcd] bg-[#fbf8f2] px-5 py-4 outline-none transition focus:border-gold"
            placeholder="Nachricht"
            name="message"
          />

          <label className="flex gap-3 text-sm leading-6 text-gray-green items-center">
            <input type="checkbox" className="mt-1" name="privacy" />
            <span>
              Ich willige in die Verarbeitung meiner Daten gemäß der
              Datenschutzerklärung ein.
            </span>
          </label>

          <button
            type="button"
            className="mt-2 rounded-full bg-gold px-7 py-4 font-semibold text-white transition-all duration-500 ease-out hover:-translate-y-0.5 hover:bg-(--dark-green)/90 "
          >
            Anfrage senden
          </button>
        </form>
      </div>
    </section>
  );
}

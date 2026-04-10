import { useState } from 'react';
import PageHero from '../components/PageHero';

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Ta kontakt"
        title="Vi gleder oss til å høre fra deg"
        lead="Har du spørsmål om utdanninger, kurs eller en personlig samtale? Fyll ut skjemaet, så tar vi kontakt innen kort tid."
      />
      <section className="py-20">
        <div className="container-prose grid gap-12 md:grid-cols-[1.2fr,1fr]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="card space-y-5"
          >
            {sent ? (
              <div className="py-10 text-center">
                <div className="mb-4 text-4xl">🌿</div>
                <h3 className="text-2xl">Takk for din henvendelse!</h3>
                <p className="mt-2 text-ink-700">Vi tar kontakt så snart vi kan.</p>
              </div>
            ) : (
              <>
                <div>
                  <label className="mb-1 block text-sm font-medium">Navn</label>
                  <input required className="w-full rounded-xl border border-clay-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-clay-300" />
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium">E-post</label>
                    <input type="email" required className="w-full rounded-xl border border-clay-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-clay-300" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium">Telefon</label>
                    <input type="tel" className="w-full rounded-xl border border-clay-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-clay-300" />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Hva er du interessert i?</label>
                  <select className="w-full rounded-xl border border-clay-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-clay-300">
                    <option>Utdanning</option>
                    <option>Kurs</option>
                    <option>Personlig coaching</option>
                    <option>Bedriftscoaching</option>
                    <option>Annet</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Melding</label>
                  <textarea rows={5} className="w-full rounded-xl border border-clay-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-clay-300" />
                </div>
                <button type="submit" className="btn-primary w-full md:w-auto">Send melding</button>
              </>
            )}
          </form>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-cream-100 p-8 shadow-soft">
              <h4 className="mb-4 font-serif text-xl">Besøk oss</h4>
              <p className="text-sm text-ink-700">Storgata 56<br />9008 Tromsø</p>
            </div>
            <div className="rounded-2xl bg-cream-100 p-8 shadow-soft">
              <h4 className="mb-4 font-serif text-xl">Kontakt</h4>
              <p className="text-sm text-ink-700">
                +47 400 04 776<br />
                <a className="text-clay-600 hover:underline" href="mailto:post@kfnlp.no">post@kfnlp.no</a>
              </p>
            </div>
            <div className="rounded-2xl bg-sage-100/60 p-8 shadow-soft">
              <h4 className="mb-2 font-serif text-xl">Åpningstider</h4>
              <p className="text-sm text-ink-700">Man–fre · 09:00–16:00</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

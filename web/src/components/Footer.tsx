import { Link } from 'react-router-dom';
import SiteLogo from './SiteLogo';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-clay-100 bg-cream-100/70">
      <div className="container-prose grid gap-10 py-16 md:grid-cols-4">
        <div>
          <div className="mb-4">
            <SiteLogo size="sm" />
          </div>
          <p className="text-sm leading-relaxed text-ink-700">
            Et læringsmiljø for personlig vekst, coaching og sertifiserte utdanninger innen NLP.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-clay-600">Utforsk</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/om-nlp" className="hover:text-clay-500">Om NLP</Link></li>
            <li><Link to="/utdanning" className="hover:text-clay-500">Utdanning</Link></li>
            <li><Link to="/kurs" className="hover:text-clay-500">Kurs</Link></li>
            <li><Link to="/tjenester" className="hover:text-clay-500">Tjenester</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-clay-600">Kontakt</h4>
          <ul className="space-y-2 text-sm text-ink-700">
            <li>Storgata 56, 9008 Tromsø</li>
            <li>+47 400 04 776</li>
            <li><a href="mailto:post@kfnlp.no" className="hover:text-clay-500">post@kfnlp.no</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-clay-600">Nyhetsbrev</h4>
          <p className="mb-3 text-sm text-ink-700">Få inspirasjon og invitasjoner til introkvelder.</p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="E-post"
              className="min-w-0 flex-1 rounded-full border border-clay-200 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-clay-300"
            />
            <button className="rounded-full bg-clay-500 px-4 py-2 text-sm text-cream-50 hover:bg-clay-600">
              Meld på
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-clay-100 py-6">
        <div className="container-prose flex flex-col items-center justify-between gap-2 text-xs text-ink-700 md:flex-row">
          <span>© {new Date().getFullYear()} Kompetansesenteret for NLP</span>
          <span>Org.nr 994 609 246</span>
        </div>
      </div>
    </footer>
  );
}

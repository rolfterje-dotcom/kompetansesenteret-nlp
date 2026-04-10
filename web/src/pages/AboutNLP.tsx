import PageHero from '../components/PageHero';

export default function AboutNLP() {
  return (
    <>
      <PageHero eyebrow="Om oss" title="Hva er NLP — og hvorfor virker det?" />
      <section className="py-20">
        <div className="container-prose grid gap-12 md:grid-cols-[2fr,1fr]">
          <article className="prose prose-lg max-w-none text-ink-700">
            <p className="text-xl leading-relaxed text-ink-800">
              NLP — Nevro Lingvistisk Programmering — er en samling praktiske verktøy for kommunikasjon,
              læring og endring. Det handler om å forstå hvordan vi skaper vår egen opplevelse av verden
              gjennom tanker, språk og kropp.
            </p>
            <p className="mt-6">
              Hos oss lærer du NLP i et varmt og trygt læringsmiljø. Du får en kombinasjon av teori,
              praktiske øvelser og personlig veiledning. Vi tror på læring som berører hele mennesket —
              hode, hjerte og hender.
            </p>
            <h3 className="mt-10 font-serif text-2xl text-ink-900">Hva kan du bruke NLP til?</h3>
            <ul className="mt-4 space-y-2">
              <li>— Kommunisere tydeligere med kolleger, partner og barn</li>
              <li>— Bli mer bevisst på egne reaksjoner og mønstre</li>
              <li>— Sette tydelige mål og skape varige endringer</li>
              <li>— Håndtere stress, bekymringer og indre kritikk</li>
              <li>— Utvikle coachingferdigheter i jobben din</li>
            </ul>
          </article>
          <aside className="rounded-2xl bg-cream-100 p-8 shadow-soft">
            <h4 className="font-serif text-xl text-ink-900">Vår tilnærming</h4>
            <p className="mt-3 text-sm leading-relaxed text-ink-700">
              Vi kombinerer klassisk NLP med moderne nevrovitenskap og systemisk coaching. Fokus er alltid
              praktisk og menneskelig.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}

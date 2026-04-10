import PageHero from '../components/PageHero';

const programs = [
  { title: 'Premium Practitioner', level: 'Grunnutdanning', duration: '8 moduler · 16 dager', blurb: 'Ditt første steg inn i NLP. Praktiske verktøy for kommunikasjon, selvledelse og endring.' },
  { title: 'New Code NLP', level: 'Videregående', duration: '4 moduler · 8 dager', blurb: 'Moderne NLP-metoder for flyt, tilstedeværelse og ubevisst læring.' },
  { title: 'Master Practitioner', level: 'Fordypning', duration: '10 moduler · 20 dager', blurb: 'Gå i dybden på verdier, identitet og coaching på høyt nivå.' },
  { title: 'Diploma i Coaching', level: 'Profesjon', duration: '12 måneder', blurb: 'Sertifiseringsløp for deg som vil jobbe profesjonelt med mennesker.' },
];

export default function Education() {
  return (
    <>
      <PageHero
        eyebrow="Utdanning 2026 / 27"
        title="Sertifiserte utdanninger i NLP"
        lead="Lær praktiske ferdigheter du kan bruke i jobb og privatliv — i et trygt og inspirerende miljø."
      />
      <section className="py-20">
        <div className="container-prose space-y-6">
          {programs.map((p) => (
            <article key={p.title} className="card grid gap-6 md:grid-cols-[1fr,2fr,auto] md:items-center">
              <div>
                <p className="eyebrow mb-2">{p.level}</p>
                <h3 className="text-2xl">{p.title}</h3>
              </div>
              <p className="text-ink-700">{p.blurb}</p>
              <div className="text-right text-sm text-clay-600">
                <div>{p.duration}</div>
                <a href="/kontakt" className="mt-2 inline-block font-medium">Be om info →</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

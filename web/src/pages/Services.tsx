import PageHero from '../components/PageHero';

const services = [
  { title: 'Hypnoterapi', desc: 'En trygg og avslappende metode for å jobbe med vaner, frykt og indre balanse.', icon: '🕯️' },
  { title: 'Personlig coaching', desc: 'Et rom for refleksjon der du selv finner svarene dine — med støtte og struktur.', icon: '🌱' },
  { title: 'Familieterapi', desc: 'For familier som ønsker tryggere kommunikasjon og mer forståelse.', icon: '🏡' },
  { title: 'Bedriftscoaching', desc: 'Utvikling av team, ledere og arbeidskultur som fremmer trivsel og prestasjon.', icon: '🤝' },
];

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Tjenester"
        title="Trygg oppfølging, skreddersydd for deg"
        lead="Vi tilbyr individuelle samtaler og oppdrag for bedrifter — alltid med mennesket i sentrum."
      />
      <section className="py-20">
        <div className="container-prose grid gap-8 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.title} className="card">
              <div className="mb-4 text-3xl">{s.icon}</div>
              <h3 className="mb-3 text-2xl">{s.title}</h3>
              <p className="text-ink-700">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

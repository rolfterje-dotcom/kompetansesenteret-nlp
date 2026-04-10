import PageHero from '../components/PageHero';

const team = [
  { name: 'Veileder 1', role: 'Master Trainer · Grunnlegger', bio: 'Erfaren NLP-trener med over 20 års praksis.' },
  { name: 'Veileder 2', role: 'Trainer · Coach', bio: 'Spesialist på lederutvikling og coaching.' },
  { name: 'Veileder 3', role: 'Terapeut · Hypnoterapeut', bio: 'Trygg veileder for individuelle prosesser.' },
  { name: 'Veileder 4', role: 'Pedagog · Klasseledelse', bio: 'Brobygger mellom teori og skolehverdag.' },
];

export default function Team() {
  return (
    <>
      <PageHero
        eyebrow="Vårt team"
        title="Menneskene bak læringen"
        lead="Erfarne veiledere som bryr seg — og som møter deg der du er."
      />
      <section className="py-20">
        <div className="container-prose grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <article key={m.name} className="card text-center">
              <div className="mx-auto mb-5 h-24 w-24 rounded-full bg-gradient-to-br from-clay-200 to-sage-200" />
              <h3 className="text-lg">{m.name}</h3>
              <p className="mb-3 text-xs uppercase tracking-wider text-clay-600">{m.role}</p>
              <p className="text-sm text-ink-700">{m.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

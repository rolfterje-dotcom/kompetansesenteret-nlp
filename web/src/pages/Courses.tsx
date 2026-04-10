import PageHero from '../components/PageHero';

const courses = [
  { title: 'Mental trening', desc: 'Bygg robusthet, fokus og ro i en travel hverdag.' },
  { title: 'Konflikthåndtering', desc: 'Trygge verktøy for vanskelige samtaler.' },
  { title: 'Klasseledelse', desc: 'For lærere som vil skape trygge læringsmiljøer.' },
  { title: 'Coaching-basert ledelse', desc: 'Lederskap som frigjør potensial.' },
  { title: 'Presentasjonsteknikk', desc: 'Formidle med nærvær og trygghet.' },
  { title: 'Selvledelse', desc: 'Ta ansvar for egen retning og energi.' },
];

export default function Courses() {
  return (
    <>
      <PageHero
        eyebrow="Kurs og workshops"
        title="Kortere løp med umiddelbar nytte"
        lead="Våre kurs er praktiske, varme og alltid forankret i virkelige situasjoner."
      />
      <section className="py-20">
        <div className="container-prose grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <article key={c.title} className="card">
              <div className="mb-4 h-12 w-12 rounded-full bg-sage-100" />
              <h3 className="mb-2 text-xl">{c.title}</h3>
              <p className="text-sm text-ink-700">{c.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const programs = [
  { slug: 'premium-practitioner', title: 'Premium Practitioner', level: 'Grunnutdanning', blurb: 'Ditt første steg inn i NLP — praktiske verktøy for kommunikasjon, selvledelse og endring.' },
  { slug: 'new-code', title: 'New Code NLP', level: 'Videregående', blurb: 'Moderne metoder for flyt, tilstedeværelse og ubevisst læring.' },
  { slug: 'master-practitioner', title: 'Master Practitioner', level: 'Fordypning', blurb: 'Gå i dybden på verdier, identitet og coaching på høyt nivå.' },
  { slug: 'diploma', title: 'Diploma i Coaching', level: 'Profesjon', blurb: 'Sertifiseringsløp for deg som vil jobbe profesjonelt med mennesker.' },
];

const courses = [
  { title: 'Mental trening', desc: 'Bygg robusthet og fokus i hverdagen.' },
  { title: 'Konflikthåndtering', desc: 'Trygge verktøy for vanskelige samtaler.' },
  { title: 'Klasseledelse', desc: 'For lærere som vil skape trygge læringsmiljøer.' },
  { title: 'Coaching-basert ledelse', desc: 'Lederskap som frigjør potensial.' },
  { title: 'Presentasjonsteknikk', desc: 'Formidle med trygghet og nærvær.' },
  { title: 'Selvledelse', desc: 'Ta ansvar for egen retning og energi.' },
];

const services = [
  { title: 'Hypnoterapi', icon: '🕯️' },
  { title: 'Personlig coaching', icon: '🌱' },
  { title: 'Familieterapi', icon: '🏡' },
  { title: 'Bedriftscoaching', icon: '🤝' },
];

const testimonials = [
  { quote: 'Utdanningen ga meg verktøy jeg bruker både privat og profesjonelt. Et varmt og trygt læringsmiljø.', author: 'Kari, HR-leder' },
  { quote: 'Jeg kom for å lære et fag — jeg gikk derfra med et nytt perspektiv på livet.', author: 'Lars, gründer' },
  { quote: 'Faglig sterke veiledere som virkelig ser hver enkelt deltaker.', author: 'Ingrid, lærer' },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Kompetansesenteret for NLP — Utdanning, coaching og kurs</title>
      </Helmet>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cream-100 via-cream-50 to-sage-50" />
        <div className="absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-clay-100/60 blur-3xl" />
        <div className="absolute -left-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-sage-100/60 blur-3xl" />
        <div className="container-prose grid gap-12 py-24 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow mb-4">Utdanning · Coaching · Mental trening</p>
            <h1 className="mb-6 text-5xl leading-tight md:text-6xl">
              Vekk det beste <span className="text-clay-500">i deg selv</span> — og i andre.
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-ink-700">
              Sertifiserte utdanninger og kurs i NLP for deg som vil lære hvordan tanker, språk og
              relasjoner former livet vårt. Et varmt læringsmiljø siden år 2000.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/utdanning" className="btn-primary">Se utdanninger</Link>
              <Link to="/om-nlp" className="btn-ghost">Hva er NLP?</Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-ink-700">
              <div className="flex items-center gap-2"><span className="text-clay-500">★★★★★</span> 4.9 av 5 fra tidligere deltakere</div>
              <div>· Sertifisert etter internasjonal standard</div>
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] bg-clay-100 shadow-soft">
              <div className="absolute inset-0 bg-gradient-to-br from-clay-200 via-clay-100 to-sage-100" />
              <div className="absolute inset-0 flex items-end p-8">
                <div className="rounded-2xl bg-white/90 p-5 shadow-soft backdrop-blur">
                  <p className="font-serif text-lg text-ink-900">«Et trygt rom for læring og vekst.»</p>
                  <p className="mt-2 text-xs uppercase tracking-wider text-clay-600">— Tidligere deltaker</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-clay-100 bg-cream-100/50 py-8">
        <div className="container-prose grid grid-cols-2 gap-6 text-center md:grid-cols-4">
          {[
            { n: '25+', l: 'år med erfaring' },
            { n: '2 000+', l: 'sertifiserte deltakere' },
            { n: '100%', l: 'engasjerte veiledere' },
            { n: '4.9★', l: 'gjennomsnittlig rating' },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-serif text-3xl text-clay-600">{s.n}</div>
              <div className="text-xs uppercase tracking-wider text-ink-700">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-24">
        <div className="container-prose">
          <div className="mb-14 max-w-2xl">
            <p className="eyebrow mb-3">Utdanninger 2026 / 27</p>
            <h2 className="text-4xl">Lær i ditt eget tempo — sammen med andre</h2>
            <p className="mt-4 text-ink-700">
              Våre utdanninger kombinerer teori, praksis og personlig utvikling. Du får verktøy du kan bruke
              fra dag én, og en gruppe som støtter reisen din.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {programs.map((p) => (
              <article key={p.slug} className="card group">
                <p className="eyebrow mb-3">{p.level}</p>
                <h3 className="mb-3 text-xl">{p.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-ink-700">{p.blurb}</p>
                <Link to="/utdanning" className="text-sm font-medium text-clay-600 group-hover:text-clay-700">
                  Les mer →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="bg-sage-50/60 py-24">
        <div className="container-prose">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="eyebrow mb-3">Kurs og workshops</p>
              <h2 className="text-4xl">Kortere løp — umiddelbar nytte</h2>
            </div>
            <Link to="/kurs" className="btn-ghost">Se alle kurs</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => (
              <div key={c.title} className="rounded-2xl bg-white p-7 shadow-soft ring-1 ring-sage-100 transition hover:-translate-y-1">
                <div className="mb-4 h-10 w-10 rounded-full bg-sage-100" />
                <h3 className="mb-2 text-lg">{c.title}</h3>
                <p className="text-sm text-ink-700">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="container-prose">
          <div className="mb-14 max-w-2xl">
            <p className="eyebrow mb-3">Tjenester</p>
            <h2 className="text-4xl">Individuell oppfølging</h2>
            <p className="mt-4 text-ink-700">
              Trenger du noen å snakke med? Vi tilbyr trygge og profesjonelle samtaler — tilpasset deg.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="card text-center">
                <div className="mb-4 text-3xl">{s.icon}</div>
                <h3 className="text-lg">{s.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-clay-50 py-24">
        <div className="container-prose">
          <div className="mb-14 max-w-2xl">
            <p className="eyebrow mb-3">Tilbakemeldinger</p>
            <h2 className="text-4xl">Stemmer fra deltakerne våre</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.author} className="rounded-2xl bg-white p-8 shadow-soft">
                <blockquote className="font-serif text-lg leading-relaxed text-ink-900">«{t.quote}»</blockquote>
                <figcaption className="mt-6 text-sm uppercase tracking-wider text-clay-600">— {t.author}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-prose">
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-clay-500 to-clay-600 p-12 text-cream-50 shadow-soft md:p-16">
            <div className="grid gap-8 md:grid-cols-[2fr,1fr] md:items-center">
              <div>
                <h2 className="mb-4 text-4xl text-cream-50">Klar til å ta neste steg?</h2>
                <p className="text-cream-100/90">
                  Book en uforpliktende samtale, eller meld deg på en gratis introkveld.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link to="/kontakt" className="rounded-full bg-cream-50 px-7 py-3 font-medium text-clay-600 hover:bg-cream-100">
                  Ta kontakt
                </Link>
                <Link to="/utdanning" className="rounded-full border border-cream-50/40 px-7 py-3 font-medium hover:bg-cream-50/10">
                  Introkveld
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

interface Props {
  eyebrow?: string;
  title: string;
  lead?: string;
}

export default function PageHero({ eyebrow, title, lead }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-clay-100 bg-gradient-to-br from-cream-100 via-cream-50 to-sage-50 py-20">
      <div className="absolute -right-20 top-0 -z-0 h-72 w-72 rounded-full bg-clay-100/50 blur-3xl" />
      <div className="container-prose relative">
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h1 className="max-w-3xl text-5xl leading-tight">{title}</h1>
        {lead && <p className="mt-5 max-w-2xl text-lg text-ink-700">{lead}</p>}
      </div>
    </section>
  );
}

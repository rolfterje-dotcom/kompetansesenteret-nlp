import { urlFor } from '../lib/sanity';
import { useSiteSettings } from '../lib/useSiteSettings';

interface Props {
  className?: string;
  imgClass?: string;
}

export default function SiteLogo({ className = '', imgClass = 'h-11' }: Props) {
  const settings = useSiteSettings();

  if (settings?.logo) {
    return (
      <img
        src={urlFor(settings.logo).height(88).auto('format').url()}
        alt={settings.title || 'Kompetansesenteret for NLP'}
        className={`${imgClass} w-auto object-contain ${className}`}
      />
    );
  }

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <span className="grid h-11 w-11 place-items-center rounded-full bg-clay-500 font-serif text-lg text-cream-50 shadow-soft">
        K
      </span>
      <span className="leading-tight">
        <span className="block font-serif text-lg font-semibold text-ink-900">Kompetansesenteret</span>
        <span className="block text-xs uppercase tracking-[0.22em] text-clay-500">for NLP</span>
      </span>
    </span>
  );
}

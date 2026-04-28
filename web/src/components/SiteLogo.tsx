import { urlFor } from '../lib/sanity';
import { useSiteSettings } from '../lib/useSiteSettings';

interface Props {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: { height: 32, cls: 'max-h-8' },
  md: { height: 44, cls: 'max-h-11' },
  lg: { height: 64, cls: 'max-h-16' },
};

export default function SiteLogo({ className = '', size = 'md' }: Props) {
  const settings = useSiteSettings();
  const { height, cls } = sizes[size];

  if (settings?.logo) {
    return (
      <img
        src={urlFor(settings.logo).height(height * 2).format('png').url()}
        alt={settings.title || 'Kompetansesenteret for NLP'}
        className={`${cls} w-auto object-contain ${className}`}
        style={{ background: 'transparent' }}
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

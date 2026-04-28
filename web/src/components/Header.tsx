import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import SiteLogo from './SiteLogo';

const nav = [
  { to: '/', label: 'Hjem' },
  { to: '/om-nlp', label: 'Om NLP' },
  { to: '/tjenester', label: 'Tjenester' },
  { to: '/utdanning', label: 'Utdanning' },
  { to: '/kurs', label: 'Kurs' },
  { to: '/team', label: 'Team' },
  { to: '/kontakt', label: 'Kontakt' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-clay-100 bg-cream-50/90 backdrop-blur">
      <div className="container-prose flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <SiteLogo />
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === '/'}
              className={({ isActive }) =>
                `text-sm transition ${isActive ? 'text-clay-600' : 'text-ink-800 hover:text-clay-500'}`
              }
            >
              {n.label}
            </NavLink>
          ))}
          <Link to="/kontakt" className="btn-primary !py-2 !px-5 text-sm">
            Book samtale
          </Link>
        </nav>
        <button
          className="md:hidden"
          aria-label="Meny"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {open && (
        <nav className="border-t border-clay-100 bg-cream-50 md:hidden">
          <div className="container-prose flex flex-col py-4">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2 text-base ${isActive ? 'text-clay-600' : 'text-ink-800'}`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

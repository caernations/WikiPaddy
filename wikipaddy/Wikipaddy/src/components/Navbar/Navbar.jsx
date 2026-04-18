import React from 'react';
import { Link } from 'react-scroll';

const Navbar = ({ theme, setTheme }) => {
  const isDark = theme === 'dark';

  return (
    <nav className="sticky top-0 z-50 glass border-b border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="project" smooth duration={500} className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-ink-900 dark:bg-white flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-white dark:text-ink-900" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M4 7h16M4 12h10M4 17h16" strokeLinecap="round" />
            </svg>
          </div>
          <span className="font-display font-bold text-lg">wikipaddy</span>
        </Link>

        <div className="hidden md:flex items-center gap-1 text-sm">
          <Link to="project" smooth duration={500} spy className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">Search</Link>
          <Link to="what" smooth duration={500} offset={-64} spy className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">Algorithms</Link>
          <Link to="about" smooth duration={500} offset={-64} spy className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">Team</Link>
          <a
            href="https://github.com/caernations/Tubes2_WikiPaddy"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 flex items-center gap-1.5"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.3 0 .32.22.7.83.58A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>

        <div className="flex items-center gap-0.5 bg-black/5 dark:bg-white/5 rounded-full p-0.5">
          <button
            onClick={() => setTheme('light')}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition ${!isDark ? 'bg-white shadow text-ink-900' : 'text-ink-900/50 dark:text-white/50'}`}
            title="Light"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" strokeLinecap="round" />
            </svg>
          </button>
          <button
            onClick={() => setTheme('dark')}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition ${isDark ? 'bg-ink-700 text-white' : 'text-ink-900/50 dark:text-white/50'}`}
            title="Dark"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

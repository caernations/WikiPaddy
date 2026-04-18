import React from 'react';
import photo1 from '../../assets/photo1.jpg';
import photo2 from '../../assets/photo2.jpg';
import photo3 from '../../assets/photo3.jpg';

const MEMBERS = [
  {
    nim: '13522140',
    name: 'Yasmin Farisah Salma',
    initials: 'YF',
    github: 'caernations',
    photo: photo1,
  },
  {
    nim: '13522142',
    name: 'Farhan Raditya Aji',
    initials: 'FR',
    github: 'sibobbbbbb',
    photo: photo2,
  },
  {
    nim: '13522156',
    name: 'Jason Fernando',
    initials: 'JF',
    github: 'JasonFernandoo',
    photo: photo3,
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-widest text-ink-900/50 dark:text-white/50">Team</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">Built by three IF2211 students.</h2>
          <p className="mt-4 text-ink-900/60 dark:text-white/60 text-lg">A Strategi Algoritma course project at Institut Teknologi Bandung.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {MEMBERS.map((m) => (
            <div
              key={m.nim}
              className="group rounded-3xl bg-white dark:bg-ink-800 border border-black/5 dark:border-white/5 p-7 hover:-translate-y-1 transition overflow-hidden relative"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full bg-ink-900 dark:bg-white/10 text-white dark:text-white flex items-center justify-center font-display font-bold text-xl overflow-hidden">
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <span className="relative group-hover:opacity-0 transition-opacity">{m.initials}</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold leading-tight">{m.name}</h3>
                  <div className="text-xs font-mono text-ink-900/50 dark:text-white/50 mt-0.5">{m.nim}</div>
                </div>
              </div>

              <a
                href={`https://github.com/${m.github}`}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm text-ink-900/70 dark:text-white/70 hover:text-ink-900 dark:hover:text-white font-medium transition"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.3 0 .32.22.7.83.58A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                {m.github}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

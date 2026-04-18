import React from 'react';

const ALGOS = [
  {
    id: 'BFS',
    title: 'Breadth-First Search',
    desc: 'Explores layer by layer. Guaranteed to find the shortest path.',
    complexity: 'O(b^d)',
    tag: 'Optimal',
  },
  {
    id: 'IDS',
    title: 'Iterative Deepening',
    desc: 'Repeated DFS with growing depth limit. Memory-efficient.',
    complexity: 'O(b^d)',
    tag: 'Space-saving',
  },
  {
    id: 'Bi-BFS',
    title: 'Bidirectional BFS',
    desc: 'Searches from both ends simultaneously. Often the fastest.',
    complexity: 'O(b^(d/2))',
    tag: 'Fastest',
  },
];

const What = () => {
  return (
    <section id="what" className="py-20 border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-widest text-ink-900/50 dark:text-white/50">Algorithms</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">Three ways to search the graph.</h2>
          <p className="mt-4 text-ink-900/60 dark:text-white/60 text-lg">
            Each strategy explores Wikipedia&apos;s link graph differently — pick the one that matches your query.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {ALGOS.map((a) => (
            <div
              key={a.id}
              className="rounded-3xl bg-white dark:bg-ink-800 border border-black/5 dark:border-white/5 p-7"
            >
              <div className="w-10 h-10 rounded-xl bg-black/5 dark:bg-white/5 text-ink-900/80 dark:text-white/80 flex items-center justify-center mb-4">
                <span className="font-mono font-bold text-[11px]">{a.id}</span>
              </div>
              <h3 className="font-display text-xl font-bold">{a.title}</h3>
              <p className="mt-2 text-sm text-ink-900/60 dark:text-white/60">{a.desc}</p>
              <div className="mt-5 flex items-center gap-3 text-xs text-ink-900/50 dark:text-white/50">
                <span className="font-mono">{a.complexity}</span>
                <span>·</span>
                <span>{a.tag}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-white dark:bg-ink-800 border border-black/5 dark:border-white/5 p-8">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-ink-900/50 dark:text-white/50">How to use</div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mt-2">Three steps to a path.</h3>
              <ol className="mt-4 space-y-2 text-ink-900/70 dark:text-white/70">
                <li className="flex gap-3"><span className="font-mono text-sm text-ink-900/40 dark:text-white/40">01</span> Enter two Wikipedia article titles.</li>
                <li className="flex gap-3"><span className="font-mono text-sm text-ink-900/40 dark:text-white/40">02</span> Pick BFS, IDS, or Bi-BFS.</li>
                <li className="flex gap-3"><span className="font-mono text-sm text-ink-900/40 dark:text-white/40">03</span> Submit, then follow the hops.</li>
              </ol>
            </div>
            <div className="justify-self-end hidden md:block">
              <div className="w-24 h-24 rounded-3xl bg-black/5 dark:bg-white/5 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-10 h-10 text-ink-900/70 dark:text-white/70" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="6" cy="6" r="2.5" />
                  <circle cx="18" cy="6" r="2.5" />
                  <circle cx="12" cy="18" r="2.5" />
                  <path d="M8 7l3 9M16 7l-3 9" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default What;

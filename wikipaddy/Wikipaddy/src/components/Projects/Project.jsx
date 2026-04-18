import React, { useState } from 'react';

const ALGORITHMS = [
  { id: 'BFS', label: 'BFS' },
  { id: 'IDS', label: 'IDS' },
  { id: 'BI-BFS', label: 'Bi-BFS' },
];

const EXAMPLES = [
  { start: 'Kevin Bacon', end: 'Napoleon' },
  { start: 'Pizza', end: 'Quantum mechanics' },
  { start: 'Beyoncé', end: 'Alan Turing' },
];

const Project = ({ theme }) => {
  const [inputAwal, setInputAwal] = useState('');
  const [inputAkhir, setInputAkhir] = useState('');
  const [suggestionsAwal, setSuggestionsAwal] = useState([]);
  const [suggestionsAkhir, setSuggestionsAkhir] = useState([]);
  const [activeAlgo, setActiveAlgo] = useState('BFS');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const fetchSuggestions = async (query, setter) => {
    if (!query) return setter([]);
    try {
      const res = await fetch(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${encodeURIComponent(query)}&limit=6&namespace=0&format=json`);
      const data = await res.json();
      setter(data[1] || []);
    } catch {
      setter([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputAwal || !inputAkhir) return;
    setIsLoading(true);
    setError('');
    setResult(null);
    try {
      const start = inputAwal.replace(/ /g, '_');
      const end = inputAkhir.replace(/ /g, '_');
      const res = await fetch(`http://localhost:8080/${activeAlgo}?start_title=${start}&end_title=${end}`);
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `Request failed (${res.status})`);
      }
      const data = await res.json();
      setResult({ ...data, algo: activeAlgo, startTitle: inputAwal, endTitle: inputAkhir });
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const useExample = (ex) => {
    setInputAwal(ex.start);
    setInputAkhir(ex.end);
    setSuggestionsAwal([]);
    setSuggestionsAkhir([]);
  };

  const prettyTitle = (url) => {
    try {
      const parts = url.split('/');
      return decodeURIComponent(parts[parts.length - 1].replace(/_/g, ' '));
    } catch {
      return url;
    }
  };

  return (
    <section id="project" className="relative grid-bg">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse" />
            <span className="text-xs font-medium text-ink-900/70 dark:text-white/70">Live · Powered by BFS, IDS &amp; Bi-BFS</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
            Race between<br />
            any two <span className="accent-text">Wikipedia</span> articles.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-900/60 dark:text-white/60">
            Wikipaddy finds the shortest click-path between articles using graph search algorithms — visualised in real time.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-14 max-w-3xl mx-auto">
          <div className="relative rounded-3xl bg-white dark:bg-ink-800 shadow-card dark:shadow-cardDark border border-black/5 dark:border-white/5 p-2 md:p-3">
            <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-2 md:gap-0 items-stretch">
              <div className="relative">
                <label className="absolute left-5 top-2.5 text-[10px] font-mono uppercase tracking-widest text-ink-900/40 dark:text-white/40 pointer-events-none">Start</label>
                <input
                  type="text"
                  value={inputAwal}
                  onChange={(e) => { setInputAwal(e.target.value); fetchSuggestions(e.target.value, setSuggestionsAwal); }}
                  placeholder="Type an article title…"
                  className="w-full pt-6 pb-3 px-5 rounded-2xl bg-transparent text-lg font-medium placeholder:text-ink-900/30 dark:placeholder:text-white/30 focus:outline-none focus:bg-accent-50/60 dark:focus:bg-white/5 transition"
                />
                {suggestionsAwal.length > 0 && (
                  <div className="absolute left-0 right-0 top-full mt-1 z-20 rounded-2xl bg-white dark:bg-ink-700 border border-black/10 dark:border-white/10 shadow-card dark:shadow-cardDark overflow-hidden">
                    {suggestionsAwal.map((s, i) => (
                      <button
                        type="button"
                        key={i}
                        onClick={() => { setInputAwal(s); setSuggestionsAwal([]); }}
                        className="w-full text-left px-5 py-2.5 text-sm hover:bg-accent-50 dark:hover:bg-white/5"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="hidden md:flex items-center justify-center w-12">
                <div className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 text-ink-900/60 dark:text-white/60 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <label className="absolute left-5 top-2.5 text-[10px] font-mono uppercase tracking-widest text-ink-900/40 dark:text-white/40 pointer-events-none">End</label>
                <input
                  type="text"
                  value={inputAkhir}
                  onChange={(e) => { setInputAkhir(e.target.value); fetchSuggestions(e.target.value, setSuggestionsAkhir); }}
                  placeholder="Destination article…"
                  className="w-full pt-6 pb-3 px-5 rounded-2xl bg-transparent text-lg font-medium placeholder:text-ink-900/30 dark:placeholder:text-white/30 focus:outline-none focus:bg-accent-50/60 dark:focus:bg-white/5 transition"
                />
                {suggestionsAkhir.length > 0 && (
                  <div className="absolute left-0 right-0 top-full mt-1 z-20 rounded-2xl bg-white dark:bg-ink-700 border border-black/10 dark:border-white/10 shadow-card dark:shadow-cardDark overflow-hidden">
                    {suggestionsAkhir.map((s, i) => (
                      <button
                        type="button"
                        key={i}
                        onClick={() => { setInputAkhir(s); setSuggestionsAkhir([]); }}
                        className="w-full text-left px-5 py-2.5 text-sm hover:bg-accent-50 dark:hover:bg-white/5"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-2 pt-3 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row items-stretch md:items-center gap-3 px-2 pb-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-ink-900/40 dark:text-white/40 hidden md:inline">Algo</span>
                <div className="flex gap-1.5 flex-wrap">
                  {ALGORITHMS.map((a) => (
                    <button
                      type="button"
                      key={a.id}
                      onClick={() => setActiveAlgo(a.id)}
                      className={`px-4 py-2 rounded-full text-sm font-semibold transition ${activeAlgo === a.id ? 'chip-active' : 'bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10'}`}
                    >
                      {a.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex-1" />

              <button
                type="submit"
                disabled={isLoading || !inputAwal || !inputAkhir}
                className="group relative overflow-hidden px-6 py-3 rounded-full bg-ink-900 dark:bg-white text-white dark:text-ink-900 font-semibold text-sm flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.99] transition disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
                      <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    <span>Searching…</span>
                  </>
                ) : (
                  <>
                    <span>Find shortest path</span>
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-ink-900/50 dark:text-white/40 mr-1">Try:</span>
            {EXAMPLES.map((ex, i) => (
              <button
                type="button"
                key={i}
                onClick={() => useExample(ex)}
                className="px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 font-medium"
              >
                {ex.start} → {ex.end}
              </button>
            ))}
          </div>
        </form>

        {error && (
          <div className="mt-10 max-w-3xl mx-auto rounded-2xl border border-red-500/30 bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-300 px-5 py-4 text-sm">
            <div className="font-mono text-[10px] uppercase tracking-widest opacity-70 mb-1">Error</div>
            {error}
          </div>
        )}

        {result && result.path && (
          <div className="mt-16">
            <div className="flex items-end justify-between mb-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink-900/50 dark:text-white/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                  Result · {result.algo}
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">Shortest path found</h2>
              </div>
              <button
                onClick={() => setResult(null)}
                className="text-sm text-ink-900/60 dark:text-white/60 hover:text-ink-900 dark:hover:text-white flex items-center gap-2"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
                </svg>
                Clear
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-5 mb-8">
              <div className="rounded-2xl bg-white dark:bg-ink-800 border border-black/5 dark:border-white/5 p-5 md:p-6">
                <div className="text-xs font-mono uppercase tracking-widest text-ink-900/40 dark:text-white/40">Time</div>
                <div className="font-display text-3xl md:text-5xl font-bold mt-2">
                  {Number(result.waktu_eksekusi ?? 0).toFixed(2)}
                  <span className="text-lg text-ink-900/40 dark:text-white/40">s</span>
                </div>
              </div>
              <div className="rounded-2xl bg-white dark:bg-ink-800 border border-black/5 dark:border-white/5 p-5 md:p-6">
                <div className="text-xs font-mono uppercase tracking-widest text-ink-900/40 dark:text-white/40">Depth</div>
                <div className="font-display text-3xl md:text-5xl font-bold mt-2">{result.kedalaman ?? result.path.length}</div>
                <div className="mt-1 text-xs text-ink-900/50 dark:text-white/40">hops to target</div>
              </div>
              <div className="rounded-2xl bg-white dark:bg-ink-800 border border-black/5 dark:border-white/5 p-5 md:p-6">
                <div className="text-xs font-mono uppercase tracking-widest text-ink-900/40 dark:text-white/40">Links examined</div>
                <div className="font-display text-3xl md:text-5xl font-bold mt-2">{Number(result.total ?? 0).toLocaleString()}</div>
                <div className="mt-1 text-xs text-ink-900/50 dark:text-white/40">nodes visited</div>
              </div>
            </div>

            <div className="rounded-3xl bg-white dark:bg-ink-800 border border-black/5 dark:border-white/5 p-6 md:p-8 overflow-hidden">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display text-lg font-semibold">The path</h3>
              </div>

              <div className="overflow-x-auto scrollbar-thin -mx-4 px-4">
                <div className="flex items-stretch gap-0 min-w-max py-4">
                  {result.path.map((url, idx) => {
                    const isStart = idx === 0;
                    const isEnd = idx === result.path.length - 1;
                    const title = prettyTitle(url);
                    return (
                      <React.Fragment key={idx}>
                        <div className="relative flex flex-col items-center">
                          <a
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                            className={`px-5 py-4 rounded-2xl min-w-[180px] max-w-[220px] transition hover:-translate-y-0.5 ${
                              isStart
                                ? 'bg-ink-900 dark:bg-white text-white dark:text-ink-900'
                                : isEnd
                                ? 'bg-accent-500 text-white'
                                : 'bg-white dark:bg-ink-700 border border-black/10 dark:border-white/10'
                            }`}
                          >
                            <div className={`text-[10px] font-mono uppercase tracking-widest ${isStart || isEnd ? 'opacity-80' : 'text-ink-900/40 dark:text-white/40'}`}>
                              {isStart ? 'Start' : isEnd ? 'End' : 'Hop'}
                            </div>
                            <div className="font-display text-lg font-bold mt-1 truncate">{title}</div>
                            <div className={`text-xs mt-1 truncate ${isStart || isEnd ? 'opacity-80' : 'text-ink-900/50 dark:text-white/50'}`}>
                              {url.replace('https://', '')}
                            </div>
                          </a>
                          <div className="mt-3 font-mono text-[10px] text-ink-900/40 dark:text-white/40">#{idx + 1}</div>
                        </div>
                        {!isEnd && (
                          <div className="flex items-center pt-8 w-16">
                            <div className="path-connector h-0.5 flex-1" />
                            <svg viewBox="0 0 24 24" className="w-4 h-4 text-accent-500" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;

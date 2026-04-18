import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-ink-900/60 dark:text-white/50">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-ink-900 dark:bg-white" />
          <span>wikipaddy · IF2211 Strategi Algoritma</span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/caernations/Tubes2_WikiPaddy"
            target="_blank"
            rel="noreferrer"
            className="hover:text-ink-900 dark:hover:text-white"
          >
            GitHub
          </a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

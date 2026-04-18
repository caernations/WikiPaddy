import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Projects/Project';
import About from './components/About/About';
import What from './components/What/What';
import Footer from './components/Footer/Footer';
import './index.css';

const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('current_theme') || 'light');

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, [theme]);

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} setTheme={setTheme} />
      <Project theme={theme} />
      <What />
      <About />
      <Footer />
    </div>
  );
};

export default App;

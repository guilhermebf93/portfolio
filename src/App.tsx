import { useEffect, useState } from 'react';

import Header from './components/Header';
import Projects from './components/Projects';
import Hero from './components/Hero';
import './App.css';
import About from './components/About';

export interface HandlePage {
  (page: 'hero' | 'projects' | 'about') : void;
}

function App() {
  const [page, setPage] = useState('hero');
  const [isEnglish, setIsEnglish] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark').matches) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    if(isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark])

  const handlePages: HandlePage = (page) => {
    setPage(page);
  }

  const handleLanguage = () => {
    setIsEnglish(!isEnglish);
  }

  const handleTheme = () => {
    setIsDark(!isDark);
  }

  return (
    <div className='page'>
      <Header changePages={handlePages} changeLanguages={handleLanguage} isEnglish={isEnglish} isDark={isDark} changeTheme={handleTheme} />
      
      {page === 'hero' ? (
        <Hero isEnglish={isEnglish} />
      ) : page === 'projects' ? (
        <Projects isEnglish={isEnglish} /> 
      ) : (
        <About isEnglish={isEnglish} />
        )
      }
    </div>
  )
}

export default App

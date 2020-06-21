import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faChevronCircleRight,
  faExternalLinkAlt,
  faEnvelope,
  faStar,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons';
import ReactGA from 'react-ga';
import dotenv from 'dotenv';

import { lightTheme, darkTheme } from './components/Themes';
import { GlobalStyle } from './styles';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

dotenv.config();

if (process.env.REACT_APP_GA_TRACKING_CODE) {
  ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE);
}

library.add(
  faChevronCircleRight,
  faExternalLinkAlt,
  fab,
  faEnvelope,
  faStar,
  faCodeBranch
);

// From https://www.jerriepelser.com/blog/change-favicon-application-state/
/*
  Change the favicon based on your current theme
*/
function changeFavicon(src) {
  var link = document.createElement('link'),
    oldLink = document.getElementById('dynamic-favicon');
  link.id = 'dynamic-favicon';
  link.rel = 'shortcut icon';
  link.href = src;
  if (oldLink) {
    document.head.removeChild(oldLink);
  }
  document.head.appendChild(link);
}

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('com.dhruvsharma.theme') || 'light'
  );
  useEffect(() => {
    localStorage.setItem('com.dhruvsharma.theme', theme);
    changeFavicon((theme === 'light' ? lightTheme : darkTheme).logoSrc);
  }, [theme]);
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  const themeToggle = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyle />
        <NavBar themeChanger={themeToggle} />
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default App;

import React from 'react';
import './App.css';
import Intro from './components/Intro';
import Header from './components/Header';
import QuoteSection from './components/Quote';
import AboutMe from './components/AboutMe';
import MySkills from './components/Skills';
import MyProjects from './components/MyProjects';
import Certifications from './components/Certifications';
import ConnectWithMe from './components/ConnectWithMe';
import { Link } from "react-scroll";
import { ThemeProvider } from './theme-provider';
import ThemeToggle from './components/ui/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[hsl(var(--background))] text-foreground">
        <Header />
        {/* Add IDs outside the component to ensure scroll works */}
        <div id="home">
          <Intro />
        </div>
        <div id="about">
          <AboutMe />
        </div>
        <div id="projects">
          <MyProjects />
        </div>
        <div id="skills">
          <MySkills />
        </div>
        <div id="Certifications"> 
          <Certifications />
        </div>
        <div id="quote">
          <QuoteSection />
        </div>
        <div id="connect">
          <ConnectWithMe />
        </div>

        {/* Add the floating ThemeToggle button */}
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;

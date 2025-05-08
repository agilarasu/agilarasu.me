import React from 'react';
import './App.css';
import Intro from './components/Intro';
import Header from './components/Header';
import QuoteSection from './components/Quote';
import AboutMe from './components/AboutMe';
import MySkills from './components/Skills';
import MyProjects from './components/MyProjects';
import ConnectWithMe from './components/ConnectWithMe';
import { Link } from "react-scroll";
import { ThemeProvider } from './theme-provider';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        {/* Add IDs outside the component to ensure scroll works */}
        <div id="home">
          <Intro />
        </div>
        <div id="quote">
          <QuoteSection />
        </div>
        <div id="about">
          <AboutMe />
        </div>
        <div id="skills">
          <MySkills />
        </div>
        <div id="projects">
          <MyProjects />
        </div>
        <div id="connect">
          <ConnectWithMe />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

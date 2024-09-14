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

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header primary="white" secondary="green-600" background="black" buttonColor="green-600" />
     

      {/* Add IDs outside the component to ensure scroll works */}
      <div id="home">
        <Intro primary="white" secondary="green-600" background="black" buttonColor="green-600" />
      </div>
      <div id="quote">
        <QuoteSection primary="white" secondary="green-600" background="slate-500" />
      </div>
      <div id="about">
        <AboutMe primary="white" secondary="green-600" background="black" />
      </div>    
      <div id="skills">
        <MySkills primary="white" secondary="green-600" background="black" />
      </div>
      <div id="projects">
        <MyProjects primary="white" secondary="green-600" background="black" />
      </div>
      <div id="connect">
        <ConnectWithMe primary="white" secondary="green-600" background="black" />
      </div>
    </div>
  );
}

export default App;

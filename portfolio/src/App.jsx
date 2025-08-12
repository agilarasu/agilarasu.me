import { useState, useEffect } from 'react';
import './App.css';
import { ThemeProvider } from './theme-provider';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

import { ModeToggle } from './components/ui/ModeToggle';
import ThemeToggle from './components/ui/ThemeToggle';

gsap.registerPlugin(ScrollTrigger, SplitText);

// New gatesnotes-inspired components
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProjects from './components/FeaturedProjects';
import ReadingList from './components/ReadingList';
import Skills from './components/Skills';
import Entertainment from './components/Entertainment';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'reading', 'skills', 'entertainment', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Global GSAP setup
    gsap.fromTo(".fade-in", 
      { opacity: 0, y: 30 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".fade-in",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground font-sans antialiased">
        <Navigation activeSection={activeSection} />
        
        <main>
          <section id="home">
            <Hero />
          </section>
          
          <section id="about">
            <About />
          </section>
          
          <section id="projects">
            <FeaturedProjects />
          </section>
          
          <section id="reading">
            <ReadingList />
          </section>
          
          <section id="skills">
            <Skills />
          </section>
          
          <section id="entertainment">
            <Entertainment />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
        </main>

        <Footer />
        
        {/* Theme toggles in bottom right */}
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
          <ModeToggle />
          <ThemeToggle />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
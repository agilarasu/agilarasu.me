import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight, BookOpen, Code, Lightbulb } from 'lucide-react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import img from "@/assets/me.png";
import placeholder from "@/assets/placeholder.svg";

const Hero = ({
  videoSrc = "/bg.mp4",
  videoPoster = placeholder,
} = {}) => {
  const heroRef = useRef(null);
  const backgroundVideoRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (titleRef.current && subtitleRef.current) {
      const tl = gsap.timeline({ delay: 0.8 });
      
      // Modern subtle text animation
      const splitTitle = new SplitText(titleRef.current, { type: "words" });
      const splitSubtitle = new SplitText(subtitleRef.current, { type: "words" });
      
      // Subtle fade-in for title words
      tl.fromTo(splitTitle.words, 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out"
        }
      )
      // Gentle fade-in for subtitle
      .fromTo(splitSubtitle.words,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: "power2.out"
        }, "-=0.3"
      )
      // Simple fade and slight scale for image
      .fromTo(imageRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out"
        }, "-=0.6"
      )
      // Gentle fade-in for other elements
      .fromTo(".hero-element",
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out"
        }, "-=0.4"
      );

      return () => {
        splitTitle.revert();
        splitSubtitle.revert();
      };
    }
  }, []);

  // Ensure background video autoplays across browsers (Safari/iOS needs explicit muted+play)
  useEffect(() => {
    const video = backgroundVideoRef.current;
    if (!video) return;
    try {
      video.muted = true;
      // Some browsers require a direct play() call even with autoplay
      const playPromise = video.play();
      if (playPromise && typeof playPromise.then === 'function') {
        playPromise.catch(() => {
          // Ignore autoplay rejection; user interaction will start it
        });
      }
    } catch (_) {
      // No-op
    }
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 bg-background overflow-hidden"
    >
      {/* Background video */}
      <video
        ref={backgroundVideoRef}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        poster={videoPoster}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Overlay for readability */}
      <div className="absolute inset-0  pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="text-primary">Agilarasu</span>
              </h1>
              
              <p ref={subtitleRef} className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Passionate about building impactful technology solutions through AI, web development, and curiosity-driven learning.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 hero-element">
              <div className="flex items-center space-x-3 text-foreground">
                <Code className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Engineer at Heart</span>
              </div>
              <div className="flex items-center space-x-3 text-foreground">
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Avid Reader</span>
              </div>
              <div className="flex items-center space-x-3 text-foreground">
                <Lightbulb className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Curious Learner</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 hero-element">
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium inline-flex items-center transition-all duration-300 hover:scale-105"
              >
                View My Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              
              <Button
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-border text-primary hover:bg-primary/10 px-6 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </Button>
            </div>

            {/* Quote */}
            <div className="pt-8 border-t border-border hero-element">
              <blockquote className="text-lg italic text-muted-foreground">
                "Sometimes you've gotta run before you can walk"
              </blockquote>
              <cite className="text-sm text-muted-foreground/80 mt-2 block">— Tony Stark</cite>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div ref={imageRef}>
                <Avatar className="w-80 h-80 lg:w-96 lg:h-96 border-4 border-border shadow-2xl">
                  <AvatarImage src={img || placeholder} alt="Agilarasu Saravanan" />
                  <AvatarFallback className="text-4xl font-bold">AS</AvatarFallback>
                </Avatar>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg hero-element">
                Final Year IT Student
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

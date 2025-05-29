"use client";
import { Link } from "react-scroll";
import { ChevronDown } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import img from "@/assets/me.png";

import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(SplitText, ScrollToPlugin);

export default function Intro() {
  const nameRef = useRef(null);
  const professionRef = useRef(null);

  useEffect(() => {
    const splitName = new SplitText(nameRef.current, {
      type: "words,lines",
      linesClass: "lines",
      mask: "lines"
    });

    const splitProfession = new SplitText(professionRef.current, {
      type: "words,lines",
      linesClass: "lines",
      mask: "lines"
    });

    const tl = gsap.timeline();

    tl.from(splitName.words, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "expo",
    });

    tl.from(splitProfession.words, {
      y: -100,
      opacity: 0,
      duration: 1.5,
      ease: "expo",
    }, "<");

    return () => {
      splitName.revert();
      splitProfession.revert();
    };
  }, []);

  function handleScrollToConnect() {
    gsap.to(window, {
      scrollTo: {
        y: "#connect",
      },
      duration: 2,
      ease: "power2.inOut",
    });
  }

  function handleScrollToAbout() {
    gsap.to(window, {
      scrollTo: {
        y: "#about",
      },
      duration: 1.5,
      ease: "power2.inOut",
    });
  }

  return (
    <section
      className="mx-auto container w-full flex flex-col md:flex-row items-center justify-center min-h-screen px-4 relative"
    >
      <div className="w-full md:w-1/4 flex items-center justify-center">
        <div
          className="rounded-full w-64 h-64 md:w-72 md:h-72 relative flex items-center justify-center"
        >
          <Avatar className="w-60 h-60 md:w-72 md:h-72 border-4 border-[hsl(var(--border))]">
            <AvatarImage src={img} alt="Profile picture" />
            <AvatarFallback>AG</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="hidden md:block w-px h-48 bg-[hsl(var(--border))] mx-8 self-center">
        {/* Vertical divider visible only in desktop view */}
      </div>
      <div
        className="text-center md:text-left md:mb-0"
      >
        <h1 ref={nameRef} className="text-4xl md:text-6xl font-bold my-6">
          <span className="text-3xl md:text-3xl text-[hsl(var(--foreground))]">Hi 👋</span>
          <br /> I'm <span className={`font-extrabold text-[hsl(var(--accent))]`}>AGILARASU</span>
        </h1>
        <p ref={professionRef} className="text-lg md:text-xl mb-6">
          Full Stack Developer
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
          <Button
            onClick={handleScrollToConnect}
            variant="outline"
            className="bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] px-6 py-3 rounded-full transform transition-transform duration-300 hover:scale-105 hover:shadow-lg mb-2 md:mb-0 md:mr-4"
          >
            Let's Connect
          </Button>
          <Button
            variant="outline"
            className="bg-[hsl(var(--accent-background))] text-[hsl(var(--accent))] px-6 py-3 rounded-full transform transition-transform duration-300 hover:scale-105 hover:shadow-lg mb-2 md:mb-0 md:mr-4"
          >
            <span className="block md:hidden">Get Resume</span>
            <span className="hidden md:block">Download Resume</span>
          </Button>
        </div>
      </div>

      {/* Scroll Down Button */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <ChevronDown
          onClick={handleScrollToAbout}
          className="w-10 h-10 text-[hsl(var(--accent))] cursor-pointer animate-bounce"
        />
      </div>
    </section>
  );
}

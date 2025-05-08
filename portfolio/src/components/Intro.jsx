"use client";
import { Link } from "react-scroll";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import img from "@/assets/me.png";

export default function Intro() {
  const [currentProfession, setCurrentProfession] = useState(0);
  const professions = ["Student", "Fullstack Developer", "Security Researcher"];
  const professionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProfession(
        (prevProfession) => (prevProfession + 1) % professions.length
      );
    }, 3000); // Change profession every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (professionRef.current) {
      professionRef.current.style.animation = "slideDown 0.5s ease-in-out";
      setTimeout(() => {
        professionRef.current.style.animation = "";
      }, 500); // Reset animation after it completes
    }
  }, [currentProfession]);

  return (
    <section
      className="w-[80%] mx-auto container w-full flex flex-col md:flex-row items-center justify-center min-h-screen px-4">
      <div className="w-full md:w-1/3">
        <div
          className="rounded-full w-64 h-64 md:w-72 md:h-72 mx-auto relative flex items-center justify-center"
        >
          <Avatar className="w-60 h-60 md:w-64 md:h-64 border-4 border-[hsl(var(--border))]">
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
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-3xl md:text-3xl text-[hsl(var(--foreground))]">Hi 👋</span>
          <br /> I'm <span className={`font-extrabold text-[hsl(var(--accent))]`}>Agilarasu</span>
        </h1>
        <p ref={professionRef} className="text-lg md:text-xl mb-6">
          {professions[currentProfession]}
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
          <Link to="connect" smooth={true} duration={500}>
            <Button
            variant="outline"
              className="bg-[hsl(var(--accent-background))] text-[hsl(var(--accent))] px-6 py-3 rounded-full transform transition-transform duration-300 hover:scale-105 hover:shadow-lg mb-2 md:mb-0 md:mr-4"
            >
              Let's Connect
            </Button>
          </Link>
          {/* <Button
            variant="outline"
            className={`text-white bg-black px-6 py-3 rounded-full border border-white-200 border-opacity-50 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg`}
          >
            My CV
          </Button> */}
        </div>
      </div>


    </section>
  );
}

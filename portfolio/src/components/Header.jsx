import React, { useState } from 'react';
import { Button } from "@/components/ui/button"

export default function Header({ primary = "white", secondary = "green-600", background = "black", buttonColor = "green-600" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={`container mx-auto w-full flex items-center justify-between py-4 px-4 bg-${background} sticky top-0 z-10`}>
      <div className={`text-${primary}`}>
        <h1 className="text-2xl font-bold">Your Name</h1>
      </div>
      <nav className="hidden md:flex items-center space-x-4">
        <a href="#about" className={`text-${primary} hover:text-${secondary}`}>About</a>
        <a href="#skills" className={`text-${primary} hover:text-${secondary}`}>Skills</a>
        <a href="#projects" className={`text-${primary} hover:text-${secondary}`}>Projects</a>
        <a href="#contact" className={`text-${primary} hover:text-${secondary}`}>Contact</a>
      </nav>
      <Button 
        className={`bg-${buttonColor} text-black px-6 py-3 rounded-full transform transition-transform duration-300 hover:scale-105 hover:shadow-lg`}
      >
        Hire me
      </Button>
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)} 
        className="md:hidden text-white"
      >
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>
    </header>
  )
}
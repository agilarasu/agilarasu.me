import React, { useState } from 'react';
import { Link } from "react-scroll";

function Header({ primary = "white", secondary = "green-600", background = "black", buttonColor = "green-600" }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className={`bg-black sticky top-0 z-50 py-4`} style={{ width: '100%' }}>
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex justify-between items-center">
          <div>
            <span className={`text-white font-bold text-2xl`}>Arasan</span>
          </div>
          <nav>
            <button className="md:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <ul className={`md:flex md:space-x-8 md:items-center absolute md:static bg-[${background}] md:bg-transparent w-full left-0 md:w-auto py-4 md:py-0 transition-all duration-300 ease-in-out ${isNavOpen ? 'top-12 opacity-100' : 'top-[-490px] md:opacity-100 opacity-0'}`}>
              <li className={`text-[${secondary}] hover:text-gray-300 text-lg md:mx-0 mx-4`}>
                <Link to="home" smooth={true} duration={500} onClick={() => setIsNavOpen(false)}>
                  Home
                </Link>
              </li>
              <li className={`text-[${secondary}] hover:text-gray-300 text-lg md:mx-0 mx-4`}>
                <Link to="about" smooth={true} duration={500} onClick={() => setIsNavOpen(false)}>
                  About
                </Link>
              </li>
              <li className={`text-[${secondary}] hover:text-gray-300 text-lg md:mx-0 mx-4`}>
                <Link to="skills" smooth={true} duration={500} onClick={() => setIsNavOpen(false)}>
                  Skills
                </Link>
              </li>
              <li className={`text-[${secondary}] hover:text-gray-300 text-lg md:mx-0 mx-4`}>
                <Link to="projects" smooth={true} duration={500} onClick={() => setIsNavOpen(false)}>
                  Projects
                </Link>
              </li>
              <li className="md:mx-0 mx-4">
                <Link to="connect" smooth={true} duration={500} className={`text-black bg-[${buttonColor}] hover:bg-[${buttonColor}-700] text-white font-bold py-2 px-4 rounded`} onClick={() => setIsNavOpen(false)}>
                  Connect
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

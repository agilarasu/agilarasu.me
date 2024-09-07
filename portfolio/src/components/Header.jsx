import React, { useState } from 'react';

function Header({ primary="white", secondary="green-600", background="black", buttonColor="green-600" }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className={`bg-${background} sticky top-0 z-50 py-4`} style={{ width: '100%' }}>
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex justify-between items-center">
          <div>
            <span className={`text-${primary} font-bold text-2xl`}>Your Portfolio</span>
          </div>
          <nav>
            {/* Hamburger menu for mobile */}
            <button className="md:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <ul className={`md:flex md:space-x-8 md:items-center absolute md:static bg-${background} md:bg-transparent w-full left-0 md:w-auto py-4 md:py-0 transition-all duration-300 ease-in-out ${isNavOpen ? 'top-12 opacity-100' : 'top-[-490px] md:opacity-100 opacity-0'}`}>
              <li className={`text-${primary} hover:text-gray-300 text-lg md:mx-0 mx-4`}>
                <a href="#home" onClick={() => setIsNavOpen(false)}>Home</a>
              </li>
              <li className={`text-${primary} hover:text-gray-300 text-lg md:mx-0 mx-4`}>
                <a href="#about" onClick={() => setIsNavOpen(false)}>About</a>
              </li>
              <li className={`text-${primary} hover:text-gray-300 text-lg md:mx-0 mx-4`}>
                <a href="#skills" onClick={() => setIsNavOpen(false)}>Skills</a>
              </li>
              <li className={`text-${primary} hover:text-gray-300 text-lg md:mx-0 mx-4`}>
                <a href="#projects" onClick={() => setIsNavOpen(false)}>Projects</a>
              </li>
              <li className="md:mx-0 mx-4">
                <a href="#contact" className={`text-black bg-${buttonColor} hover:bg-${buttonColor}-700 text-white font-bold py-2 px-4 rounded`} onClick={() => setIsNavOpen(false)}>
                  Connect
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
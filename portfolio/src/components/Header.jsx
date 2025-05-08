import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";
import { useTheme } from '../theme-provider';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component
import { Menu, X } from 'lucide-react';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (show !== isScrolled) {
        setIsScrolled(show);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  const closeMenu = () => setIsNavOpen(false);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 py-4 ${isScrolled ? 'bg-background/80 backdrop-blur-md' : 'bg-transparent'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex justify-between items-center">
          <div>
            <span className={`font-bold text-2xl`}>Arasan</span>
          </div>
          <nav className="flex items-center gap-4">
            {/* Theme Toggle for Desktop */}
            <button
              className="hidden md:inline-block rounded px-3 py-1 mr-4 hover:bg-white hover:text-black transition"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>

            {/* Mobile Menu Trigger */}
            <Sheet open={isNavOpen} onOpenChange={setIsNavOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  {isNavOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link to="home" smooth={true} duration={500} onClick={closeMenu} className="font-medium text-lg cursor-pointer">
                    Home
                  </Link>
                  <Link to="about" smooth={true} duration={500} onClick={closeMenu} className="font-medium text-lg cursor-pointer">
                    About
                  </Link>
                  <Link to="projects" smooth={true} duration={500} onClick={closeMenu} className="font-medium text-lg cursor-pointer">
                    Projects
                  </Link>
                  <Link to="skills" smooth={true} duration={500} onClick={closeMenu} className="font-medium text-lg cursor-pointer">
                    Skills
                  </Link>
                  <Link to="connect" smooth={true} duration={500} onClick={closeMenu} className="font-medium text-lg cursor-pointer">
                    Connect
                  </Link>
                  {/* Theme Toggle for Mobile */}
                  <div className="pt-4">
                    <button
                      className="w-full rounded px-3 py-2 hover:bg-white transition flex items-center justify-center gap-2"
                      onClick={() => { toggleTheme(); closeMenu(); }}
                      aria-label="Toggle theme"
                    >
                      {theme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode'}
                    </button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex md:space-x-8 md:items-center">
              <li className={`text-lg`}>
                <Link to="home" smooth={true} duration={500} className="cursor-pointer">
                  Home
                </Link>
              </li>
              <li className={`text-lg`}>
                <Link to="about" smooth={true} duration={500} className="cursor-pointer">
                  About
                </Link>
              </li>
              <li className={`text-lg`}>
                <Link to="projects" smooth={true} duration={500} className="cursor-pointer">
                  Projects
                </Link>
              </li>
              <li className={`text-lg`}>
                <Link to="skills" smooth={true} duration={500} className="cursor-pointer">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="connect" smooth={true} duration={500} className={`font-bold py-2 px-4 rounded cursor-pointer`}>
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

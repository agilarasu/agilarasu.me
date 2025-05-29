import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";
import { useTheme } from '../theme-provider';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import ModeToggle from '@/components/ui/ModeToggle';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Get theme and toggleTheme
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
    <header className={`fixed top-0 left-0 w-full z-50 p-4 ${isScrolled ? 'bg-background/80 backdrop-blur-md' : 'bg-transparent'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 md:px-9">
        <div className="flex justify-between items-center">
          <Link to="home" smooth={true} duration={500} onClick={closeMenu} className="font-bold text-2xl cursor-pointer hover:text-primary transition-colors">
              Agilarasu Saravanan
          </Link>
          <nav className="flex items-center gap-4">
            <ModeToggle />

            {/* Mobile Menu Trigger */}
            <Sheet open={isNavOpen} onOpenChange={setIsNavOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <span className="sr-only">Toggle navigation menu</span>
                  {isNavOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link to="home" smooth={true} duration={500} onClick={closeMenu} className="font-medium text-lg cursor-pointer hover:text-primary transition-colors">
                    Home
                  </Link>
                  <Link to="about" smooth={true} duration={500} onClick={closeMenu} className="font-medium text-lg cursor-pointer hover:text-primary transition-colors">
                    About
                  </Link>
                  <Link to="projects" smooth={true} duration={500} onClick={closeMenu} className="font-medium text-lg cursor-pointer hover:text-primary transition-colors">
                    Projects
                  </Link>
                  <Link to="skills" smooth={true} duration={500} onClick={closeMenu} className="font-medium text-lg cursor-pointer hover:text-primary transition-colors">
                    Skills
                  </Link>
                  <Link to="connect" smooth={true} duration={500} onClick={closeMenu} className="font-medium text-lg cursor-pointer hover:text-primary transition-colors">
                    Connect
                  </Link>
                </div>
              </SheetContent>
            </Sheet>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex md:space-x-8 md:items-center">
              <li className={`text-lg`}>
                <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li className={`text-lg`}>
                <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li className={`text-lg`}>
                <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li className={`text-lg`}>
                <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-primary transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="connect"
                  smooth={true}
                  duration={500}
                  className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-5 py-2 text-sm font-medium text-foreground backdrop-blur-3xl">
                    Connect
                  </span>
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
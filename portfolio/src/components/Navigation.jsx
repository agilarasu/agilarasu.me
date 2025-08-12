import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navigation = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'reading', label: 'Readings' },
    { id: 'skills', label: 'Skills' },
    { id: 'entertainment', label: 'Entertainment' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-background/80 backdrop-blur-md rounded-full border border-border shadow-lg">
      <div className="px-6 py-3">
        <div className="flex items-center justify-center">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary px-3 py-1 rounded-full ${
                  activeSection === item.id
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-background/95 backdrop-blur-md rounded-2xl border border-border shadow-lg mx-4">
          <div className="flex flex-col space-y-1 p-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left text-sm font-medium py-3 px-4 rounded-xl transition-colors hover:text-primary hover:bg-primary/10 ${
                  activeSection === item.id
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

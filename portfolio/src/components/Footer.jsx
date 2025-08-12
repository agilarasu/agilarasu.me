import React from 'react';
import { Heart, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border bg-background-muted">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Agilarasu Saravanan</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Passionate about building impactful technology solutions through AI, 
              web development, and curiosity-driven learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About', id: 'about' },
                { label: 'Projects', id: 'projects' },
                { label: 'Readings', id: 'reading' },
                { label: 'Skills', id: 'skills' },
                { label: 'Entertainment', id: 'entertainment' },
                { label: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    const element = document.getElementById(item.id);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Location & Status */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Currently</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Available for opportunities
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                Based in Coimbatore, India
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                Final Year IT Student
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-sm text-muted-foreground mb-4 md:mb-0">
              <span>© {currentYear} Agilarasu Saravanan. Built with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500" />
              <span>and</span>
              <Coffee className="w-4 h-4 mx-1 text-amber-600" />
              <span>using React & Tailwind CSS</span>
            </div>
            
            <div className="text-xs text-muted-foreground/80">
              "Sometimes you've gotta run before you can walk" — Tony Stark
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

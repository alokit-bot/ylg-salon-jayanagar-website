import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { salonInfo } from '../mock';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'Services', 'About', 'Gallery', 'Contact'];

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="text-left">
              <h1 className="text-3xl font-bold playfair" style={{ color: 'var(--primary-burgundy)' }}>
                {salonInfo.name}
              </h1>
              <p className="text-xs tracking-widest" style={{ color: 'var(--accent-gold)' }}>
                {salonInfo.tagline}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm font-medium hover:text-opacity-80"
                style={{ color: 'var(--text-dark)' }}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href={`tel:${salonInfo.phone}`}>
              <Button 
                className="font-semibold"
                style={{ 
                  backgroundColor: 'var(--primary-burgundy)',
                  color: 'white'
                }}
              >
                <Phone className="w-4 h-4 mr-2" />
                Book Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: 'var(--primary-burgundy)' }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t" style={{ borderColor: 'var(--cream)' }}>
            <nav className="flex flex-col space-y-3 mt-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left py-2 px-4 rounded hover:bg-opacity-10"
                  style={{ 
                    color: 'var(--text-dark)',
                    backgroundColor: 'transparent'
                  }}
                >
                  {item}
                </button>
              ))}
              <a href={`tel:${salonInfo.phone}`} className="block">
                <Button 
                  className="w-full font-semibold"
                  style={{ 
                    backgroundColor: 'var(--primary-burgundy)',
                    color: 'white'
                  }}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Book Now
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
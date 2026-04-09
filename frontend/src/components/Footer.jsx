import React from 'react';
import { Phone, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import { salonInfo } from '../mock';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{ backgroundColor: 'var(--secondary-burgundy)', color: 'white' }}>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold playfair mb-3">{salonInfo.name}</h3>
            <p className="text-sm mb-4" style={{ color: 'var(--light-gold)' }}>
              {salonInfo.tagline}
            </p>
            <p className="text-sm opacity-90 leading-relaxed">
              Jayanagar's premier destination for expert hair transformations, 
              luxurious treatments, and personalized styling.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--accent-gold)' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--accent-gold)' }}>
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href={`tel:${salonInfo.phone}`} className="text-sm opacity-90 hover:opacity-100">
                  {salonInfo.phone}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm opacity-90">
                  {salonInfo.address.area}, {salonInfo.address.city}
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm opacity-90">
                  {salonInfo.hours}
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--accent-gold)' }}>
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm mt-6 opacity-75">
              Stay updated with our latest styles, offers, and beauty tips!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-sm opacity-75">
            © {currentYear} {salonInfo.name}. All rights reserved. Part of the YLG family — You Look Great™
          </p>
        </div>
      </div>
    </footer>
  );
};
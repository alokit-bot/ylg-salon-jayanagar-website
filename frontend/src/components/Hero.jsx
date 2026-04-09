import React from 'react';
import { Star, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { salonInfo } from '../mock';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center" style={{ backgroundColor: 'var(--cream)' }}>
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1773904215697-e6c21fc27ac2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBzYWxvbiUyMGludGVyaW9yfGVufDB8fHx8MTc3NTcwMTYyNHww&ixlib=rb-4.1.0&q=85)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-3xl">
          {/* Rating Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 star-icon"
                  fill={i < Math.floor(salonInfo.rating) ? 'var(--accent-gold)' : 'none'}
                  stroke="var(--accent-gold)"
                />
              ))}
            </div>
            <span className="font-semibold" style={{ color: 'var(--text-dark)' }}>
              {salonInfo.rating} • {salonInfo.reviewCount.toLocaleString()}+ Reviews
            </span>
          </div>

          {/* Main Heading */}
          <h1 
            className="text-5xl md:text-7xl font-bold playfair mb-6 leading-tight"
            style={{ color: 'var(--primary-burgundy)' }}
          >
            You Look Great
            <br />
            <span style={{ color: 'var(--accent-gold)' }}>Starts Here</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl mb-8 leading-relaxed"
            style={{ color: 'var(--text-gray)' }}
          >
            Experience Jayanagar's premier salon for expert hair transformations, 
            luxurious treatments, and personalized styling that brings out your best self.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`tel:${salonInfo.phone}`}>
              <Button 
                size="lg"
                className="font-semibold text-lg px-8 py-6 w-full sm:w-auto"
                style={{ 
                  backgroundColor: 'var(--primary-burgundy)',
                  color: 'white'
                }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
            </a>
            <a href={salonInfo.googleMapsLink} target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                variant="outline"
                className="font-semibold text-lg px-8 py-6 w-full sm:w-auto border-2"
                style={{ 
                  borderColor: 'var(--primary-burgundy)',
                  color: 'var(--primary-burgundy)',
                  backgroundColor: 'white'
                }}
              >
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions
              </Button>
            </a>
          </div>

          {/* Location Info */}
          <div className="mt-8 flex items-start space-x-2" style={{ color: 'var(--text-gray)' }}>
            <MapPin className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: 'var(--accent-gold)' }} />
            <p className="text-sm">
              {salonInfo.address.line2}, {salonInfo.address.area}, {salonInfo.address.city}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div 
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: 'var(--primary-burgundy)' }}
      />
      <div 
        className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: 'var(--accent-gold)' }}
      />
    </section>
  );
};
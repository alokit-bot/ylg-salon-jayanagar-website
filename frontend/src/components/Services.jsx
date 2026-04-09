import React from 'react';
import { Scissors, Palette, Sparkles, Crown, Flower2, Hand, Zap, Droplet } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { services } from '../mock';

const iconMap = {
  scissors: Scissors,
  palette: Palette,
  sparkles: Sparkles,
  crown: Crown,
  flower2: Flower2,
  hand: Hand,
  zap: Zap,
  droplet: Droplet
};

export const Services = () => {
  return (
    <section id="services" className="py-24" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold playfair mb-6"
            style={{ color: 'var(--primary-burgundy)' }}
          >
            Our Premium Services
          </h2>
          <div 
            className="w-24 h-1 mx-auto mb-6"
            style={{ backgroundColor: 'var(--accent-gold)' }}
          />
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-gray)' }}>
            Indulge in our comprehensive range of beauty and grooming services, 
            crafted to perfection by our expert stylists.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card 
                key={service.id}
                className="service-card border-0 shadow-lg hover:shadow-2xl bg-white overflow-hidden group cursor-pointer"
              >
                <CardHeader className="text-center pb-4">
                  <div 
                    className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: 'var(--light-gold)' }}
                  >
                    <IconComponent className="w-8 h-8" style={{ color: 'var(--primary-burgundy)' }} />
                  </div>
                  <CardTitle className="text-xl font-semibold playfair" style={{ color: 'var(--primary-burgundy)' }}>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4 min-h-[48px]" style={{ color: 'var(--text-gray)' }}>
                    {service.description}
                  </CardDescription>
                  <div className="font-semibold text-lg" style={{ color: 'var(--accent-gold)' }}>
                    From ₹{service.priceFrom.toLocaleString()}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { transformations } from '../mock';

export const Transformations = () => {
  return (
    <section className="py-24" style={{ backgroundColor: 'white' }}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold playfair mb-6"
            style={{ color: 'var(--primary-burgundy)' }}
          >
            Hair Transformations
          </h2>
          <div 
            className="w-24 h-1 mx-auto mb-6"
            style={{ backgroundColor: 'var(--accent-gold)' }}
          />
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-gray)' }}>
            Witness the magic of YLG. Real clients, real transformations, real confidence.
          </p>
        </div>

        {/* Transformations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transformations.map((transformation) => (
            <div key={transformation.id} className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                {/* Before & After Images */}
                <div className="grid grid-cols-2">
                  {/* Before */}
                  <div className="relative aspect-square">
                    <img
                      src={transformation.before}
                      alt="Before transformation"
                      className="w-full h-full object-cover"
                    />
                    <div 
                      className="absolute bottom-0 left-0 right-0 py-2 text-center text-white text-sm font-semibold"
                      style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
                    >
                      Before
                    </div>
                  </div>
                  
                  {/* After */}
                  <div className="relative aspect-square">
                    <img
                      src={transformation.after}
                      alt="After transformation"
                      className="w-full h-full object-cover"
                    />
                    <div 
                      className="absolute bottom-0 left-0 right-0 py-2 text-center text-white text-sm font-semibold"
                      style={{ backgroundColor: 'var(--primary-burgundy)' }}
                    >
                      After
                    </div>
                  </div>
                </div>

                {/* Service Label */}
                <div className="p-4 text-center" style={{ backgroundColor: 'var(--cream)' }}>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="font-semibold" style={{ color: 'var(--primary-burgundy)' }}>
                      {transformation.service}
                    </span>
                    <ArrowRight 
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                      style={{ color: 'var(--accent-gold)' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg font-semibold playfair" style={{ color: 'var(--text-gray)' }}>
            Ready for your transformation? 
            <a 
              href="tel:+91 80 6937 6724" 
              className="ml-2 underline hover:no-underline"
              style={{ color: 'var(--primary-burgundy)' }}
            >
              Book your appointment today
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
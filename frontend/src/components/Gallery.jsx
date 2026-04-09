import React from 'react';
import { gallery } from '../mock';

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold playfair mb-6"
            style={{ color: 'var(--primary-burgundy)' }}
          >
            Our Salon
          </h2>
          <div 
            className="w-24 h-1 mx-auto mb-6"
            style={{ backgroundColor: 'var(--accent-gold)' }}
          />
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-gray)' }}>
            Step into luxury. Our premium salon space is designed for your comfort and relaxation.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item) => (
            <div 
              key={item.id} 
              className="gallery-item relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <img
                src={item.url}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold playfair">{item.caption}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
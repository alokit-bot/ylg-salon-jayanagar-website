import React from 'react';
import { salonInfo } from '../mock';

export const About = () => {
  return (
    <section id="about" className="py-24" style={{ backgroundColor: 'white' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <h2 
            className="text-4xl md:text-5xl font-bold playfair mb-6"
            style={{ color: 'var(--primary-burgundy)' }}
          >
            About YLG Salon
          </h2>
          
          <div 
            className="w-24 h-1 mx-auto mb-8"
            style={{ backgroundColor: 'var(--accent-gold)' }}
          />

          {/* About Content */}
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'var(--text-gray)' }}>
            <p>
              <span className="font-semibold" style={{ color: 'var(--primary-burgundy)' }}>YLG (You Look Great)</span> is a premium salon chain in Bengaluru, 
              dedicated to bringing out your natural beauty through expert care and personalized styling.
            </p>
            
            <p>
              The Jayanagar branch, conveniently located on 11th Main Road opposite Tanishq showroom, 
              has become a trusted destination for beauty and grooming. With a stellar <span className="font-semibold">{salonInfo.rating}★ rating from over {salonInfo.reviewCount.toLocaleString()} happy clients</span>, 
              we've built our reputation on excellence and customer satisfaction.
            </p>
            
            <p>
              We are known for our <span className="font-semibold" style={{ color: 'var(--primary-burgundy)' }}>expert hair transformations</span>, 
              comprehensive bridal packages, and personalized styling services. Our team of skilled professionals 
              uses only premium international products to ensure the best results for every client.
            </p>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold playfair mb-2" style={{ color: 'var(--accent-gold)' }}>10+</div>
                <div className="text-sm" style={{ color: 'var(--text-gray)' }}>Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold playfair mb-2" style={{ color: 'var(--accent-gold)' }}>{salonInfo.rating}★</div>
                <div className="text-sm" style={{ color: 'var(--text-gray)' }}>Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold playfair mb-2" style={{ color: 'var(--accent-gold)' }}>{salonInfo.reviewCount.toLocaleString()}+</div>
                <div className="text-sm" style={{ color: 'var(--text-gray)' }}>Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold playfair mb-2" style={{ color: 'var(--accent-gold)' }}>50+</div>
                <div className="text-sm" style={{ color: 'var(--text-gray)' }}>Services</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
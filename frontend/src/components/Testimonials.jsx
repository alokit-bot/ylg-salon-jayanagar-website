import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { testimonials } from '../mock';

export const Testimonials = () => {
  return (
    <section className="py-24" style={{ backgroundColor: 'white' }}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold playfair mb-6"
            style={{ color: 'var(--primary-burgundy)' }}
          >
            What Our Clients Say
          </h2>
          <div 
            className="w-24 h-1 mx-auto mb-6"
            style={{ backgroundColor: 'var(--accent-gold)' }}
          />
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-gray)' }}>
            Don't just take our word for it. Hear from our valued clients about their experiences.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="testimonial-card border-0 shadow-lg hover:shadow-xl bg-white relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-16 h-16" style={{ color: 'var(--primary-burgundy)' }} />
              </div>

              <CardContent className="p-8 relative z-10">
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5"
                      fill="var(--accent-gold)"
                      stroke="var(--accent-gold)"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-gray)' }}>
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="border-t pt-4" style={{ borderColor: 'var(--cream)' }}>
                  <div className="font-semibold" style={{ color: 'var(--primary-burgundy)' }}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm" style={{ color: 'var(--text-gray)' }}>
                    {testimonial.service}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { Phone, MapPin, Clock, Mail, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { salonInfo } from '../mock';

export const Contact = () => {
  return (
    <section id="contact" className="py-24" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold playfair mb-6"
            style={{ color: 'var(--primary-burgundy)' }}
          >
            Visit Us
          </h2>
          <div 
            className="w-24 h-1 mx-auto mb-6"
            style={{ backgroundColor: 'var(--accent-gold)' }}
          />
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-gray)' }}>
            Located in the heart of Jayanagar, we're easy to find and ready to serve you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Phone */}
            <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--light-gold)' }}
                  >
                    <Phone className="w-6 h-6" style={{ color: 'var(--primary-burgundy)' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--primary-burgundy)' }}>
                      Call Us
                    </h3>
                    <a 
                      href={`tel:${salonInfo.phone}`}
                      className="text-lg hover:underline"
                      style={{ color: 'var(--text-gray)' }}
                    >
                      {salonInfo.phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Address */}
            <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--light-gold)' }}
                  >
                    <MapPin className="w-6 h-6" style={{ color: 'var(--primary-burgundy)' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--primary-burgundy)' }}>
                      Location
                    </h3>
                    <p className="leading-relaxed" style={{ color: 'var(--text-gray)' }}>
                      {salonInfo.address.line1}<br />
                      {salonInfo.address.line2}<br />
                      {salonInfo.address.area}, {salonInfo.address.city}<br />
                      {salonInfo.state} {salonInfo.address.pin}, {salonInfo.address.country}
                    </p>
                    <a 
                      href={salonInfo.googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button 
                        variant="link" 
                        className="px-0 mt-2"
                        style={{ color: 'var(--primary-burgundy)' }}
                      >
                        Get Directions <ExternalLink className="w-4 h-4 ml-1" />
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--light-gold)' }}
                  >
                    <Clock className="w-6 h-6" style={{ color: 'var(--primary-burgundy)' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--primary-burgundy)' }}>
                      Opening Hours
                    </h3>
                    <p style={{ color: 'var(--text-gray)' }}>
                      {salonInfo.hours}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map or CTA */}
          <div className="flex flex-col justify-center">
            <div 
              className="rounded-2xl p-12 text-center shadow-xl"
              style={{ 
                background: 'linear-gradient(135deg, rgba(139, 38, 53, 0.05), rgba(212, 175, 55, 0.05))',
                border: '2px solid var(--light-gold)'
              }}
            >
              <h3 
                className="text-3xl font-bold playfair mb-4"
                style={{ color: 'var(--primary-burgundy)' }}
              >
                Ready to Look Great?
              </h3>
              <p className="text-lg mb-8" style={{ color: 'var(--text-gray)' }}>
                Book your appointment today and experience the YLG difference.
              </p>
              <a href={`tel:${salonInfo.phone}`}>
                <Button 
                  size="lg"
                  className="font-semibold text-lg px-8 py-6"
                  style={{ 
                    backgroundColor: 'var(--primary-burgundy)',
                    color: 'white'
                  }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call to Book Now
                </Button>
              </a>
              
              <div className="mt-8 pt-8 border-t" style={{ borderColor: 'var(--accent-gold)' }}>
                <p className="text-sm" style={{ color: 'var(--text-gray)' }}>
                  Walk-ins welcome, but appointments preferred
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
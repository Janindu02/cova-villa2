'use client';

import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function VillaDetails() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const elements = document.querySelectorAll(
      '.fade-in-up, .fade-in, .slide-in-left, .slide-in-right, .scale-in'
    );
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      elements.forEach((el) => observerRef.current?.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#4A1F0A] via-[#6B3410] to-[#5A2810]"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-4 animate-fade-in-up">Villa Details</h1>
          <p className="text-xl text-white/90 animate-fade-in-up delay-200">Discover the luxury and comfort of Cova Villa</p>
        </div>
      </section>

      {/* The Essence Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2c1810] mb-6 fade-in-up">The Essence of Cova Villa</h2>
          <p className="text-lg text-[#2c1810]/80 leading-relaxed mb-8 fade-in-up delay-200">
            Nestled along the pristine shores of Dickwella, Cova Villa offers a unique blend of modern luxury and ancient Sri Lankan charm. Designed for discerning travelers, our villa provides an unparalleled escape where every detail is crafted for your utmost comfort and relaxation.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="slide-in-left">
              <h3 className="text-2xl font-serif text-[#2c1810] mb-4">Spacious Living & Dining</h3>
              <p className="text-[#2c1810]/70 leading-relaxed">
                Our open-plan layouts seamlessly blend plush seating areas with dedicated dining spaces. Traditional Sri Lankan accents meet contemporary design, creating an atmosphere of refined elegance.
              </p>
            </div>
            <div className="slide-in-right">
              <h3 className="text-2xl font-serif text-[#2c1810] mb-4">Private Beach Access</h3>
              <p className="text-[#2c1810]/70 leading-relaxed">
                Step directly onto your exclusive access to a secluded golden sand beach. This pristine stretch of coastline is ideal for morning strolls, meditations, or simply dipping your toes in the warm Indian Ocean waters.
              </p>
            </div>
            <div className="slide-in-left delay-200">
              <h3 className="text-2xl font-serif text-[#2c1810] mb-4">Infinity Pool & Gardens</h3>
              <p className="text-[#2c1810]/70 leading-relaxed">
                Our stunning infinity pool appears to merge seamlessly with the Indian Ocean, creating an illusion of endless water. Surrounded by lush tropical gardens, private cabanas, and sun loungers.
              </p>
            </div>
            <div className="slide-in-right delay-200">
              <h3 className="text-2xl font-serif text-[#2c1810] mb-4">Personalized Service</h3>
              <p className="text-[#2c1810]/70 leading-relaxed">
                Our dedicated team is committed to making your stay unforgettable. From our private chef who can prepare meals tailored to your preferences, to our housekeeper ensuring every detail is perfect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Villa Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2c1810] text-center mb-12 fade-in-up">Villa Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🛏️', title: '3 Luxurious Bedrooms', desc: 'Each designed for comfort and privacy, with en-suite bathrooms.' },
              { icon: '🏊', title: 'Private Pool & Spa', desc: 'Indulge in relaxation with our exclusive amenities.' },
              { icon: '🌊', title: 'Panoramic Ocean Views', desc: 'Wake up to breathtaking vistas of the Indian Ocean.' },
              { icon: '👥', title: 'Dedicated Staff & Services', desc: 'Personalized service to ensure an unforgettable stay.' },
              { icon: '🌴', title: 'Lush Tropical Gardens', desc: 'Explore vibrant flora and serene pathways.' },
              { icon: '🌅', title: 'Stunning Sunset Views', desc: 'Experience the magic of twilight from your private patio.' },
            ].map((highlight, idx) => (
              <div 
                key={idx} 
                className="text-center p-6 bg-white rounded-lg border border-gray-100 scale-in hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                style={{ transitionDelay: `${idx * 0.05}s` }}
              >
                <div className="text-4xl mb-4 transform transition-transform duration-300 hover:scale-110">{highlight.icon}</div>
                <h3 className="text-lg font-semibold text-[#2c1810] mb-2">{highlight.title}</h3>
                <p className="text-sm text-[#2c1810]/70">{highlight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2c1810] text-center mb-12 fade-in-up">Our Exquisite Rooms</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Master Ocean Suite', features: ['King-size bed', 'Private balcony with ocean views', 'En-suite bathroom with rain shower'], image: '/gallery/749346697.jpg' },
              { name: 'Garden View Retreat', features: ['Queen-size bed', 'Tranquil garden views', 'Dedicated workspace'], image: '/gallery/749346835.jpg' },
              { name: 'Twin Palm Sanctuary', features: ['Two single beds', 'Ocean pool access', 'Comfortable lounging area'], image: '/gallery/749346839.jpg' },
              { name: 'Sunset Loft', features: ['King-size bed', 'Private sunset terrace', 'Private seating area'], image: '/gallery/749346878.jpg' },
            ].map((room, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 scale-in hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif text-[#2c1810] mb-4">{room.name}</h3>
                  <ul className="space-y-2 text-[#2c1810]/70">
                    {room.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Rooms() {
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
      <section className="relative w-full min-h-[420px] md:h-[520px] overflow-hidden">
        <Image
          src="/rooms/yaunder-place-hiriketiya-roomsbanner.jpg"
          alt="Rooms at Yaunder Place"
          fill
          priority
          className="object-cover object-left md:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2c1810]/70 via-[#2c1810]/40 to-[#2c1810]/80"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[420px] text-center px-4 py-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-4 animate-fade-in-up drop-shadow-lg">Rooms at Yaunder Place</h1>
          <p className="text-lg sm:text-xl text-white/95 animate-fade-in-up delay-200 max-w-2xl drop-shadow-md">Discover comfort and style in the heart of Dickwella</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2c1810] mb-6 fade-in-up">About Yaunder Place Hiriketiya</h2>
          <p className="text-lg text-[#2c1810]/80 leading-relaxed mb-8 fade-in-up delay-200">
            Yaunder Place Hiriketiya in Dickwella offers comfortable rooms with air-conditioning, private bathrooms, and balconies. Each room includes a dining area, work desk, and free toiletries. Guests can enjoy a lush garden, terrace, free WiFi, shuttle service, and free on-site private parking.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="slide-in-left">
              <h3 className="text-2xl font-serif text-[#2c1810] mb-4">Comfortable Accommodations</h3>
              <p className="text-[#2c1810]/70 leading-relaxed">
                Relax in spacious, brand-new rooms featuring air-conditioning, private bathrooms with showers, balconies, dining areas, work desks and free toiletries.
              </p>
            </div>
            <div className="slide-in-right">
              <h3 className="text-2xl font-serif text-[#2c1810] mb-4">Exceptional Facilities</h3>
              <p className="text-[#2c1810]/70 leading-relaxed">
                Enjoy a lush garden, relaxing terrace and free WiFi. A shuttle service, bicycle parking and free on-site private parking are also available.
              </p>
            </div>
            <div className="slide-in-left delay-200">
              <h3 className="text-2xl font-serif text-[#2c1810] mb-4">Delicious Breakfast</h3>
              <p className="text-[#2c1810]/70 leading-relaxed">
                A full English/Irish, vegetarian and Asian breakfast is available each morning in our relaxing dining area.
              </p>
            </div>
            <div className="slide-in-right delay-200">
              <h3 className="text-2xl font-serif text-[#2c1810] mb-4">Prime Location</h3>
              <p className="text-[#2c1810]/70 leading-relaxed">
                Dickwella Beach is a 12-minute walk away. Nearby attractions include Hummanaya Blow Hole (6 km) and Tangalle Lagoon (9.3 mi). Koggala Airport is 32 mi from the property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2c1810] text-center mb-12 fade-in-up">Property Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { iconUrl: 'https://img.icons8.com/?size=100&id=PIQrqZ6SK4m6&format=png&color=4a1f0a', title: 'Breakfast Included', desc: 'Full English/Irish, vegetarian and Asian breakfast.' },
              { iconUrl: 'https://img.icons8.com/?size=100&id=dInHI27VNaWN&format=png&color=4a1f0a', title: 'Free Private Parking', desc: 'Free on-site parking, no reservation needed.' },
              { iconUrl: 'https://img.icons8.com/?size=100&id=dTx651hNV0QE&format=png&color=4a1f0a', title: 'Kitchen Facilities', desc: 'Electric kettle, dining table and dining area.' },
              { iconUrl: 'https://img.icons8.com/?size=100&id=CvFtLklKRdYD&format=png&color=4a1f0a', title: 'Terrace & Views', desc: 'Private balconies and relaxing terrace.' },
              { iconUrl: 'https://img.icons8.com/?size=100&id=3683&format=png&color=4a1f0a', title: 'Shuttle Service', desc: 'Free shuttle service and bicycle parking.' },
              { iconUrl: 'https://img.icons8.com/?size=100&id=9922&format=png&color=4a1f0a', title: 'Free WiFi', desc: 'WiFi is available in all areas and free of charge.' },
            ].map((highlight, idx) => (
              <div 
                key={idx} 
                className="text-center p-6 bg-white rounded-lg border border-gray-100 scale-in hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                style={{ transitionDelay: `${idx * 0.05}s` }}
              >
                <div className="flex justify-center mb-4 transform transition-transform duration-300 hover:scale-110">
                  <Image
                    src={highlight.iconUrl}
                    alt={highlight.title}
                    width={64}
                    height={64}
                    className="object-contain"
                    unoptimized
                  />
                </div>
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
          <h2 className="text-4xl md:text-5xl font-serif text-[#2c1810] text-center mb-4 fade-in-up">Room Options</h2>
          <p className="text-center text-[#2c1810]/70 mb-12 fade-in-up delay-200">
            Spacious, brand-new rooms designed for comfort and relaxation.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Double Room', sleeps: 'Sleeps: 2 adults · 1 king bed', features: ['Air conditioning', 'Attached bathroom', 'Terrace', 'View', 'Free WiFi'], image: '/rooms/yaunder-place-hiriketiya-room1base.png' },
              { name: 'Double Room — High Floor', sleeps: 'Sleeps: 2 adults · 1 king bed', features: ['Private balcony', 'Air conditioning', 'Attached bathroom', 'Terrace & view', 'Free WiFi'], image: '/rooms/yaunder-place-hiriketiya-room2iupsatar.png' },
            ].map((room, idx) => (
              <div 
                key={room.name} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-[#6B3410]/10 hover:shadow-2xl scale-in transition-all duration-500 transform hover:-translate-y-2"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 md:p-7">
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <h3 className="text-2xl md:text-3xl font-serif text-[#2c1810]">{room.name}</h3>
                    <span className="shrink-0 bg-[#6B3410]/10 text-[#6B3410] text-xs font-semibold px-3 py-1 rounded-full">
                      Popular
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#2c1810]/60 mb-5">
                    <svg className="w-5 h-5 text-[#6B3410]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10m0 0a2 2 0 002 2h14a2 2 0 002-2m-16 0V9a2 2 0 012-2h12a2 2 0 012 2v8m-16 0h16M5 11h14" />
                    </svg>
                    <span>{room.sleeps}</span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[#2c1810]/70 mb-7">
                    {room.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#6B3410]/10 text-[#6B3410] shrink-0">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/booking"
                    className="block w-full text-center px-6 py-3 bg-[#6B3410] text-white text-sm font-semibold rounded-lg hover:bg-[#5A2810] transition-all duration-300 transform hover:scale-105"
                  >
                    Check Availability
                  </Link>
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

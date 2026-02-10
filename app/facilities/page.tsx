'use client';

import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Facilities() {
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

  const facilities = [
    {
      icon: '📶',
      title: 'High Speed Wi-Fi',
      description: 'Complimentary high-speed internet throughout the villa.'
    },
    {
      icon: '🅿️',
      title: 'Private Parking',
      description: 'Secure and convenient on-site parking for your vehicles.'
    },
    {
      icon: '🛁',
      title: 'En-suite Bathrooms',
      description: 'Luxurious private bathrooms with premium toiletries.'
    },
    {
      icon: '🏊',
      title: 'Infinity Pool',
      description: 'Relax in our stunning infinity pool overlooking the ocean.'
    },
    {
      icon: '🌿',
      title: 'Tropical Gardens',
      description: 'Explore lush, landscaped gardens brimming with local flora.'
    },
    {
      icon: '👨‍🍳',
      title: 'Private Chef',
      description: 'Indulge in gourmet meals prepared by our skilled private chef.'
    },
    {
      icon: '🛏️',
      title: 'Luxurious Beds',
      description: 'Enjoy ultimate comfort on our premium king and queen-sized beds.'
    },
    {
      icon: '🗺️',
      title: 'Excursion Planning',
      description: 'Let us organize your adventures to nearby attractions and beyond.'
    },
    {
      icon: '🏖️',
      title: 'Private Beach Access',
      description: 'Exclusive access to a secluded golden sand beach.'
    },
    {
      icon: '🧘',
      title: 'Yoga Deck',
      description: 'Ocean-facing deck perfect for morning yoga and meditation sessions.'
    },
    {
      icon: '🍽️',
      title: 'Al Fresco Dining',
      description: 'Enjoy romantic outdoor dining under the stars.'
    },
    {
      icon: '🌅',
      title: 'Sunset Views',
      description: 'Spectacular sunset views from private balconies and terraces.'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-[#2c1810] mb-6 fade-in-up">Villa Amenities</h1>
          <p className="text-lg text-[#2c1810]/80 fade-in-up delay-200">
            Discover all the facilities and services available during your stay at Cova Villa
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-200 rounded-lg p-6 text-center scale-in hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                style={{ transitionDelay: `${idx * 0.05}s` }}
              >
                <div className="text-5xl mb-4 transform transition-transform duration-300 hover:scale-110">{facility.icon}</div>
                <h3 className="text-xl font-serif text-[#2c1810] mb-3">{facility.title}</h3>
                <p className="text-[#2c1810]/70 leading-relaxed">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2c1810] text-center mb-12 fade-in-up">Additional Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-8 slide-in-left hover:shadow-md transition-all duration-300">
              <h3 className="text-2xl font-serif text-[#2c1810] mb-4">Concierge Services</h3>
              <p className="text-[#2c1810]/70 leading-relaxed mb-4">
                Our dedicated villa manager is available to assist with any requests, from restaurant reservations to activity bookings.
              </p>
              <ul className="space-y-2 text-[#2c1810]/70">
                <li>• Restaurant reservations</li>
                <li>• Activity and excursion bookings</li>
                <li>• Transportation arrangements</li>
                <li>• Special event planning</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8 slide-in-right hover:shadow-md transition-all duration-300">
              <h3 className="text-2xl font-serif text-[#2c1810] mb-4">Housekeeping</h3>
              <p className="text-[#2c1810]/70 leading-relaxed mb-4">
                Daily housekeeping service ensures your villa remains pristine throughout your stay.
              </p>
              <ul className="space-y-2 text-[#2c1810]/70">
                <li>• Daily room cleaning</li>
                <li>• Fresh linens and towels</li>
                <li>• Laundry service available</li>
                <li>• Turn-down service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

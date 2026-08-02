'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
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
      iconUrl: 'https://img.icons8.com/?size=100&id=9922&format=png&color=4a1f0a',
      title: 'Free WiFi',
      description: 'WiFi is available in all areas and is free of charge.'
    },
    {
      iconUrl: 'https://img.icons8.com/?size=100&id=dInHI27VNaWN&format=png&color=4a1f0a',
      title: 'Free Private Parking',
      description: 'Free private parking is available on site — no reservation needed.'
    },
    {
      iconUrl: 'https://img.icons8.com/?size=100&id=PIQrqZ6SK4m6&format=png&color=4a1f0a',
      title: 'Breakfast',
      description: 'Full English/Irish, vegetarian and Asian breakfast served each morning.'
    },
    {
      iconUrl: 'https://img.icons8.com/?size=100&id=dTx651hNV0QE&format=png&color=4a1f0a',
      title: 'Tea/Coffee Maker',
      description: 'Tea and coffee making facilities available in all rooms.'
    },
    {
      iconUrl: 'https://img.icons8.com/?size=100&id=11516&format=png&color=4a1f0a',
      title: 'Private Bathrooms',
      description: 'Private bathrooms with shower, bidet, towels and free toiletries.'
    },
    {
      iconUrl: 'https://img.icons8.com/?size=100&id=aY2sjA6XgOTA&format=png&color=4a1f0a',
      title: 'Air Conditioning',
      description: 'All rooms are air-conditioned for a comfortable stay.'
    },
    {
      iconUrl: 'https://img.icons8.com/?size=100&id=CvFtLklKRdYD&format=png&color=4a1f0a',
      title: 'Terrace & View',
      description: 'Relax on the terrace or your private balcony with a view.'
    },
    {
      iconUrl: 'https://img.icons8.com/?size=100&id=rGyijbwI2sHU&format=png&color=4a1f0a',
      title: 'Room Service',
      description: 'Convenient room service available during your stay.'
    },
    {
      iconUrl: 'https://img.icons8.com/?size=100&id=3683&format=png&color=4a1f0a',
      title: 'Shuttle Service',
      description: 'Free shuttle service and bicycle parking on site.'
    },
    {
      iconUrl: 'https://img.icons8.com/?size=100&id=31197&format=png&color=4a1f0a',
      title: 'Non-Smoking Rooms',
      description: 'A smoke-free property for a fresh and clean stay.'
    },
    {
      iconUrl: 'https://img.icons8.com/?size=100&id=aCw2sASZmu3W&format=png&color=4a1f0a',
      title: 'Garden',
      description: 'Enjoy a lush garden and relaxing outdoor spaces.'
    },
    {
      iconUrl: 'https://img.icons8.com/?size=100&id=MxNPlO0FwaQc&format=png&color=4a1f0a',
      title: 'Safety Deposit Box',
      description: 'Keep your valuables secure during your stay.'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-[#2c1810] mb-6 fade-in-up">Facilities & Amenities</h1>
          <p className="text-lg text-[#2c1810]/80 fade-in-up delay-200">
            Discover all the facilities and services available during your stay at Yaunder Place Hiriketiya
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
                <div className="flex justify-center mb-4 transform transition-transform duration-300 hover:scale-110">
                  <Image
                    src={facility.iconUrl}
                    alt={facility.title}
                    width={80}
                    height={80}
                    className="object-contain"
                    unoptimized
                  />
                </div>
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
          <h2 className="text-4xl md:text-5xl font-serif text-[#2c1810] text-center mb-12 fade-in-up">In Every Room</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-8 slide-in-left hover:shadow-md transition-all duration-300">
              <h3 className="text-2xl font-serif text-[#2c1810] mb-4">Bathroom</h3>
              <ul className="space-y-2 text-[#2c1810]/70">
                <li>• Toilet paper & towels</li>
                <li>• Bidet & shower</li>
                <li>• Free toiletries</li>
                <li>• Private bathroom</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8 slide-in-right hover:shadow-md transition-all duration-300">
              <h3 className="text-2xl font-serif text-[#2c1810] mb-4">Room & Living Area</h3>
              <ul className="space-y-2 text-[#2c1810]/70">
                <li>• Linens provided</li>
                <li>• Dining table & area</li>
                <li>• Seating area & desk</li>
                <li>• Electric kettle</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8 slide-in-right delay-100 hover:shadow-md transition-all duration-300">
              <h3 className="text-2xl font-serif text-[#2c1810] mb-4">Safety & General</h3>
              <ul className="space-y-2 text-[#2c1810]/70">
                <li>• Safety deposit box</li>
                <li>• Private entrance</li>
                <li>• Smoke-free property</li>
                <li>• English spoken</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

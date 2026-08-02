'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
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

  const filters = ['All', 'Exterior', 'Bedroom', 'Bathroom'];

  const images = [
    { src: '/gallery/yaunder-place-hiriketiya.jpg', category: 'Exterior', title: 'Yaunder Place Hiriketiya Exterior' },
    { src: '/gallery/yaunder-place-hiriketiya1.jpg', category: 'Exterior', title: 'Guesthouse Exterior with Balcony' },
    { src: '/gallery/yaunder-place-hiriketiya2.jpg', category: 'Exterior', title: 'White House with Balcony & Palm Tree' },
    { src: '/gallery/yaunder-place-hiriketiya4.jpg', category: 'Exterior', title: 'Yaunder Place Surroundings' },
    { src: '/gallery/yaunder-place-hiriketiya-room1.jpg', category: 'Bedroom', title: 'Double Room with King Bed' },
    { src: '/gallery/yaunder-place-hiriketiya-room2.jpg', category: 'Bedroom', title: 'Bedroom with Stone Wall' },
    { src: '/gallery/yaunder-place-hiriketiya-room3.jpg', category: 'Bedroom', title: 'Comfortable Bedroom' },
    { src: '/gallery/yaunder-place-hiriketiya-room4.jpg', category: 'Bedroom', title: 'Spacious Bedroom Interior' },
    { src: '/gallery/yaunder-place-hiriketiya-room5.jpg', category: 'Bedroom', title: 'Large Bed with Ceiling' },
    { src: '/gallery/yaunder-place-hiriketiya-room6.jpg', category: 'Bedroom', title: 'Bedroom with Balcony Access' },
    { src: '/gallery/yaunder-place-hiriketiya-room7.jpg', category: 'Bedroom', title: 'High Floor Double Room' },
    { src: '/gallery/yaunder-place-hiriketiya-room8.jpg', category: 'Bedroom', title: 'Cozy Room Details' },
    { src: '/gallery/yaunder-place-hiriketiya-light.jpg', category: 'Bedroom', title: 'Room Lighting Details' },
    { src: '/gallery/yaunder-place-hiriketiya-washroom1.jpg', category: 'Bathroom', title: 'Bathroom with Shower' },
    { src: '/gallery/yaunder-place-hiriketiya-washroom2.jpg', category: 'Bathroom', title: 'Bathroom with Toilet & Window' },
  ];

  const filteredImages = activeFilter === 'All'
    ? images
    : images.filter(img => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Gallery Introduction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-[#6B3410] mb-6 fade-in-up">Our Captivating Gallery</h1>
          <p className="text-lg text-[#2c1810]/80 leading-relaxed mb-8 max-w-3xl mx-auto fade-in-up delay-200">
            Explore the comfortable rooms, private bathrooms and peaceful surroundings of Yaunder Place Hiriketiya through our photo collection.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up delay-300">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === filter
                    ? 'bg-[#6B3410] text-white'
                    : 'bg-white text-[#2c1810] border border-gray-200 hover:border-[#6B3410]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div key={activeFilter} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredImages.map((image, idx) => (
              <div
                key={image.src}
                className="aspect-square rounded-lg overflow-hidden cursor-pointer animate-scale-in hover:opacity-90 transition-all duration-300 transform hover:scale-105 relative"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

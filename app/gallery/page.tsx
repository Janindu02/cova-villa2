'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Rooms', 'Garden', 'Living', 'Lifestyle'];
  
  const imageFiles = [
    '749346697.jpg',
    '749346835.jpg',
    '749346839.jpg',
    '749346878.jpg',
    '749346900.jpg',
    '749346932.jpg',
    '749346960.jpg',
    '794750935.jpg',
    '794751402.jpg',
    '794753384.jpg',
    '794753564.jpg',
    '794753650.jpg',
    '802199493.jpg',
    '802200016.jpg',
    '802203015.jpg',
    '802206869.jpg',
  ];
  
  const images = imageFiles.map((file, i) => ({
    id: i + 1,
    src: `/gallery/${file}`,
    category: ['Rooms', 'Garden', 'Living', 'Lifestyle', 'Rooms', 'Living', 'Garden', 'Lifestyle', 'Rooms', 'Living', 'Garden', 'Lifestyle', 'Rooms', 'Living', 'Garden', 'Lifestyle'][i],
    title: `Gallery Image ${i + 1}`
  }));

  const filteredImages = activeFilter === 'All' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Gallery Introduction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-[#6B3410] mb-6">Our Captivating Gallery</h1>
          <p className="text-lg text-[#2c1810]/80 leading-relaxed mb-8 max-w-3xl mx-auto">
            Explore the serene beauty and intricate details of Cova Villa through our curated collection of photographs, bathed in the warmth of Sri Lankan sunsets.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity relative"
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover"
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


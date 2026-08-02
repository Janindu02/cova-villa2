'use client';

import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Location() {
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fef5e7]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-[#2c1810] mb-6 fade-in-up">Our Tranquil Location</h1>
          <p className="text-lg text-[#2c1810]/80 leading-relaxed mb-12 max-w-3xl mx-auto fade-in-up delay-200">
            Yaunder Place Hiriketiya enjoys an excellent location in the heart of Dickwella, within minutes of beautiful beaches, restaurants and local attractions.
          </p>
          
          {/* Map Card */}
          <div className="bg-[#fef9f3] rounded-xl p-8 max-w-4xl mx-auto shadow-sm border-2 border-[#6B3410] scale-in">
            <div className="relative h-96 rounded-lg mb-6 overflow-hidden border-2 border-[#6B3410]">
              <iframe
                src="https://maps.google.com/maps?q=Yaunder+Place,+Kondeniya,+Dickwella,+81200,+Sri+Lanka&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
            <p className="text-lg font-medium text-[#2c1810] mb-4">Yaunder Place Hiriketiya, Kondeniya, Dickwella, 81200, Sri Lanka</p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Yaunder+Place,+Kondeniya,+Dickwella,+81200,+Sri+Lanka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-[#6B3410] text-white rounded-md hover:bg-[#5A2810] transition-all duration-300 transform hover:scale-105 font-medium"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* What's Nearby */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2c1810] text-center mb-4 fade-in-up">What&apos;s Nearby</h2>
          <p className="text-center text-[#2c1810]/70 mb-12 fade-in-up delay-200">
            Everything you need is within easy reach of Yaunder Place Hiriketiya.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Dickwella Beach',
                desc: 'A tranquil crescent-shaped bay just 1.5 km away — perfect for swimming, sunbathing and peaceful walks along the shore.',
                distance: '1.5 km',
                image: '/places/dickwella-beach.jpg'
              },
              {
                title: 'Hiriketiya Beach',
                desc: 'A popular surfing beach located just 1 km away, with a lively atmosphere, beach bars and restaurants.',
                distance: '1 km',
                image: '/places/hiriketiya-beach.jpg'
              },
              {
                title: 'Hummanaya Blow Hole',
                desc: "Witness the spectacular natural phenomenon of Sri Lanka's only blowhole, sending geysers high into the air.",
                distance: '6 km',
                image: '/places/hummanaya-blowhole.jpg'
              },
              {
                title: 'Batheegama Beach',
                desc: 'A quiet stretch of golden sand about 2.6 km away, perfect for a peaceful swim away from the crowds.',
                distance: '2.6 km',
                image: '/places/betheegama-beach.jpeg'
              },
              {
                title: 'Blue Beach Island',
                desc: 'A scenic island getaway near Dondra, famous for its crystal-clear turquoise waters, snorkelling and boat trips.',
                distance: '2.8 km',
                image: '/places/aerial-view-of-blue-beach-island-drone-view-of-the-beaches-of-sri-lanka-photo.jpg'
              },
              {
                title: 'Dondra Lighthouse',
                desc: 'Standing at the southernmost tip of Sri Lanka, this historic lighthouse offers sweeping views over the Indian Ocean.',
                distance: '17.3 km',
                image: '/places/dondra-lighthouse.jpg'
              },
            ].map((wonder, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 scale-in hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={wonder.image}
                    alt={wonder.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-[#2c1810] mb-3">{wonder.title}</h3>
                  <p className="text-[#2c1810]/70 mb-4 leading-relaxed">{wonder.desc}</p>
                  <div className="flex items-center text-[#6B3410]">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm font-medium">{wonder.distance}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Area Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2c1810] text-center mb-4 fade-in-up">Restaurants, Beaches & Transport</h2>
          <p className="text-center text-[#2c1810]/70 mb-12 fade-in-up delay-200">
            Explore the local area around Yaunder Place Hiriketiya.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-100 rounded-lg p-8 scale-in hover:shadow-md transition-all duration-300">
              <h3 className="text-2xl font-serif text-[#2c1810] mb-4">Restaurants & Cafes</h3>
              <ul className="space-y-3 text-[#2c1810]/70">
                <li className="flex justify-between"><span>Priyanka Restaurant</span><span className="text-[#6B3410] font-medium">450 m</span></li>
                <li className="flex justify-between"><span>Garlic Cafe</span><span className="text-[#6B3410] font-medium">550 m</span></li>
                <li className="flex justify-between"><span>Fish Tales Hiriketiya</span><span className="text-[#6B3410] font-medium">600 m</span></li>
              </ul>
            </div>
            <div className="bg-white border border-gray-100 rounded-lg p-8 scale-in delay-100 hover:shadow-md transition-all duration-300">
              <h3 className="text-2xl font-serif text-[#2c1810] mb-4">Beaches in the Neighborhood</h3>
              <ul className="space-y-3 text-[#2c1810]/70">
                <li className="flex justify-between"><span>Dickwella Beach</span><span className="text-[#6B3410] font-medium">1.5 km</span></li>
                <li className="flex justify-between"><span>Hiriketiya Beach</span><span className="text-[#6B3410] font-medium">1 km</span></li>
                <li className="flex justify-between"><span>Batheegama Beach</span><span className="text-[#6B3410] font-medium">2.6 km</span></li>
                <li className="flex justify-between"><span>Kudawella Beach</span><span className="text-[#6B3410] font-medium">3.2 km</span></li>
                <li className="flex justify-between"><span>Mawella Beach</span><span className="text-[#6B3410] font-medium">7 km</span></li>
              </ul>
            </div>
            <div className="bg-white border border-gray-100 rounded-lg p-8 scale-in delay-200 hover:shadow-md transition-all duration-300">
              <h3 className="text-2xl font-serif text-[#2c1810] mb-4">Transport & Airports</h3>
              <ul className="space-y-3 text-[#2c1810]/70">
                <li className="flex justify-between"><span>Beliatta Railway Station</span><span className="text-[#6B3410] font-medium">12 km</span></li>
                <li className="flex justify-between"><span>Koggala Airport</span><span className="text-[#6B3410] font-medium">51 km</span></li>
                <li className="flex justify-between"><span>Mattala Rajapaksa Intl. Airport</span><span className="text-[#6B3410] font-medium">68 km</span></li>
                <li className="flex justify-between"><span>Weerawila Airport</span><span className="text-[#6B3410] font-medium">76 km</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Getting to Yaunder Place */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2c1810] text-center mb-4 fade-in-up">Getting to Yaunder Place</h2>
          <p className="text-center text-[#2c1810]/70 mb-12 fade-in-up delay-200">
            Convenient travel options to make your journey to Dickwella as relaxing as your stay.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                iconUrl: 'https://img.icons8.com/?size=100&id=3683&format=png&color=4a1f0a',
                title: 'Airport Transfer',
                desc: 'Koggala Airport is 51 km away and Mattala Rajapaksa Intl. Airport 68 km. Private transfers can be arranged upon request.'
              },
              {
                iconUrl: 'https://img.icons8.com/?size=100&id=pgnkAal3-Ns3&format=png&color=4a1f0a',
                title: 'Shuttle Service',
                desc: 'A free shuttle service is available at the property, along with bicycle parking for exploring the area.'
              },
              {
                iconUrl: 'https://img.icons8.com/?size=100&id=FPZ6lYwj3MZP&format=png&color=4a1f0a',
                title: 'Local Tuk-Tuk',
                desc: 'On-demand tuk-tuk service is convenient for short distances to nearby beaches, restaurants and attractions.'
              },
            ].map((option, idx) => (
              <div 
                key={idx} 
                className="text-center p-6 bg-white rounded-lg border border-gray-100 scale-in hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="flex justify-center mb-4 transform transition-transform duration-300 hover:scale-110">
                  <Image
                    src={option.iconUrl}
                    alt={option.title}
                    width={80}
                    height={80}
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <h3 className="text-xl font-serif text-[#2c1810] mb-3">{option.title}</h3>
                <p className="text-[#2c1810]/70 leading-relaxed">{option.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

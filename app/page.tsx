'use client';

import { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scoreVisible, setScoreVisible] = useState(false);
  const [score, setScore] = useState(0);
  const scoreRef = useRef<HTMLDivElement | null>(null);

  const heroImages = [
    '/gallery/yaunder-place-hiriketiya.jpg',
    '/gallery/yaunder-place-hiriketiya1.jpg',
    '/gallery/yaunder-place-hiriketiya2.jpg',
    '/gallery/yaunder-place-hiriketiya4.jpg',
  ];

  useEffect(() => {
    // Create Intersection Observer for scroll animations
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

    // Observe all elements with animation classes
    const elements = document.querySelectorAll(
      '.fade-in-up, .fade-in, .slide-in-left, .slide-in-right, .scale-in, .scale-in-slow'
    );
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      elements.forEach((el) => observerRef.current?.unobserve(el));
    };
  }, []);

  useEffect(() => {
    // Rotate hero background images every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setScoreVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    if (scoreRef.current) obs.observe(scoreRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!scoreVisible) return;
    const target = 9.7;
    const duration = 2000;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setScore(parseFloat((target * eased).toFixed(1)));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [scoreVisible]);

  const testimonials = [
    {
      quote: "Everything was perfect. The accommodation is located in a very quiet area, is spacious and equipped with new equipment. It is located just a 15-minute walk from Dickwella Beach. The owners are very kind and attentive. I highly recommend this.",
      author: 'Zineb',
      country: 'France',
    },
    {
      quote: "Wonderful stay! Everything is brand new and super spacious. Upon arrival we were warmly welcomed, but due to the somewhat defective English helps the neighbor with translating where necessary. A scooter was arranged and we could have our laundry done.",
      author: 'Rietvelt',
      country: 'Netherlands',
    },
    {
      quote: "Everything!! Super new and clean, very very nice couple and delicious breakfast :) Great location, within minutes of the city center, the bus stop and within 15 minutes the beach. Highly recommended!!",
      author: 'Isabella',
      country: 'Germany',
    },
  ];

  const reviewCategories = [
    { name: 'Staff', score: '10.0' },
    { name: 'Facilities', score: '10.0' },
    { name: 'Cleanliness', score: '10.0' },
    { name: 'Comfort', score: '10.0' },
    { name: 'Value for money', score: '10.0' },
    { name: 'Location', score: '10.0' },
  ];

  const starRow = (
    <div className="flex items-center justify-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt="Yaunder Place Hiriketiya"
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/55"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 animate-fade-in-up drop-shadow-[0_6px_20px_rgba(0,0,0,1)] [text-shadow:_3px_3px_12px_rgba(0,0,0,1),_0_0_20px_rgba(0,0,0,0.8),_0_0_40px_rgba(0,0,0,0.5)] font-bold">Yaunder Place Hiriketiya</h1>
          <p className="text-xl md:text-2xl text-white mb-8 animate-fade-in-up delay-200 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] [text-shadow:_2px_2px_10px_rgba(0,0,0,1),_0_0_15px_rgba(0,0,0,0.7)] font-semibold">Comfortable Rooms in the Heart of Dickwella, Sri Lanka</p>
          <Link
            href="/booking"
            className="px-8 py-3 bg-[#6B3410] text-white font-medium rounded-md hover:bg-[#5A2810] transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-400 shadow-[0_6px_24px_rgba(107,52,16,0.8)] hover:shadow-[0_8px_32px_rgba(107,52,16,1)] [text-shadow:_1px_1px_4px_rgba(0,0,0,0.5)]"
          >
            Book Your Stay
          </Link>
        </div>
      </section>

      {/* The Essence of Yaunder Place */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2c1810] mb-6 fade-in-up">The Essence of Yaunder Place</h2>
          <p className="text-lg text-[#2c1810]/80 leading-relaxed mb-8 fade-in-up delay-200">
            Welcome to Yaunder Place Hiriketiya, a charming guesthouse in Dickwella offering comfortable, air-conditioned rooms with private bathrooms and balconies. Rated exceptional by our guests (9.7/10), we are located in a very quiet area, just a short walk from Dickwella Beach — the perfect base for a relaxing Sri Lankan escape.
          </p>
          <div className="flex items-center justify-center fade-in-up delay-300">
            <div className="w-24 h-px bg-[#6B3410] relative">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#6B3410] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Comfortable Accommodations */}
            <div className="slide-in-left">
              <h3 className="text-2xl font-serif text-[#2c1810] mb-4">Comfortable Accommodations</h3>
              <p className="text-[#2c1810]/70 leading-relaxed">
                Each room at Yaunder Place offers air-conditioning, a private bathroom, and a balcony. Rooms include a dining area, a work desk, and free toiletries so you can feel right at home.
              </p>
            </div>

            {/* Delicious Breakfast */}
            <div className="slide-in-right">
              <h3 className="text-2xl font-serif text-[#2c1810] mb-4">Delicious Breakfast</h3>
              <p className="text-[#2c1810]/70 leading-relaxed">
                A full English/Irish, vegetarian, or Asian breakfast is available each morning. Our relaxing dining area provides the perfect space to start your day.
              </p>
            </div>

            {/* Lush Garden & Terrace */}
            <div className="slide-in-left delay-200">
              <h3 className="text-2xl font-serif text-[#2c1810] mb-4">Lush Garden & Terrace</h3>
              <p className="text-[#2c1810]/70 leading-relaxed">
                Guests can enjoy our lush garden, relaxing terrace, and free WiFi throughout the property. Additional amenities include a shuttle service and free on-site private parking.
              </p>
            </div>

            {/* Prime Location */}
            <div className="slide-in-right delay-200">
              <h3 className="text-2xl font-serif text-[#2c1810] mb-4">Prime Location</h3>
              <p className="text-[#2c1810]/70 leading-relaxed">
                Dickwella Beach is just a 12-minute walk away. Nearby attractions include Hummanaya Blow Hole (6 km), Hiriketiya Beach (1 km) and Tangalle Lagoon (9.3 mi). Koggala Airport is 32 mi from the property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Rooms */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2c1810] text-center mb-4 fade-in-up">Our Rooms</h2>
          <p className="text-center text-[#2c1810]/70 mb-12 fade-in-up delay-200">
            Spacious, brand-new rooms designed for comfort and relaxation.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Double Room',
                sleeps: 'Sleeps: 2 adults · 1 king bed',
                features: ['Air conditioning', 'Attached bathroom with shower', 'Terrace & view', 'Free WiFi'],
                image: '/rooms/yaunder-place-hiriketiya-room1base.png',
              },
              {
                name: 'Double Room — High Floor',
                sleeps: 'Sleeps: 2 adults · 1 king bed',
                features: ['Private balcony & view', 'Air conditioning', 'Attached bathroom & terrace', 'Free WiFi'],
                image: '/rooms/yaunder-place-hiriketiya-room2iupsatar.png',
              },
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
                    href="/rooms"
                    className="block w-full text-center px-6 py-3 bg-[#6B3410] text-white text-sm font-semibold rounded-lg hover:bg-[#5A2810] transition-all duration-300 transform hover:scale-105"
                  >
                    View Room
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2c1810] text-center mb-12 fade-in-up">Most Popular Facilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { iconUrl: 'https://img.icons8.com/?size=100&id=9922&format=png&color=4a1f0a', title: 'Free WiFi', desc: 'Complimentary high-speed internet throughout the property.' },
              { iconUrl: 'https://img.icons8.com/?size=100&id=dInHI27VNaWN&format=png&color=4a1f0a', title: 'Free Private Parking', desc: 'Free on-site private parking — no reservation needed.' },
              { iconUrl: 'https://img.icons8.com/?size=100&id=PIQrqZ6SK4m6&format=png&color=4a1f0a', title: 'Breakfast', desc: 'Full English/Irish, vegetarian and Asian breakfast options.' },
              { iconUrl: 'https://img.icons8.com/?size=100&id=dTx651hNV0QE&format=png&color=4a1f0a', title: 'Tea/Coffee Maker', desc: 'Tea and coffee making facilities in all rooms.' },
              { iconUrl: 'https://img.icons8.com/?size=100&id=rGyijbwI2sHU&format=png&color=4a1f0a', title: 'Room Service', desc: 'Convenient room service during your stay.' },
              { iconUrl: 'https://img.icons8.com/?size=100&id=31197&format=png&color=4a1f0a', title: 'Non-Smoking Rooms', desc: 'Enjoy a fresh and clean smoke-free environment.' },
              { iconUrl: 'https://img.icons8.com/?size=100&id=11516&format=png&color=4a1f0a', title: 'Private Bathrooms', desc: 'Air-conditioned rooms with private bathroom and shower.' },
              { iconUrl: 'https://img.icons8.com/?size=100&id=3683&format=png&color=4a1f0a', title: 'Shuttle Service', desc: 'Free shuttle service and bicycle parking available.' },
            ].map((amenity, idx) => (
              <div 
                key={idx} 
                className="text-center p-6 bg-white rounded-lg border border-gray-100 scale-in hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                style={{ transitionDelay: `${idx * 0.05}s` }}
              >
                <div className="flex justify-center mb-4 transform transition-transform duration-300 hover:scale-110">
                  <Image
                    src={amenity.iconUrl}
                    alt={amenity.title}
                    width={64}
                    height={64}
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#2c1810] mb-2">{amenity.title}</h3>
                <p className="text-sm text-[#2c1810]/70">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Stay at Yaunder Place */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2c1810] text-center mb-12 fade-in-up">Your Stay at Yaunder Place</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Peaceful & Quiet Retreat',
                desc: 'Set in a very quiet area, our guesthouse offers a spacious and restful escape equipped with brand-new facilities. Perfect for unwinding after a day at the beach.',
                image: '/gallery/yaunder-place-hiriketiya-room2.jpg'
              },
              {
                title: 'Fresh & Delicious Breakfast',
                desc: 'Guests love our tasty breakfast, prepared with care. Enjoy full English/Irish, vegetarian, or Asian choices in a relaxing dining area.',
                image: '/gallery/yaunder-place-hiriketiya-room3.jpg'
              },
              {
                title: 'Balconies & Terraces',
                desc: 'Relax on your private balcony or the shared terrace, surrounded by a lush tropical garden with free on-site parking.',
                image: '/gallery/yaunder-place-hiriketiya-room6.jpg'
              },
              {
                title: 'Beaches Within Minutes',
                desc: 'Dickwella Beach is a 12-minute walk and Hiriketiya Beach just 1 km away. Surf, swim, or enjoy sunset strolls along the coast.',
                image: '/gallery/yaunder-place-hiriketiya4.jpg'
              },
            ].map((activity, idx) => (
              <div 
                key={idx} 
                className="rounded-lg overflow-hidden shadow-sm border border-gray-100 scale-in hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-serif text-[#2c1810] mb-3">{activity.title}</h3>
                  <p className="text-[#2c1810]/70 leading-relaxed">{activity.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guest Reviews */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fef5e7] relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#6B3410]/5 pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#6B3410]/5 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative">
          {/* Header */}
          <div className="text-center mb-14 fade-in-up">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#6B3410] mb-3">Guest Reviews</p>
            <h2 className="text-4xl md:text-5xl font-serif text-[#2c1810] mb-4">What Our Guests Say</h2>
            <p className="text-lg text-[#2c1810]/70 max-w-2xl mx-auto">
              Real guests · Real stays · Real opinions about Yaunder Place Hiriketiya
            </p>
          </div>

          {/* Score + Categories */}
          <div className="grid lg:grid-cols-3 gap-6 mb-12 items-stretch">
            {/* Big score card */}
            <div
              ref={scoreRef}
              className="relative bg-gradient-to-br from-[#6B3410] to-[#4A1F0A] rounded-2xl p-8 text-center text-white shadow-xl scale-in-slow hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col items-center justify-center"
            >
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-white/10 rounded-full pointer-events-none"></div>
              <div className="absolute -bottom-14 -left-14 w-40 h-40 bg-white/5 rounded-full pointer-events-none"></div>
              <p className="text-7xl font-serif font-bold leading-none mb-2">{score.toFixed(1)}</p>
              <p className="text-xl font-semibold mb-3">Rated Exceptional</p>
              <div className="mb-4">{starRow}</div>
              <p className="text-sm text-white/80 mb-5">Based on 4 guest reviews</p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 rounded-full text-sm font-medium backdrop-blur-sm">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Excellent location — rated 10/10
              </div>
            </div>

            {/* Category scores */}
            <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {reviewCategories.map((cat, idx) => (
                <div
                  key={cat.name}
                  className="bg-white rounded-2xl p-5 text-center border border-[#6B3410]/10 scale-in-slow hover:shadow-md hover:border-[#6B3410]/30 transition-all duration-300 transform hover:-translate-y-1"
                  style={{ transitionDelay: `${idx * 0.12}s` }}
                >
                  <p className="text-3xl font-serif font-bold text-[#6B3410] mb-1">{cat.score}</p>
                  <div className="text-xs font-semibold tracking-wide uppercase text-[#2c1810]/70">
                    {cat.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={testimonial.author}
                className="relative bg-white rounded-2xl p-8 shadow-sm border border-[#6B3410]/10 scale-in-slow hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                style={{ transitionDelay: `${idx * 0.2}s` }}
              >
                <div className="absolute -top-5 left-8 w-10 h-10 bg-[#6B3410] rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <div className="mb-4 mt-2 flex">{starRow}</div>
                <p className="text-[#2c1810]/80 leading-relaxed flex-1">&quot;{testimonial.quote}&quot;</p>
                <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[#2c1810]">{testimonial.author}</p>
                    <p className="text-sm text-[#2c1810]/60">{testimonial.country}</p>
                  </div>
                  <span className="w-10 h-10 rounded-full bg-[#fef5e7] text-[#6B3410] font-serif font-bold text-lg flex items-center justify-center">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2c1810] mb-4 fade-in-up">Ready for an Unforgettable Stay?</h2>
          <p className="text-lg text-[#2c1810]/70 mb-8 fade-in-up delay-200">Book your stay at Yaunder Place Hiriketiya and experience exceptional comfort in Dickwella.</p>
          <Link
            href="/booking"
            className="inline-block px-8 py-3 bg-[#6B3410] text-white font-medium rounded-md hover:bg-[#5A2810] transition-all duration-300 transform hover:scale-105 fade-in-up delay-300"
          >
            Book Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

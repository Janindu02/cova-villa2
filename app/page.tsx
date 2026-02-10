'use client';

import { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    '/gallery/802206869.jpg',
    '/gallery/802200016.jpg',
    '/gallery/749346900.jpg',
    '/gallery/749346932.jpg',
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
      '.fade-in-up, .fade-in, .slide-in-left, .slide-in-right, .scale-in'
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
                alt="Cova Villa"
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
          <h1 className="text-6xl md:text-7xl font-serif text-white mb-4 animate-fade-in-up drop-shadow-[0_6px_20px_rgba(0,0,0,1)] [text-shadow:_3px_3px_12px_rgba(0,0,0,1),_0_0_20px_rgba(0,0,0,0.8),_0_0_40px_rgba(0,0,0,0.5)] font-bold">Cova Villa</h1>
          <p className="text-xl md:text-2xl text-white mb-8 animate-fade-in-up delay-200 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] [text-shadow:_2px_2px_10px_rgba(0,0,0,1),_0_0_15px_rgba(0,0,0,0.7)] font-semibold">Where Luxury Meets Serenity in Sri Lanka</p>
          <Link
            href="/booking"
            className="px-8 py-3 bg-[#6B3410] text-white font-medium rounded-md hover:bg-[#5A2810] transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-400 shadow-[0_6px_24px_rgba(107,52,16,0.8)] hover:shadow-[0_8px_32px_rgba(107,52,16,1)] [text-shadow:_1px_1px_4px_rgba(0,0,0,0.5)]"
          >
            Book Your Escape
          </Link>
        </div>
      </section>

      {/* The Essence of Cova Villa */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2c1810] mb-6 fade-in-up">The Essence of Cova Villa</h2>
          <p className="text-lg text-[#2c1810]/80 leading-relaxed mb-8 fade-in-up delay-200">
            Nestled along the pristine shores of Dickwella, Cova Villa offers a unique blend of modern luxury and ancient Sri Lankan charm. Designed for discerning travelers, our villa provides an unparalleled escape where every detail is crafted for your utmost comfort and relaxation.
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
            {/* Spacious Living & Dining */}
            <div className="slide-in-left">
              <h3 className="text-2xl font-serif text-[#2c1810] mb-4">Spacious Living & Dining</h3>
              <p className="text-[#2c1810]/70 leading-relaxed">
                Our open-plan layouts seamlessly blend plush seating areas with dedicated dining spaces. Traditional Sri Lankan accents meet contemporary design, creating an atmosphere of refined elegance. The state-of-the-art kitchen is perfect for those who love to cook, or let our private chef create culinary masterpieces for you.
              </p>
            </div>

            {/* Private Beach Access */}
            <div className="slide-in-right">
              <h3 className="text-2xl font-serif text-[#2c1810] mb-4">Private Beach Access</h3>
              <p className="text-[#2c1810]/70 leading-relaxed">
                Step directly onto your exclusive access to a secluded golden sand beach. This pristine stretch of coastline is ideal for morning strolls, meditations, or simply dipping your toes in the warm Indian Ocean waters. The beach remains largely untouched, offering you a private slice of paradise.
              </p>
            </div>

            {/* Infinity Pool & Gardens */}
            <div className="slide-in-left delay-200">
              <h3 className="text-2xl font-serif text-[#2c1810] mb-4">Infinity Pool & Gardens</h3>
              <p className="text-[#2c1810]/70 leading-relaxed">
                Our stunning infinity pool appears to merge seamlessly with the Indian Ocean, creating an illusion of endless water. Surrounded by lush tropical gardens, private cabanas, and sun loungers, this is your private oasis. Whether you're taking a refreshing dip or simply lounging with a book, this space is designed for pure relaxation.
              </p>
            </div>

            {/* Personalized Service */}
            <div className="slide-in-right delay-200">
              <h3 className="text-2xl font-serif text-[#2c1810] mb-4">Personalized Service</h3>
              <p className="text-[#2c1810]/70 leading-relaxed">
                Our dedicated team is committed to making your stay unforgettable. From our private chef who can prepare meals tailored to your preferences, to our housekeeper ensuring every detail is perfect, and our villa manager ready to assist with any request—we're here to provide a bespoke, hassle-free experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Exquisite Rooms */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2c1810] text-center mb-12 fade-in-up">Our Exquisite Rooms</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Master Ocean Suite */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 scale-in hover:shadow-md transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src="/gallery/749346697.jpg"
                  alt="Master Ocean Suite"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-[#2c1810] mb-4">Master Ocean Suite</h3>
                <ul className="space-y-2 text-[#2c1810]/70">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>King-size bed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Private balcony with ocean views</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>En-suite bathroom with rain shower</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Garden View Retreat */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 scale-in delay-100 hover:shadow-md transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src="/gallery/749346835.jpg"
                  alt="Garden View Retreat"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-[#2c1810] mb-4">Garden View Retreat</h3>
                <ul className="space-y-2 text-[#2c1810]/70">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Queen-size bed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Tranquil garden views</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Dedicated workspace</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Twin Palm Sanctuary */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 scale-in delay-200 hover:shadow-md transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src="/gallery/749346839.jpg"
                  alt="Twin Palm Sanctuary"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-[#2c1810] mb-4">Twin Palm Sanctuary</h3>
                <ul className="space-y-2 text-[#2c1810]/70">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Two single beds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Ocean pool access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Comfortable lounging area</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sunset Loft */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 scale-in delay-300 hover:shadow-md transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src="/gallery/749346878.jpg"
                  alt="Sunset Loft"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-[#2c1810] mb-4">Sunset Loft</h3>
                <ul className="space-y-2 text-[#2c1810]/70">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>King-size bed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Private sunset terrace</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Private seating area</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Villa Amenities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2c1810] text-center mb-12 fade-in-up">Villa Amenities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { iconUrl: 'https://img.icons8.com/?size=100&id=9922&format=png&color=4a1f0a', title: 'High Speed Wi-Fi', desc: 'Complimentary high-speed internet throughout the villa.' },
              { iconUrl: 'https://img.icons8.com/?size=100&id=dInHI27VNaWN&format=png&color=4a1f0a', title: 'Private Parking', desc: 'Secure and convenient on-site parking for your vehicles.' },
              { iconUrl: 'https://img.icons8.com/?size=100&id=11516&format=png&color=4a1f0a', title: 'En-suite Bathrooms', desc: 'Luxurious private bathrooms with premium toiletries.' },
              { iconUrl: 'https://img.icons8.com/?size=100&id=117102&format=png&color=4a1f0a', title: 'Infinity Pool', desc: 'Relax in our stunning infinity pool overlooking the ocean.' },
              { iconUrl: 'https://img.icons8.com/?size=100&id=aCw2sASZmu3W&format=png&color=4a1f0a', title: 'Tropical Gardens', desc: 'Explore lush, landscaped gardens brimming with local flora.' },
              { iconUrl: 'https://img.icons8.com/?size=100&id=PIQrqZ6SK4m6&format=png&color=4a1f0a', title: 'Private Chef', desc: 'Indulge in gourmet meals prepared by our skilled private chef.' },
              { iconUrl: 'https://img.icons8.com/?size=100&id=aY2sjA6XgOTA&format=png&color=4a1f0a', title: 'Luxurious Beds', desc: 'Enjoy ultimate comfort on our premium king and queen-sized beds.' },
              { iconUrl: 'https://img.icons8.com/?size=100&id=31197&format=png&color=4a1f0a', title: 'Excursion Planning', desc: 'Let us organize your adventures to nearby attractions and beyond.' },
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
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#2c1810] mb-2">{amenity.title}</h3>
                <p className="text-sm text-[#2c1810]/70">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Cova Villa Lifestyle */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2c1810] text-center mb-12 fade-in-up">Your Cova Villa Lifestyle</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Morning Serenity & Yoga',
                desc: 'Begin your day with tranquil yoga sessions on the ocean-facing deck, as the sun rises over the horizon, painting the sky with hues of gold and crimson. A perfect start to rejuvenate your mind and body.',
                image: '/gallery/749346900.jpg'
              },
              {
                title: 'Gourmet Dining Experiences',
                desc: 'Savor exquisite Sri Lankan and international cuisine prepared by your private chef. Enjoy personalized menus, fresh local ingredients, and romantic al fresco dining under a canopy of stars.',
                image: '/gallery/749346932.jpg'
              },
              {
                title: 'Relaxation by the Infinity Pool',
                desc: 'Spend leisurely afternoons by the glistening infinity pool, where the water seemingly merges with the ocean. Lounge with a good book, soak up the sun, or simply drift into blissful relaxation.',
                image: '/gallery/749346960.jpg'
              },
              {
                title: 'Sunset Cocktails & Views',
                desc: 'Unwind with handcrafted cocktails on your private balcony, witnessing spectacular sunsets over the Indian Ocean. The vibrant colors and gentle sea breeze create an unforgettable evening ambiance.',
                image: '/gallery/794750935.jpg'
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

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2c1810] mb-4 fade-in-up">Ready for an Unforgettable Stay?</h2>
          <p className="text-lg text-[#2c1810]/70 mb-8 fade-in-up delay-200">Secure your slice of paradise today and experience the magic of Cova Villa.</p>
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

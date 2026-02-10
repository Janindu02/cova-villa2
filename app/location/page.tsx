import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Location() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fef5e7]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-[#2c1810] mb-6">Our Tranquil Location</h1>
          <p className="text-lg text-[#2c1810]/80 leading-relaxed mb-12 max-w-3xl mx-auto">
            Nestled amidst Sri Lanka's pristine coastline, Cova Villa offers both seclusion and easy access to local wonders.
          </p>
          
          {/* Map Card */}
          <div className="bg-[#fef9f3] rounded-xl p-8 max-w-4xl mx-auto shadow-sm border border-gray-100">
            <div className="relative h-96 bg-gradient-to-br from-blue-200 to-blue-400 rounded-lg mb-6 flex items-center justify-center">
              <div className="absolute">
                <div className="w-8 h-8 bg-yellow-400 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            </div>
            <p className="text-lg font-medium text-[#2c1810] mb-4">Cova Villa, Dickwella, Sri Lanka</p>
            <button className="px-6 py-2 border-2 border-[#fef5e7] bg-white text-[#2c1810] rounded-md hover:bg-[#fef5e7] transition-colors">
              Get Directions
            </button>
          </div>
        </div>
      </section>

      {/* Discover Nearby Wonders */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2c1810] text-center mb-4">Discover Nearby Wonders</h2>
          <p className="text-center text-[#2c1810]/70 mb-12">
            Explore the captivating beauty and cultural richness surrounding Cova Villa.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Dickwella Beach',
                desc: 'A tranquil crescent-shaped bay perfect for swimming, sunbathing, and peaceful walks along the shore.',
                image: '/gallery/794751402.jpg'
              },
              {
                title: 'Hummanaya Blowhole',
                desc: "Witness the spectacular natural phenomenon of Sri Lanka's only blowhole, sending geysers high into the air.",
                image: '/gallery/794753384.jpg'
              },
              {
                title: 'Dondra Head Lighthouse',
                desc: 'Visit the southernmost tip of Sri Lanka and its iconic white lighthouse offering panoramic ocean views.',
                image: '/gallery/794753564.jpg'
              },
            ].map((wonder, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <div className="relative h-64">
                  <Image
                    src={wonder.image}
                    alt={wonder.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-[#2c1810] mb-3">{wonder.title}</h3>
                  <p className="text-[#2c1810]/70 mb-4 leading-relaxed">{wonder.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-[#6B3410]">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      <span className="text-sm font-medium">Explore</span>
                    </div>
                    <button className="px-4 py-2 border border-[#fef5e7] text-[#2c1810] rounded-md hover:bg-[#fef5e7] transition-colors text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting to Cova Villa */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2c1810] text-center mb-4">Getting to Cova Villa</h2>
          <p className="text-center text-[#2c1810]/70 mb-12">
            Seamless travel options to make your journey to our villa as relaxing as your stay.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '✈️',
                title: 'Airport Transfer (Colombo)',
                desc: 'Approx. 3 hours drive. Private car or van service available upon request. Advance booking recommended.'
              },
              {
                icon: '🚗',
                title: 'Car Rental',
                desc: 'Various options. Self-drive vehicles can be arranged. International driving permit required.'
              },
              {
                icon: '🛺',
                title: 'Local Tuk-Tuk Service',
                desc: 'On-demand. Convenient for short distances to nearby towns, beaches, and attractions.'
              },
            ].map((option, idx) => (
              <div key={idx} className="text-center p-6 bg-white rounded-lg border border-gray-100">
                <div className="text-5xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-serif text-[#2c1810] mb-3">{option.title}</h3>
                <p className="text-[#2c1810]/70 leading-relaxed">{option.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Visit */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2c1810] text-center mb-4">Ready to Visit?</h2>
          <p className="text-center text-[#2c1810]/70 mb-12">
            Contact us to plan your perfect escape and receive detailed directions.
          </p>
          
          <div className="relative rounded-xl overflow-hidden">
            <div className="relative h-96">
              <Image
                src="/gallery/802200016.jpg"
                alt="Ready to Visit"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10">
                <button className="px-6 py-3 bg-[#6B3410] text-white rounded-md hover:bg-[#5A2810] transition-colors font-medium">
                  Contact Us for Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


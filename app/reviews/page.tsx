import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Reviews() {
  const testimonials = [
    {
      quote: "Everything was perfect. The accommodation is located in a very quiet area, is spacious and equipped with new equipment. It is located just a 15-minute walk from Dickwella Beach. The owners are very kind and attentive. I highly recommend this.",
      author: "Zineb",
      country: "France",
      rating: 5
    },
    {
      quote: "Wonderful stay! Everything is brand new and super spacious. Upon arrival we were warmly welcomed, but due to the somewhat defective English helps the neighbor with translating where necessary. A scooter was arranged and we could have our laundry done.",
      author: "Rietvelt",
      country: "Netherlands",
      rating: 5
    },
    {
      quote: "Everything!! Super new and clean, very very nice couple and delicious breakfast :) Great location, within minutes of the city center, the bus stop and within 15 minutes the beach. Highly recommended!!",
      author: "Isabella",
      country: "Germany",
      rating: 5
    },
  ];

  const categories = [
    { name: 'Staff', score: 10 },
    { name: 'Facilities', score: 10 },
    { name: 'Cleanliness', score: 10 },
    { name: 'Comfort', score: 10 },
    { name: 'Value for money', score: 10 },
    { name: 'Location', score: 10 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-[#2c1810] mb-6">Guest Reviews</h1>
          <p className="text-lg text-[#2c1810]/80">
            Real guests · Real stays · Real opinions about Yaunder Place Hiriketiya
          </p>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center">
              <span className="text-6xl font-serif text-[#2c1810] mr-4">9.7</span>
              <div>
                <div className="text-lg font-semibold text-[#2c1810] mb-1">Rated Exceptional</div>
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="text-lg text-[#2c1810]/70 mb-2">Based on 4 guest reviews</p>
          <p className="text-sm text-[#2c1810]/60">Excellent location — rated 10/10</p>

          {/* Category breakdown */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {categories.map((cat) => (
              <div key={cat.name} className="bg-white border border-gray-100 rounded-lg p-4 text-center">
                <div className="text-2xl font-serif text-[#2c1810] mb-1">{cat.score}.0</div>
                <div className="text-sm text-[#2c1810]/70">{cat.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#2c1810]/80 leading-relaxed mb-4 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <p className="text-sm font-medium text-[#2c1810]">
                  — {testimonial.author} · {testimonial.country}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

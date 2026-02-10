import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Reviews() {
  const testimonials = [
    {
      quote: "An absolute paradise! The stylish design, the breathtaking views, and the impeccable service made our stay truly unforgettable.",
      author: "The Patel Family",
      rating: 5
    },
    {
      quote: "Cova Villa exceeded all our expectations. The private beach access and infinity pool were highlights of our vacation. We'll definitely be back!",
      author: "Sarah & James Mitchell",
      rating: 5
    },
    {
      quote: "The personalized service was outstanding. The private chef prepared the most amazing meals, and the villa manager helped us plan incredible excursions.",
      author: "The Johnson Family",
      rating: 5
    },
    {
      quote: "A perfect blend of luxury and tranquility. Waking up to ocean views every morning was a dream come true.",
      author: "Michael & Emma Chen",
      rating: 5
    },
    {
      quote: "The villa's design is stunning, and the attention to detail is remarkable. Every corner of the property is beautifully maintained.",
      author: "David & Lisa Anderson",
      rating: 5
    },
    {
      quote: "Our yoga sessions on the ocean-facing deck at sunrise were magical. This is truly a special place for relaxation and rejuvenation.",
      author: "Maria Rodriguez",
      rating: 5
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-[#2c1810] mb-6">Guest Testimonials</h1>
          <p className="text-lg text-[#2c1810]/80">
            Hear from our guests about their experiences at Cova Villa
          </p>
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
                  "{testimonial.quote}"
                </p>
                <p className="text-sm font-medium text-[#2c1810]">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Average Rating Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className="flex items-center justify-center mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-12 h-12 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-4xl font-serif text-[#2c1810] mb-2">5.0</p>
            <p className="text-lg text-[#2c1810]/70">Based on {testimonials.length} guest reviews</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


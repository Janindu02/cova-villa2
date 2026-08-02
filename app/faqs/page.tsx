'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do they serve breakfast?",
      answer: "Yes, breakfast options are available. A full English/Irish, vegetarian and Asian breakfast is served each morning in our relaxing dining area. A full English breakfast is included with your room."
    },
    {
      question: "Can I park there?",
      answer: "Yes. Free private parking is available on site — no reservation is needed."
    },
    {
      question: "What are the check-in and check-out times?",
      answer: "Check-in is from 2:00 PM to 11:00 PM, and check-out is from 6:00 AM to 11:00 AM. Early or late check-in/check-out can be requested as a special request when booking."
    },
    {
      question: "Is there an airport shuttle service?",
      answer: "An airport shuttle service is not available, but a free local shuttle service and bicycle parking are provided at the property. Koggala Airport is 51 km away and Mattala Rajapaksa International Airport is 68 km away."
    },
    {
      question: "Is there a restaurant at the property?",
      answer: "There is no restaurant on site, but several excellent restaurants are within easy walking distance, including Priyanka Restaurant (450 m), Garlic Cafe (550 m) and Fish Tales Hiriketiya (600 m)."
    },
    {
      question: "Is there a swimming pool?",
      answer: "No, Yaunder Place Hiriketiya does not have a swimming pool. However, Dickwella Beach (750 m) and Hiriketiya Beach (1 km) are just a short walk away."
    },
    {
      question: "Is there a spa or wellness center?",
      answer: "There is no spa or wellness center at the property, but the quiet surroundings, lush garden and relaxing terrace make it a perfect place to unwind."
    },
    {
      question: "Are there rooms with a private bathroom?",
      answer: "Yes. All room options at Yaunder Place Hiriketiya include a private bathroom. For example, the Double Room and Double Room — High Floor both feature private bathrooms with showers and free toiletries."
    },
    {
      question: "What is the Wi-Fi policy?",
      answer: "WiFi is available in all areas of the property and is free of charge."
    },
    {
      question: "Are children welcome?",
      answer: "Children of all ages are welcome. Children 18 and above will be charged as adults. Cribs and extra beds are not available at this property."
    },
    {
      question: "Are pets allowed?",
      answer: "Pets are not allowed at Yaunder Place Hiriketiya."
    },
    {
      question: "How far is the property from the center of Dickwella and the beach?",
      answer: "Yaunder Place Hiriketiya is 1,000 m from the center of Dickwella, and the nearest beach is only 700 m away. Dickwella Beach is a 12-minute walk from the property."
    },
    {
      question: "What is the cancellation policy?",
      answer: "Free cancellation is available before 6:00 PM on the day of check-in. Cancellation and prepayment policies vary according to accommodation type — you can check the conditions when making your selection."
    },
    {
      question: "Is a credit card needed to book?",
      answer: "No. No credit card is needed — all options are bookable without a credit card, and there is no prepayment. You pay at the property."
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-[#2c1810] mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-[#2c1810]/80">
            Find answers to common questions about your stay at Yaunder Place Hiriketiya
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-medium text-[#2c1810] pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-[#2c1810] flex-shrink-0 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 border-t border-gray-200">
                    <p className="text-[#2c1810]/70 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2c1810] mb-4">Still have questions?</h2>
          <p className="text-lg text-[#2c1810]/70 mb-8">
            Feel free to reach out to us directly. We&apos;re here to help make your stay perfect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:stay@yaunderplace.com"
              className="px-6 py-3 bg-[#6B3410] text-white font-medium rounded-md hover:bg-[#5A2810] transition-colors"
            >
              Email Us
            </a>
            <a
              href="tel:+94771234567"
              className="px-6 py-3 border-2 border-[#6B3410] text-[#6B3410] font-medium rounded-md hover:bg-[#6B3410] hover:text-white transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

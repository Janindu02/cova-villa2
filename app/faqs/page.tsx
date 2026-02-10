'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is included in the villa rental?",
      answer: "The villa rental includes accommodation, daily housekeeping, access to all villa facilities (infinity pool, gardens, private beach access), high-speed Wi-Fi, and basic utilities. Additional services like private chef, airport transfers, and excursion planning can be arranged for an extra fee."
    },
    {
      question: "What is the check-in and check-out time?",
      answer: "Check-in time is 3:00 PM and check-out time is 11:00 AM. Early check-in or late check-out may be available upon request, subject to availability and additional charges."
    },
    {
      question: "Is the villa suitable for children?",
      answer: "Yes, Cova Villa is family-friendly. We have safety measures in place, and children are welcome. The villa features spacious rooms and a safe environment. Please inform us in advance if you're traveling with children so we can make appropriate arrangements."
    },
    {
      question: "Do you provide airport transfers?",
      answer: "Yes, we offer airport transfer services from Colombo International Airport. The journey takes approximately 3 hours. Private car or van service can be arranged upon request. Advance booking is recommended to ensure availability."
    },
    {
      question: "Is there a private chef available?",
      answer: "Yes, we have a skilled private chef available to prepare meals tailored to your preferences. The chef can create both Sri Lankan and international cuisine using fresh local ingredients. This service is available for an additional fee and should be booked in advance."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Cancellations made 30 days or more before the check-in date will receive a full refund minus a 10% processing fee. Cancellations made 14-29 days before check-in will receive a 50% refund. Cancellations made less than 14 days before check-in are non-refundable. We recommend travel insurance for your protection."
    },
    {
      question: "Is Wi-Fi available?",
      answer: "Yes, complimentary high-speed Wi-Fi is available throughout the villa, including all rooms and outdoor areas."
    },
    {
      question: "Can you help organize excursions?",
      answer: "Absolutely! Our villa manager can help organize various excursions to nearby attractions such as Dickwella Beach, Hummanaya Blowhole, Dondra Head Lighthouse, and other local wonders. We can also arrange visits to cultural sites, wildlife parks, and other destinations across Sri Lanka."
    },
    {
      question: "Is parking available?",
      answer: "Yes, we provide secure and convenient on-site parking for your vehicles at no additional charge."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards (Visa, Mastercard, American Express), bank transfers, and PayPal. A deposit is required to confirm your booking, with the balance due before or upon arrival."
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
            Find answers to common questions about your stay at Cova Villa
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
            Feel free to reach out to us directly. We're here to help make your stay perfect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@covavilla.com"
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


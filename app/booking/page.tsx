'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Booking() {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [nights, setNights] = useState(0);
  
  const dailyRate = 250.00;
  const subtotal = dailyRate * nights;
  const taxes = subtotal * 0.15;
  const total = subtotal + taxes;

  const increment = (setter: (val: number) => void, current: number) => {
    setter(Math.max(0, current + 1));
  };

  const decrement = (setter: (val: number) => void, current: number) => {
    setter(Math.max(0, current - 1));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-[#2c1810] mb-4">Plan Your Escape</h1>
          <p className="text-lg text-[#2c1810]/80">
            Ready to experience luxury at Cova Villa? Fill out the form below to inquire about your stay.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Booking Form */}
            <div>
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h2 className="text-2xl font-serif text-[#2c1810] mb-6">Book Your Stay</h2>
                
                <form className="space-y-6">
                  {/* Check-in & Check-out Dates */}
                  <div>
                    <label className="block text-sm font-medium text-[#2c1810] mb-2">
                      Check-in & Check-out Dates
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <svg className="w-5 h-5 text-[#2c1810]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        placeholder="Pick your dates"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B3410] focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Number of Guests */}
                  <div>
                    <label className="block text-sm font-medium text-[#2c1810] mb-4">
                      Number of Guests
                    </label>
                    
                    {/* Adults */}
                    <div className="mb-4">
                      <label className="block text-sm text-[#2c1810]/70 mb-2">Adults</label>
                      <div className="flex items-center space-x-3">
                        <button
                          type="button"
                          onClick={() => decrement(setAdults, adults)}
                          className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                        >
                          <span className="text-lg">−</span>
                        </button>
                        <span className="w-12 text-center font-medium text-[#2c1810]">{adults}</span>
                        <button
                          type="button"
                          onClick={() => increment(setAdults, adults)}
                          className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                        >
                          <span className="text-lg">+</span>
                        </button>
                      </div>
                    </div>

                    {/* Children */}
                    <div className="mb-4">
                      <label className="block text-sm text-[#2c1810]/70 mb-2">Children (2-12 years)</label>
                      <div className="flex items-center space-x-3">
                        <button
                          type="button"
                          onClick={() => decrement(setChildren, children)}
                          className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                        >
                          <span className="text-lg">−</span>
                        </button>
                        <span className="w-12 text-center font-medium text-[#2c1810]">{children}</span>
                        <button
                          type="button"
                          onClick={() => increment(setChildren, children)}
                          className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                        >
                          <span className="text-lg">+</span>
                        </button>
                      </div>
                    </div>

                    {/* Infants */}
                    <div>
                      <label className="block text-sm text-[#2c1810]/70 mb-2">Infants (under 2 years)</label>
                      <div className="flex items-center space-x-3">
                        <button
                          type="button"
                          onClick={() => decrement(setInfants, infants)}
                          className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                        >
                          <span className="text-lg">−</span>
                        </button>
                        <span className="w-12 text-center font-medium text-[#2c1810]">{infants}</span>
                        <button
                          type="button"
                          onClick={() => increment(setInfants, infants)}
                          className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                        >
                          <span className="text-lg">+</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <label className="block text-sm font-medium text-[#2c1810] mb-4">
                      Contact Information
                    </label>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B3410] focus:border-transparent"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B3410] focus:border-transparent"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B3410] focus:border-transparent"
                      />
                      <select className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B3410] focus:border-transparent">
                        <option>Select Country</option>
                        <option>Sri Lanka</option>
                        <option>United States</option>
                        <option>United Kingdom</option>
                        <option>Australia</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-sm font-medium text-[#2c1810] mb-2">
                      Special Requests
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Any specific needs or requests? (e.g., dietary preferences, airport transfer)."
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B3410] focus:border-transparent"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-[#6B3410] text-white font-medium rounded-md hover:bg-[#5A2810] transition-colors"
                  >
                    Send Booking Inquiry
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column - Availability, Chat, Pricing */}
            <div className="space-y-6">
              {/* Availability Calendar */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-serif text-[#2c1810] mb-4">Availability Calendar</h3>
                <div className="flex items-center justify-between mb-4">
                  <button className="p-2 hover:bg-gray-50 rounded">
                    <svg className="w-5 h-5 text-[#2c1810]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <span className="font-medium text-[#2c1810]">February 2026</span>
                  <button className="p-2 hover:bg-gray-50 rounded">
                    <svg className="w-5 h-5 text-[#2c1810]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center">
                  {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                    <div key={day} className="text-sm font-medium text-[#2c1810]/70 py-2">
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: 28 }, (_, i) => i + 1).map((date) => (
                    <div
                      key={date}
                      className={`text-sm py-2 rounded ${
                        date === 7 ? 'bg-[#6B3410] text-white' : 'text-[#2c1810] hover:bg-gray-50'
                      }`}
                    >
                      {date}
                    </div>
                  ))}
                </div>
              </div>

              {/* Prefer to Chat */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#6B3410]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#6B3410]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif text-[#2c1810] mb-2">Prefer to Chat?</h3>
                  <p className="text-sm text-[#2c1810]/70 mb-4">
                    Connect with us instantly on WhatsApp for quick inquiries or special requests.
                  </p>
                  <button className="w-full px-6 py-3 bg-[#6B3410] text-white font-medium rounded-md hover:bg-[#5A2810] transition-colors">
                    Chat on WhatsApp
                  </button>
                </div>
              </div>

              {/* Pricing Summary */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-serif text-[#2c1810] mb-4">Pricing Summary</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#2c1810]/70">Daily Rate:</span>
                    <span className="text-[#2c1810] font-medium">${dailyRate.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#2c1810]/70">Nights:</span>
                    <span className="text-[#2c1810] font-medium">{nights}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#2c1810]/70">Guests (Adults: {adults}, Children: {children}, Infants: {infants}):</span>
                    <span className="text-[#2c1810] font-medium">{adults + children + infants}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#2c1810]/70">Subtotal:</span>
                    <span className="text-[#2c1810] font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#2c1810]/70">Taxes & Fees (15%):</span>
                    <span className="text-[#2c1810] font-medium">${taxes.toFixed(2)}</span>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-[#2c1810]">Estimated Total:</span>
                    <span className="text-lg font-semibold text-[#2c1810]">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


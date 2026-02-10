'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(path);
  };

  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#6B3410] rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <span className="text-2xl font-serif text-[#2c1810]">Cova Villa</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/" 
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-[#6B3410]' : 'text-[#2c1810] hover:text-[#6B3410]'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/villa-details" 
              className={`text-sm font-medium transition-colors ${
                isActive('/villa-details') ? 'text-[#6B3410]' : 'text-[#2c1810] hover:text-[#6B3410]'
              }`}
            >
              Villa Details
            </Link>
            <Link 
              href="/gallery" 
              className={`text-sm font-medium transition-colors ${
                isActive('/gallery') ? 'text-[#6B3410]' : 'text-[#2c1810] hover:text-[#6B3410]'
              }`}
            >
              Gallery
            </Link>
            <Link 
              href="/facilities" 
              className={`text-sm font-medium transition-colors ${
                isActive('/facilities') ? 'text-[#6B3410]' : 'text-[#2c1810] hover:text-[#6B3410]'
              }`}
            >
              Facilities
            </Link>
            <Link 
              href="/location" 
              className={`text-sm font-medium transition-colors ${
                isActive('/location') ? 'text-[#6B3410]' : 'text-[#2c1810] hover:text-[#6B3410]'
              }`}
            >
              Location
            </Link>
            <Link 
              href="/booking" 
              className={`text-sm font-medium transition-colors ${
                isActive('/booking') ? 'text-[#6B3410]' : 'text-[#2c1810] hover:text-[#6B3410]'
              }`}
            >
              Booking
            </Link>
          </nav>

          {/* Book Now Button */}
          <Link
            href="/booking"
            className="hidden md:flex items-center justify-center px-6 py-2.5 bg-[#6B3410] text-white text-sm font-medium rounded-md hover:bg-[#5A2810] transition-colors"
          >
            Book Now
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-[#2c1810]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}


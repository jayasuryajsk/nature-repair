"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="flex items-center justify-between py-3 px-4 md:px-6 bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="flex items-center">
        <Link href="/" className="flex-shrink-0 touch-manipulation">
          <div className="relative w-[200px] h-[36px] flex items-center">
            {/* Logo */}
            <div className="bg-green-600 rounded-full w-8 h-8 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="ml-2 text-gray-900 font-semibold text-lg">NatureRepair.com.au</span>
          </div>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        <Link href="/projects" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Projects</Link>
        <Link href="/invest" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Invest</Link>
        <Link href="/credits" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Credits</Link>
        <Link href="/landholders" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Landholders</Link>
        <Link href="/partners" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Partners</Link>
        <Link href="/impact" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Impact</Link>
        <Link href="/news" className="text-gray-700 hover:text-gray-900 text-sm font-medium">News</Link>
        <Link href="/about" className="text-gray-700 hover:text-gray-900 text-sm font-medium">About</Link>
      </nav>

      <div className="flex items-center space-x-4">
        {/* Desktop action buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button aria-label="Saved projects" className="p-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
          <button aria-label="Notifications" className="p-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <button aria-label="User profile" className="p-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
        
        {/* Mobile menu button - improved for touch */}
        <button 
          className="md:hidden p-2.5 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600 touch-manipulation"
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMobileMenu}>
        <div className="absolute inset-0 bg-black bg-opacity-50" aria-hidden="true"></div>
        <div 
          className={`fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
            <button 
              className="p-2.5 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 touch-manipulation"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="px-2 pt-2 pb-4 space-y-1">
            <Link 
              href="/projects" 
              className="block px-3 py-3.5 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 touch-manipulation"
              onClick={toggleMobileMenu}
            >
              Projects
            </Link>
            <Link 
              href="/invest" 
              className="block px-3 py-3.5 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 touch-manipulation"
              onClick={toggleMobileMenu}
            >
              Invest
            </Link>
            <Link 
              href="/credits" 
              className="block px-3 py-3.5 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 touch-manipulation"
              onClick={toggleMobileMenu}
            >
              Credits
            </Link>
            <Link 
              href="/landholders" 
              className="block px-3 py-3.5 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 touch-manipulation"
              onClick={toggleMobileMenu}
            >
              Landholders
            </Link>
            <Link 
              href="/partners" 
              className="block px-3 py-3.5 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 touch-manipulation"
              onClick={toggleMobileMenu}
            >
              Partners
            </Link>
            <Link 
              href="/impact" 
              className="block px-3 py-3.5 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 touch-manipulation"
              onClick={toggleMobileMenu}
            >
              Impact
            </Link>
            <Link 
              href="/news" 
              className="block px-3 py-3.5 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 touch-manipulation"
              onClick={toggleMobileMenu}
            >
              News
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-3.5 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 touch-manipulation"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
          </div>
          <div className="border-t border-gray-200 pt-4 pb-3">
            <div className="flex items-center px-4 space-x-4">
              <button aria-label="Saved projects" className="p-2.5 touch-manipulation">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>
              <button aria-label="Notifications" className="p-2.5 touch-manipulation">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <button aria-label="User profile" className="p-2.5 touch-manipulation">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 
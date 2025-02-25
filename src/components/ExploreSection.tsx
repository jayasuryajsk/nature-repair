"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function ExploreSection() {
  const [activeCategory, setActiveCategory] = useState('Biodiversity');
  
  const categories = ['Biodiversity', 'Carbon', 'Restoration', 'Water', 'Indigenous'];
  
  return (
    <section className="max-w-7xl mx-auto px-4 py-14">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Explore the Nature Repair Market</h2>
      
      {/* Category Pills - Horizontally scrollable on mobile */}
      <div className="flex overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 pb-2 sm:pb-0 mb-8">
        <div className="flex flex-nowrap gap-2 sm:flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors flex-shrink-0 touch-manipulation ${
                activeCategory === category
                  ? 'bg-green-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Feature Cards - Better spacing on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Biodiversity Credits Card */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow touch-manipulation">
          <div className="p-6">
            <div className="mb-5 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <div className="bg-green-600 h-10 w-10 rounded-full flex items-center justify-center">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.75 17.25a3 3 0 11-6 0 3 3 0 016 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  <path d="M12 3.75a.75.75 0 00-.75.75v6.75h-1.5V4.5a.75.75 0 00-1.5 0v6.75h-1.5a.75.75 0 000 1.5h1.5v6.75a.75.75 0 001.5 0v-6.75h1.5V12a.75.75 0 001.5 0V4.5a.75.75 0 00-.75-.75z" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Understand Biodiversity Credit Values</h3>
            <p className="text-gray-600 mb-4">Learn how biodiversity credits are valued and how they contribute to environmental restoration.</p>
            <Link href="#" className="text-blue-600 font-medium hover:underline touch-manipulation inline-block py-1">Explore credits</Link>
          </div>
        </div>
        
        {/* Investment Card */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow touch-manipulation">
          <div className="p-6">
            <div className="mb-5 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <div className="bg-blue-600 h-10 w-10 rounded-full flex items-center justify-center">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a3.833 3.833 0 001.719-.756c.712-.566 1.112-1.35 1.112-2.178 0-.829-.4-1.612-1.113-2.178-.502-.4-1.102-.647-1.719-.756V8.334c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Invest in Environmental Restoration</h3>
            <p className="text-gray-600 mb-4">Discover opportunities to invest in nature repair projects across Australia.</p>
            <Link href="#" className="text-blue-600 font-medium hover:underline touch-manipulation inline-block py-1">Explore investments</Link>
          </div>
        </div>
        
        {/* Landholders Card */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow touch-manipulation">
          <div className="p-6">
            <div className="mb-5 w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
              <div className="bg-amber-600 h-10 w-10 rounded-full flex items-center justify-center">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
                  <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
                  <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">For Landholders: Generate Biodiversity Credits</h3>
            <p className="text-gray-600 mb-4">Learn how to participate in the nature repair market by restoring ecosystems on your land.</p>
            <Link href="#" className="text-blue-600 font-medium hover:underline touch-manipulation inline-block py-1">Landholder resources</Link>
          </div>
        </div>
      </div>
    </section>
  );
} 
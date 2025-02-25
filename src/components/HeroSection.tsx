"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('Projects');
  
  const tabs = ['Projects', 'Invest', 'Impact', 'Partners', 'Credits'];
  
  return (
    <section className="relative w-full bg-[#f5f7fa] py-8">
      <div className="max-w-screen-xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-md">
          {/* Background Image - Nature scene */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
          <div className="absolute inset-0">
            <Image
              src="/images/hero-background.jpg" 
              alt="Beautiful natural landscape with forest and mountains"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-3xl w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden z-10">
              <h1 className="text-xl font-semibold text-gray-800 text-center py-5">
                Support projects that repair our planet
              </h1>
              
              {/* Tabs - Made scrollable on mobile */}
              <div className="flex overflow-x-auto scrollbar-hide">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`flex-1 py-3 px-4 text-center whitespace-nowrap ${
                      activeTab === tab
                        ? 'text-green-600 border-b-2 border-green-600 font-medium'
                        : 'text-gray-600 hover:text-gray-900 border-b border-gray-200'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              
              {/* Search Form - Improved for mobile touch */}
              <div className="p-5 flex flex-col md:flex-row gap-3">
                <div className="flex-grow relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search by project type, region or ecosystem"
                    className="w-full pl-10 pr-4 py-3.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-base"
                  />
                </div>
                
                <div className="flex gap-2 mt-2 md:mt-0">
                  <button className="px-4 py-3.5 border border-gray-300 bg-white text-gray-700 rounded-md hover:bg-gray-50 flex items-center whitespace-nowrap touch-manipulation">
                    <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                    </svg>
                    Filters
                  </button>
                  <button className="px-6 py-3.5 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 whitespace-nowrap touch-manipulation">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
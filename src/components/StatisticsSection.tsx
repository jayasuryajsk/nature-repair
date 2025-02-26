"use client";

import ScrollingCounter from './ScrollingCounter';

export default function StatisticsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Impact at a Glance</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Track the environmental impact of our credits and projects in real-time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <div className="h-full">
            <ScrollingCounter 
              label="Total Credits Generated" 
              endValue={12500000} 
              backgroundColor="bg-green-600"
              textColor="text-white"
            />
          </div>
          
          <div className="h-full">
            <ScrollingCounter 
              label="Hectares Protected" 
              endValue={1870450} 
              backgroundColor="bg-blue-600"
              textColor="text-white"
            />
          </div>
          
          <div className="h-full">
            <ScrollingCounter 
              label="CO₂ Equivalent" 
              endValue={2568000} 
              suffix="t"
              backgroundColor="bg-teal-600"
              textColor="text-white"
            />
          </div>
          
          <div className="h-full">
            <ScrollingCounter 
              label="Active Projects" 
              endValue={342} 
              backgroundColor="bg-amber-600"
              textColor="text-white"
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Data updated in real-time based on registered projects and verified outcomes.
          </p>
        </div>
      </div>
    </section>
  );
} 
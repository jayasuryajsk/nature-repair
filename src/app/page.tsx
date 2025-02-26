import HeroSection from '../components/HeroSection';
import ExploreSection from '../components/ExploreSection';
import NewsSection from '../components/NewsSection';
import StatisticsSection from '../components/StatisticsSection';

export default function Home() {
  return (
    <div className="bg-[#f5f7f2] pb-16 md:pb-0">
      <HeroSection />
      <div className="py-4"></div> {/* Spacer */}
      <ExploreSection />
      <div className="py-6"></div> {/* Spacer */}
      <StatisticsSection />
      <div className="py-6"></div> {/* Spacer */}
      <NewsSection />
      
      {/* Mobile Bottom Browser Navigation Bar - Matching realestate.com.au design */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Back button */}
          <button className="p-2 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Forward button */}
          <button className="p-2 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Plus button (centered, slightly larger) */}
          <div className="relative -mt-8">
            <button className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center shadow">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
          
          {/* 24 box */}
          <div className="flex items-center justify-center border border-gray-300 rounded px-2.5 py-1.5">
            <span className="text-gray-800 font-medium text-sm">24</span>
          </div>
          
          {/* Three dots menu */}
          <button className="p-2 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

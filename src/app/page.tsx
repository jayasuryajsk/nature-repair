import HeroSection from '../components/HeroSection';
import ExploreSection from '../components/ExploreSection';
import NewsSection from '../components/NewsSection';

export default function Home() {
  return (
    <div className="bg-[#f5f7f2]">
      <HeroSection />
      <div className="py-4"></div> {/* Spacer */}
      <ExploreSection />
      <div className="py-2"></div> {/* Spacer */}
      <NewsSection />
    </div>
  );
}

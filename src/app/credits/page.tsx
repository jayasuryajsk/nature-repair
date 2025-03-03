import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Credits | Nature Repair Market',
  description: 'Learn about biodiversity and carbon credits and how they support environmental restoration under different regulatory frameworks.',
};

export default function CreditsPage() {
  const creditTypes = [
    {
      id: 1,
      title: 'Biodiversity Credits',
      description: 'Support specific ecological outcomes under the Nature Repair Market, focusing on ecosystem restoration and protection of threatened species.',
      icon: '🦘',
      link: '/credits/biodiversity',
    },
    {
      id: 2,
      title: 'Carbon Credits',
      description: 'Regulated under the ACCU scheme, these credits focus on carbon sequestration and storage in natural ecosystems, supporting climate change mitigation.',
      icon: '🌲',
      link: '/credits/carbon',
    },
  ];

  const marketTypes = [
    {
      title: 'Regulated Markets',
      description: 'Government-backed schemes with standardized methodologies and strict verification processes, including the federal Nature Repair Market and ACCU scheme.',
    },
    {
      title: 'Voluntary Markets',
      description: 'Non-regulatory markets where organizations voluntarily invest in environmental outcomes, often for corporate social responsibility goals.',
    },
    {
      title: 'State & Regional Markets',
      description: 'Specialized programs like the Great Barrier Reef credits (water quality) that operate under state or regional frameworks.',
    },
  ];

  const faqItems = [
    {
      question: 'What are biodiversity and carbon credits?',
      answer: 'These are tradable certificates representing verified environmental improvements. Biodiversity credits (Nature Repair Market) focus on ecosystem restoration and protection, while carbon credits (ACCU scheme) represent measurable carbon sequestration or emissions reduction.',
    },
    {
      question: 'How are environmental credits verified?',
      answer: 'Credits are verified through a rigorous process involving baseline assessment, implementation of conservation actions, independent verification by accredited third parties, and ongoing monitoring. Different schemes have different methodologies and requirements.',
    },
    {
      question: 'Can the same land generate both biodiversity and carbon credits?',
      answer: 'Currently, the same area of land can only generate either biodiversity credits or carbon credits, not both simultaneously. The government is developing methodologies to potentially allow for integrated approaches in the future.',
    },
    {
      question: 'What\'s the difference between offsets and insets?',
      answer: 'Offsets compensate for environmental impacts elsewhere, while insets involve reducing one\'s environmental footprint on their own property. Both approaches have different processes and regulatory requirements.',
    },
    {
      question: 'How long do credits last?',
      answer: 'The duration of credits varies by project type and regulatory framework. Some represent permanent protection (e.g., conservation covenants), while others may have defined timeframes. The duration is specified in each credit\'s documentation.',
    },
  ];

  return (
    <main className="flex-1 bg-[#f5f7fa] py-4 sm:py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6 sm:mb-8">
          <div className="relative">
            <div className="relative h-[180px] sm:h-[220px] lg:h-[280px] w-full">
              <Image 
                src="/images/hero-background.jpg"
                alt="Australian biodiversity"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-10 text-white">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">Nature Repair Credits</h1>
              <p className="text-base sm:text-lg max-w-3xl">
                Market-based mechanisms to drive investment in biodiversity and ecosystem restoration.
              </p>
            </div>
          </div>
        </div>
        
        {/* Legal Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 sm:mb-8 text-sm text-amber-800">
          <p className="font-bold mb-2">Important Legal Disclaimer</p>
          <p>The information provided on this website is for general informational purposes only. Environmental markets are complex and subject to specific regulatory requirements. This website does not provide financial advice, and any investment decisions should be made in consultation with qualified financial and legal professionals.</p>
        </div>
        
        {/* Market Frameworks Section */}
        <div className="bg-white rounded-lg shadow-sm p-5 sm:p-8 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Understanding Environmental Markets</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 mb-6">
            {marketTypes.map((market, index) => (
              <div key={index} className="p-4 border border-gray-100 rounded-lg bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{market.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{market.description}</p>
              </div>
            ))}
          </div>
          
          <p className="text-gray-600 text-sm border-t border-gray-100 pt-4">
            Note: Different markets have varying methodologies, verification requirements, and buyer motivations. The information provided here is simplified for clarity. Please consult with specialists for specific project advice.
          </p>
        </div>
        
        {/* How Credits Work */}
        <div className="bg-white rounded-lg shadow-sm p-5 sm:p-8 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">How Nature Repair Credits Work</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            <div className="p-4 border border-gray-100 rounded-lg bg-gray-50">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Assessment & Verification</h3>
              <p className="text-sm sm:text-base text-gray-600">Environmental outcomes are measured and independently verified according to scientific methodologies.</p>
            </div>
            
            <div className="p-4 border border-gray-100 rounded-lg bg-gray-50">
              <div className="text-3xl mb-3">🏷️</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">2. Credit Issuance</h3>
              <p className="text-sm sm:text-base text-gray-600">Verified environmental improvements are converted into tradable credits and listed on our marketplace.</p>
            </div>
            
            <div className="p-4 border border-gray-100 rounded-lg bg-gray-50">
              <div className="text-3xl mb-3">💼</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">3. Market Trading</h3>
              <p className="text-sm sm:text-base text-gray-600">Businesses, investors, and individuals can purchase credits to support biodiversity and environmental restoration.</p>
            </div>
          </div>
        </div>
        
        {/* Types of Credits */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Biodiversity and Carbon Credits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {creditTypes.map((type) => (
              <div key={type.id} className="bg-white rounded-lg shadow-sm p-5 sm:p-6 transition-all hover:shadow-md">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{type.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{type.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">{type.description}</p>
                <Link href={type.link} className="text-green-600 font-medium hover:underline text-sm sm:text-base">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-sm p-5 sm:p-8 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-4 sm:space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 sm:pb-6 last:border-b-0 last:pb-0">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.question}</h3>
                <p className="text-sm sm:text-base text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-green-600 rounded-lg shadow-sm p-5 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Ready to Make a Difference?</h2>
          <p className="text-green-100 mb-5 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Whether you&apos;re a landholder looking to generate credits, or an investor seeking environmental impact,
            the Nature Repair Market has opportunities for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/landholders" className="bg-white text-green-600 py-2 sm:py-3 px-4 sm:px-6 rounded-md hover:bg-gray-100 transition-colors inline-block font-medium text-sm sm:text-base">
              I&apos;m a Landholder
            </Link>
            <Link href="/invest" className="bg-green-700 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-md hover:bg-green-800 transition-colors inline-block font-medium text-sm sm:text-base">
              I&apos;m an Investor
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 
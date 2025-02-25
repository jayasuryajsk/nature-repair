import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Credits | Nature Repair Market',
  description: 'Learn about nature repair credits and biodiversity certificates and how they support environmental restoration.',
};

export default function CreditsPage() {
  const creditTypes = [
    {
      id: 1,
      title: 'Biodiversity Credits',
      description: 'Support specific ecological outcomes like habitat improvement for threatened species or ecosystem restoration.',
      icon: '🦘',
      link: '/credits/biodiversity',
    },
    {
      id: 2,
      title: 'Carbon Credits',
      description: 'Focused on carbon sequestration and storage in natural ecosystems, supporting climate change mitigation.',
      icon: '🌲',
      link: '/credits/carbon',
    },
    {
      id: 3,
      title: 'Water Quality Credits',
      description: 'Support projects that improve water quality in rivers, streams, and coastal areas through reduced pollution and runoff.',
      icon: '💧',
      link: '/credits/water',
    },
    {
      id: 4,
      title: 'Habitat Credits',
      description: 'Specifically designed to protect and enhance habitats for native species, improving biodiversity outcomes.',
      icon: '🦎',
      link: '/credits/habitat',
    },
  ];

  const faqItems = [
    {
      question: 'What are nature repair credits?',
      answer: 'Nature repair credits are tradable certificates representing verified environmental improvements, such as biodiversity enhancement, habitat restoration, or ecological resilience. Each credit represents a specific environmental outcome that has been measured, verified, and registered according to the Nature Repair Market standards.',
    },
    {
      question: 'How are nature repair credits verified?',
      answer: 'Credits are verified through a rigorous process involving baseline assessment, implementation of conservation actions, independent verification by accredited third parties, and ongoing monitoring. This ensures the environmental benefits claimed are real, additional, and maintained over time.',
    },
    {
      question: 'How can I purchase nature repair credits?',
      answer: 'Credits can be purchased directly through our marketplace platform. Buyers can browse available projects, select credits based on location, type, or environmental outcome, and complete transactions securely online. For large purchases, we also offer bespoke brokering services.',
    },
    {
      question: 'How long do credits last?',
      answer: 'The duration of credits varies by project type. Some represent permanent protection (e.g., conservation covenants), while others may have defined timeframes (e.g., 25-100 years). The duration is clearly specified in each credit\'s documentation.',
    },
    {
      question: 'Are nature repair credits tradable?',
      answer: 'Yes, credits can be traded on our marketplace after initial purchase. This secondary market provides liquidity and allows for long-term investment in environmental outcomes. All trades are recorded on our registry to maintain transparency and traceability.',
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
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Types of Nature Repair Credits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
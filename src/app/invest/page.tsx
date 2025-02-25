import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Invest | Nature Repair Market',
  description: 'Invest in environmental restoration projects that generate financial returns while supporting biodiversity across Australia.',
};

export default function InvestPage() {
  const investmentOptions = [
    {
      id: 1,
      title: 'Nature Repair Certificates',
      description: 'Invest directly in verified biodiversity credits that represent measurable ecological improvements.',
      icon: '🌱',
      link: '/invest/certificates',
    },
    {
      id: 2,
      title: 'Carbon Credits',
      description: 'Support nature-based carbon sequestration projects that deliver both climate and biodiversity benefits.',
      icon: '🌍',
      link: '/invest/carbon',
    },
    {
      id: 3,
      title: 'Partnership Programs',
      description: 'Join long-term conservation partnerships with landholders and Indigenous communities.',
      icon: '🤝',
      link: '/invest/partnerships',
    },
    {
      id: 4,
      title: 'Corporate ESG Solutions',
      description: 'Custom investment packages designed to meet corporate environmental and social governance goals.',
      icon: '🏢',
      link: '/invest/corporate',
    },
  ];

  const featuredProjects = [
    {
      id: 1,
      title: 'Great Barrier Reef Water Quality',
      location: 'Queensland',
      description: 'Invest in watershed management projects that reduce pollution runoff to the Great Barrier Reef.',
      returns: 'Biodiversity Credits + Corporate ESG Benefits',
      minInvestment: '$50,000',
      image: '/images/hero-background.jpg',
    },
    {
      id: 2,
      title: 'Tasmanian Old Growth Forest',
      location: 'Tasmania',
      description: 'Support the permanent protection of old-growth forests with high conservation value.',
      returns: 'Carbon Credits + Biodiversity Certificates',
      minInvestment: '$75,000',
      image: '/images/hero-background.jpg',
    },
    {
      id: 3,
      title: 'Murray-Darling Wetland Restoration',
      location: 'New South Wales',
      description: 'Restore critical wetland habitats in Australia&apos;s largest river system, supporting biodiversity and water quality.',
      returns: 'Biodiversity Credits + Water Quality Certificates',
      minInvestment: '$25,000',
      image: '/images/hero-background.jpg',
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
                alt="Nature investment opportunities"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-10 text-white">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">Invest in Nature Repair</h1>
              <p className="text-base sm:text-lg max-w-3xl">
                Support biodiversity while generating financial and environmental returns.
              </p>
            </div>
          </div>
        </div>
        
        {/* Investment Overview */}
        <div className="bg-white rounded-lg shadow-sm p-5 sm:p-8 mb-6 sm:mb-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 text-center">Why Invest in Nature Repair?</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              The Nature Repair Market provides opportunities for investors to support critical environmental 
              restoration projects while potentially earning returns. By investing in biodiversity, you&apos;re helping 
              to protect Australia&apos;s unique ecosystems, support threatened species, and build natural capital for future generations.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg text-center">
                <div className="text-green-600 font-semibold text-lg sm:text-xl mb-1">$180M+</div>
                <div className="text-xs sm:text-sm text-gray-600">Invested to date</div>
              </div>
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg text-center">
                <div className="text-green-600 font-semibold text-lg sm:text-xl mb-1">12-18%</div>
                <div className="text-xs sm:text-sm text-gray-600">Average ROI</div>
              </div>
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg text-center">
                <div className="text-green-600 font-semibold text-lg sm:text-xl mb-1">25+</div>
                <div className="text-xs sm:text-sm text-gray-600">Investment vehicles</div>
              </div>
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg text-center">
                <div className="text-green-600 font-semibold text-lg sm:text-xl mb-1">1.5M+</div>
                <div className="text-xs sm:text-sm text-gray-600">Hectares impacted</div>
              </div>
            </div>
            
            <div className="text-center">
              <Link href="/invest/guide" className="bg-green-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-md hover:bg-green-700 transition-colors inline-block font-medium text-sm sm:text-base">
                Download Investor Guide
              </Link>
            </div>
          </div>
        </div>
        
        {/* Investment Options */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Investment Options</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {investmentOptions.map((option) => (
            <div key={option.id} className="bg-white rounded-lg shadow-sm p-5 sm:p-6 transition-all hover:shadow-md">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{option.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{option.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">{option.description}</p>
              <Link href={option.link} className="text-green-600 font-medium hover:underline text-sm sm:text-base">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
        
        {/* Featured Projects */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Featured Investment Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {featuredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:scale-[1.02]">
              <div className="relative h-40 sm:h-48">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 right-0 bg-green-600 text-white text-xs px-2 py-1 m-2 rounded">
                  Featured
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{project.location}</p>
                <p className="text-gray-700 text-sm sm:text-base mb-3">{project.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Returns:</span>
                    <span className="font-medium text-gray-800">{project.returns}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Minimum:</span>
                    <span className="font-medium text-gray-800">{project.minInvestment}</span>
                  </div>
                </div>
                
                <Link 
                  href={`/invest/projects/${project.id}`} 
                  className="block w-full text-center bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors text-sm sm:text-base"
                >
                  View Opportunity
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="bg-gray-800 rounded-lg shadow-sm p-5 sm:p-8 mb-6 sm:mb-8 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Ready to Discuss Investment Options?</h2>
          <p className="text-gray-300 mb-5 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Our team of investment specialists can help you identify the right nature repair opportunities 
            to meet your financial goals and environmental impact objectives.
          </p>
          <Link href="/invest/contact" className="bg-white text-gray-800 py-2 sm:py-3 px-4 sm:px-6 rounded-md hover:bg-gray-100 transition-colors inline-block font-medium text-sm sm:text-base">
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </main>
  );
} 
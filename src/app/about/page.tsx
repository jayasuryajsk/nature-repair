import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About | Nature Repair Market',
  description: 'Learn about our mission to restore and protect Australia\'s unique biodiversity through market-based solutions.',
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      title: 'Chief Executive Officer',
      bio: 'Former conservation scientist with 15+ years experience in biodiversity policy and environmental markets.',
      image: '/images/hero-background.jpg',
    },
    {
      name: 'Michael Zhang',
      title: 'Chief Technology Officer',
      bio: 'Tech industry veteran bringing digital innovation to environmental markets and conservation finance.',
      image: '/images/hero-background.jpg',
    },
    {
      name: 'Emma Nguyen',
      title: 'Head of Biodiversity Assessment',
      bio: 'Leading ecologist specializing in Australian ecosystems and biodiversity measurement frameworks.',
      image: '/images/hero-background.jpg',
    },
    {
      name: 'James Wilson',
      title: 'Director of Landholder Partnerships',
      bio: 'Agricultural economist with deep experience working with farmers and landholders across Australia.',
      image: '/images/hero-background.jpg',
    },
  ];

  const partners = [
    { name: 'Australian Conservation Foundation', logo: '/images/hero-background.jpg' },
    { name: 'Clean Energy Finance Corporation', logo: '/images/hero-background.jpg' },
    { name: 'Indigenous Land and Sea Corporation', logo: '/images/hero-background.jpg' },
    { name: 'Department of Climate Change, Energy, the Environment and Water', logo: '/images/hero-background.jpg' },
    { name: 'National Farmers Federation', logo: '/images/hero-background.jpg' },
    { name: 'Australian Ethical Investment', logo: '/images/hero-background.jpg' },
  ];

  return (
    <main className="flex-1 bg-[#f5f7fa] py-4 sm:py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6 sm:mb-8">
          <div className="relative">
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] w-full">
              <Image 
                src="/images/hero-background.jpg"
                alt="Australian landscape"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-10 text-white">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">About Nature Repair Market</h1>
              <p className="text-base sm:text-lg max-w-3xl">
                Creating a thriving marketplace for biodiversity and nature restoration across Australia.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Mission */}
        <div className="bg-white rounded-lg shadow-sm p-5 sm:p-8 mb-6 sm:mb-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center">Our Mission</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              The Nature Repair Market was established to address Australia&apos;s biodiversity crisis by creating 
              financial incentives for conservation and restoration activities. We believe that by building a 
              robust marketplace for biodiversity credits, we can mobilize investment at the scale needed to 
              reverse ecosystem decline and protect our unique flora and fauna for future generations.
            </p>
            <p className="text-base sm:text-lg text-gray-600">
              Our platform connects landholders who generate nature repair credits through verified conservation 
              actions with businesses, investors, and individuals seeking to support biodiversity outcomes. By 
              creating transparent standards, rigorous verification processes, and an efficient trading platform, 
              we aim to scale up investment in nature restoration across the continent.
            </p>
          </div>
        </div>
        
        {/* Our Impact */}
        <div className="bg-green-600 rounded-lg shadow-sm p-5 sm:p-8 mb-6 sm:mb-8 text-white">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-center">Our Impact</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center bg-green-700/30 p-4 rounded-lg">
              <div className="text-3xl sm:text-4xl font-bold mb-2">500,000+</div>
              <div className="text-lg sm:text-xl">Hectares Protected</div>
            </div>
            <div className="text-center bg-green-700/30 p-4 rounded-lg">
              <div className="text-3xl sm:text-4xl font-bold mb-2">$180M+</div>
              <div className="text-lg sm:text-xl">Invested in Nature</div>
            </div>
            <div className="text-center bg-green-700/30 p-4 rounded-lg">
              <div className="text-3xl sm:text-4xl font-bold mb-2">30+</div>
              <div className="text-lg sm:text-xl">Threatened Species Supported</div>
            </div>
          </div>
        </div>
        
        {/* Our Team */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Our Leadership Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                <p className="text-green-600 mb-2">{member.title}</p>
                <p className="text-gray-600 text-sm sm:text-base">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Our Partners */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Our Partners</h2>
        <div className="bg-white rounded-lg shadow-sm p-5 sm:p-8 mb-6 sm:mb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-full overflow-hidden">
                  <Image 
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Contact CTA */}
        <div className="bg-white rounded-lg shadow-sm p-5 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Have questions about the Nature Repair Market or interested in joining our team? 
            We&apos;d love to hear from you.
          </p>
          <Link href="/contact" className="bg-green-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-md hover:bg-green-700 transition-colors inline-block font-medium text-sm sm:text-base">
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
} 
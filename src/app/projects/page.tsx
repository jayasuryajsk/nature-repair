import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Projects | Nature Repair Market',
  description: 'Explore and invest in biodiversity and habitat restoration projects across Australia.',
};

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'Great Dividing Range Restoration',
      location: 'Queensland',
      category: 'Forest Conservation',
      hectares: 5000,
      creditsAvailable: 12500,
      image: '/images/hero-background.jpg',
    },
    {
      id: 2,
      title: 'Wetland Habitat Protection',
      location: 'New South Wales',
      category: 'Wetland Restoration',
      hectares: 850,
      creditsAvailable: 3400,
      image: '/images/hero-background.jpg',
    },
    {
      id: 3,
      title: 'Outback Grassland Renewal',
      location: 'South Australia',
      category: 'Grassland Restoration',
      hectares: 12000,
      creditsAvailable: 18000,
      image: '/images/hero-background.jpg',
    },
    {
      id: 4,
      title: 'Alpine Ecosystem Protection',
      location: 'Victoria',
      category: 'Alpine Conservation',
      hectares: 2200,
      creditsAvailable: 6600,
      image: '/images/hero-background.jpg',
    },
    {
      id: 5,
      title: 'Tropical Rainforest Conservation',
      location: 'Queensland',
      category: 'Rainforest Protection',
      hectares: 1800,
      creditsAvailable: 7200,
      image: '/images/hero-background.jpg',
    },
    {
      id: 6,
      title: 'Murray River Floodplain Rehabilitation',
      location: 'Victoria',
      category: 'Floodplain Restoration',
      hectares: 3600,
      creditsAvailable: 7200,
      image: '/images/hero-background.jpg',
    },
  ];

  const projectTypes = [
    'All Projects',
    'Forest Conservation',
    'Wetland Restoration',
    'Grassland Restoration',
    'Coastal Rehabilitation',
    'Alpine Conservation',
  ];

  const locations = [
    'All Locations',
    'Queensland',
    'New South Wales',
    'Victoria',
    'South Australia',
    'Western Australia',
    'Tasmania',
    'Northern Territory',
  ];

  const creditsRanges = [
    'Any Amount',
    '1,000 - 5,000',
    '5,001 - 10,000',
    '10,001 - 20,000',
    '20,001+',
  ];

  return (
    <main className="flex-1 bg-[#f5f7fa] py-4 sm:py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6 sm:mb-8">
          <div className="relative">
            <div className="relative h-[180px] sm:h-[220px] lg:h-[280px] w-full">
              <Image 
                src="/images/hero-background.jpg"
                alt="Nature restoration projects in Australia"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-10 text-white">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">Nature Repair Projects</h1>
              <p className="text-base sm:text-lg max-w-3xl">
                Explore biodiversity and habitat restoration projects across Australia.
              </p>
            </div>
          </div>
        </div>
        
        {/* Filter Section */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Filter Projects</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
              <select className="w-full border border-gray-300 rounded-md py-2 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-600">
                {projectTypes.map((type, index) => (
                  <option key={index}>{type}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <select className="w-full border border-gray-300 rounded-md py-2 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-600">
                {locations.map((location, index) => (
                  <option key={index}>{location}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Credits Available</label>
              <select className="w-full border border-gray-300 rounded-md py-2 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-600">
                {creditsRanges.map((range, index) => (
                  <option key={index}>{range}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="mt-4 flex justify-end">
            <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors text-sm sm:text-base">
              Apply Filters
            </button>
          </div>
        </div>
        
        {/* Projects Grid */}
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Available Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:scale-[1.02]">
              <div className="relative h-40 sm:h-48">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                </div>
                
                <p className="text-gray-600 text-sm sm:text-base mb-3">
                  <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded text-xs mr-2">
                    {project.category}
                  </span>
                  {project.location}
                </p>
                
                <div className="flex justify-between text-sm sm:text-base text-gray-700 mb-4">
                  <div>
                    <span className="font-semibold">{project.hectares.toLocaleString()}</span> hectares
                  </div>
                  <div>
                    <span className="font-semibold">{project.creditsAvailable.toLocaleString()}</span> credits
                  </div>
                </div>
                
                <Link 
                  href={`/projects/${project.id}`} 
                  className="block w-full text-center bg-gray-50 hover:bg-gray-100 text-green-700 font-medium py-2 rounded-md transition-colors border border-gray-200 text-sm sm:text-base"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 
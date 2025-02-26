import Link from 'next/link';
import Image from 'next/image';
import { getProperties } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

export const revalidate = 60; // Revalidate this page every 60 seconds

// Define image type to avoid using any
interface SanityImage {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

// Define the Property type
interface Property {
  _id: string;
  title: string;
  slug: { current: string };
  propertyType: string;
  mainImage: SanityImage;
  location: {
    city?: string;
    state?: string;
  };
  pricePerCredit: number;
  totalCredits: number;
  creditsRemaining: number;
  hectares: number;
}

// This makes the page a dynamic route that accepts search parameters
export const dynamic = 'force-dynamic';

export default async function ProjectsPage(props: any) {
  let properties: Property[] = [];
  // In Next.js 15+, we access searchParams from props
  const { searchParams } = props;
  const searchQuery = searchParams?.search || '';
  
  if (searchQuery) {
    // Fetch filtered results through the search API if search query exists
    try {
      // Use relative URL to avoid NEXT_PUBLIC_BASE_URL issues
      const res = await fetch(`/api/search?query=${encodeURIComponent(searchQuery)}`, {
        cache: 'no-store',
        // Add these headers to help with server-side fetching
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!res.ok) {
        console.error(`Search API error: ${res.status} ${res.statusText}`);
        throw new Error('Failed to fetch search results');
      }
      
      const data = await res.json();
      properties = data.properties;
    } catch (error) {
      console.error('Search error:', error);
      // Fall back to all properties if search fails
      properties = await getProperties() as Property[];
    }
  } else {
    // Get all properties if no search query
    properties = await getProperties() as Property[];
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">
          {searchQuery 
            ? `Search Results for "${searchQuery}"` 
            : 'Available Nature Repair Projects'}
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {searchQuery 
            ? `Found ${properties.length} project${properties.length !== 1 ? 's' : ''} matching your search criteria.`
            : 'Browse our curated collection of nature repair projects across Australia. Invest in biodiversity and help restore our natural ecosystems.'}
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4">
            <select className="rounded-md border-gray-300 py-2 px-3 text-sm">
              <option>All project types</option>
              <option>Forest Conservation</option>
              <option>Wetland Restoration</option>
              <option>Grassland Preservation</option>
              <option>Coastal Ecosystem</option>
              <option>Agricultural Land</option>
              <option>Wildlife Corridor</option>
            </select>
            <select className="rounded-md border-gray-300 py-2 px-3 text-sm">
              <option>All states</option>
              <option>New South Wales</option>
              <option>Victoria</option>
              <option>Queensland</option>
              <option>Western Australia</option>
              <option>South Australia</option>
              <option>Tasmania</option>
              <option>Northern Territory</option>
              <option>Australian Capital Territory</option>
            </select>
            <select className="rounded-md border-gray-300 py-2 px-3 text-sm">
              <option>Any price</option>
              <option>Under $10 per credit</option>
              <option>$10 - $20 per credit</option>
              <option>$20 - $50 per credit</option>
              <option>$50+ per credit</option>
            </select>
          </div>
          <div>
            <select className="rounded-md border-gray-300 py-2 px-3 text-sm">
              <option>Sort: Newest first</option>
              <option>Price: Low to high</option>
              <option>Price: High to low</option>
              <option>Size: Largest first</option>
            </select>
          </div>
        </div>
      </div>

      {/* Properties grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.length > 0 ? (
          properties.map((property) => (
            <Link 
              href={`/projects/${property.slug.current}`} 
              key={property._id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48">
                {property.mainImage ? (
                  <Image
                    src={urlFor(property.mainImage).url()}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No image</span>
                  </div>
                )}
                <div className="absolute top-0 right-0 bg-green-600 text-white px-2 py-1 m-2 rounded text-sm font-medium">
                  {property.propertyType}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-1">{property.title}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  {property.location?.city}, {property.location?.state}
                </p>
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <span className="text-green-600 font-bold">${property.pricePerCredit}</span>
                    <span className="text-gray-600 text-sm"> per credit</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {property.hectares} hectares
                  </div>
                </div>
                <div className="bg-gray-100 rounded-full h-2.5 mb-1">
                  <div 
                    className="bg-green-600 h-2.5 rounded-full" 
                    style={{ width: `${(property.creditsRemaining / property.totalCredits) * 100}%` }}
                  ></div>
                </div>
                <div className="text-sm text-gray-600 flex justify-between">
                  <span>{property.creditsRemaining} credits left</span>
                  <span>{Math.round((property.creditsRemaining / property.totalCredits) * 100)}% remaining</span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-3 text-center py-10">
            <div className="text-gray-500 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">No projects found</h3>
            <p className="text-gray-500">We couldn&apos;t find any projects matching your search criteria.</p>
            <div className="mt-4">
              <Link href="/projects" className="text-green-600 hover:text-green-700 font-medium">
                View all projects
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 
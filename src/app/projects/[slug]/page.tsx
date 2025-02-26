import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPropertyBySlug, getProperties } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import type { PortableTextReactComponents } from '@portabletext/react';

export const revalidate = 60; // Revalidate this page every 60 seconds

// Define types
interface PortableTextBlock {
  _type: string;
  [key: string]: unknown;
}

interface PropertyImage {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
  alt?: string;
}

interface Owner {
  _id: string;
  name: string;
  slug: { current: string };
  image: PropertyImage;
  bio?: PortableTextBlock[];
  email?: string;
  phone?: string;
  website?: string;
  organizationType?: string;
}

interface Property {
  _id: string;
  title: string;
  slug: { current: string };
  propertyType: string;
  mainImage: PropertyImage;
  images: PropertyImage[];
  location: {
    address?: string;
    city?: string;
    state?: string;
    postalCode?: string;
  };
  pricePerCredit: number;
  totalCredits: number;
  creditsRemaining: number;
  hectares: number;
  description: PortableTextBlock[];
  environmentalBenefits: string[];
  certifications: string[];
  publishedAt: string;
  owner: Owner;
}

// Define the expected params structure
export async function generateStaticParams() {
  const properties = await getProperties();
  
  return properties.map((property: { slug: { current: string } }) => ({
    slug: property.slug.current,
  }));
}

// Metadata generation
export async function generateMetadata(props: any) {
  const { params } = props;
  const property = await getPropertyBySlug(params.slug);
  
  if (!property) {
    return {
      title: 'Property Not Found',
      description: 'The requested property could not be found.',
    };
  }
  
  return {
    title: `${property.title} | Nature Repair Market`,
    description: `Invest in ${property.title}, a ${property.propertyType} conservation project with ${property.creditsRemaining} credits remaining.`,
  };
}

// Component for portable text rendering
const ptComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="my-6 relative h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src={urlFor(value).width(800).height(500).url()}
            alt={value.alt || ''}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }) => {
      const rel = (value?.href && !value.href.startsWith('/')) 
        ? 'noreferrer noopener' 
        : undefined;
      
      return (
        <a 
          href={value?.href || '#'} 
          rel={rel} 
          className="text-green-600 hover:underline"
        >
          {children}
        </a>
      );
    },
  },
};

// Main page component
export default async function PropertyPage(props: any) {
  const { params } = props;
  const property = await getPropertyBySlug(params.slug) as Property;
  
  if (!property) {
    notFound();
  }
  
  // Calculate progress percentage
  const progressPercentage = Math.round((property.creditsRemaining / property.totalCredits) * 100);
  
  return (
    <div className="bg-white">
      {/* Hero section with main image */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
        {property.mainImage ? (
          <Image
            src={urlFor(property.mainImage).width(1920).height(1080).url()}
            alt={property.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">No image available</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12 text-white">
          <div className="max-w-7xl mx-auto">
            <span className="inline-block bg-green-600 text-white px-3 py-1 text-sm font-semibold rounded mb-4">
              {property.propertyType.charAt(0).toUpperCase() + property.propertyType.slice(1)} Project
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{property.title}</h1>
            <p className="text-lg md:text-xl mb-2">
              {property.location.city}, {property.location.state}
            </p>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left column - Property details */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              <div className="prose prose-green max-w-none">
                <PortableText value={property.description} components={ptComponents} />
              </div>
            </section>
            
            {/* Gallery */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.images && property.images.map((image, index) => (
                  <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src={urlFor(image).width(600).height(400).url()}
                      alt={`${property.title} - Image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </section>
            
            {/* Environmental Benefits */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Environmental Benefits</h2>
              <ul className="space-y-3">
                {property.environmentalBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>
            
            {/* Certifications */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Certifications & Standards</h2>
              <div className="flex flex-wrap gap-3">
                {property.certifications.map((cert, index) => (
                  <span 
                    key={index} 
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </section>
          </div>
          
          {/* Right column - Action panel */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm sticky top-24">
              {/* Price and credits */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">Price per credit:</span>
                  <span className="text-2xl font-bold text-green-600">${property.pricePerCredit}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-700">Size:</span>
                  <span className="font-semibold">{property.hectares.toLocaleString()} hectares</span>
                </div>
                
                {/* Progress bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Credits remaining</span>
                    <span>{progressPercentage}%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-green-600 h-2.5 rounded-full" 
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span>{property.creditsRemaining.toLocaleString()} available</span>
                    <span>of {property.totalCredits.toLocaleString()} total</span>
                  </div>
                </div>
                
                {/* Action buttons */}
                <div className="space-y-3 mb-6">
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-md transition-colors">
                    Invest Now
                  </button>
                  <button className="w-full bg-white border border-green-600 hover:bg-green-50 text-green-600 font-medium py-3 px-4 rounded-md transition-colors">
                    Save Project
                  </button>
                </div>
              </div>
              
              {/* Project manager */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium mb-4">Project Manager</h3>
                <div className="flex items-center mb-4">
                  {property.owner.image ? (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={urlFor(property.owner.image).width(100).height(100).url()}
                        alt={property.owner.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">{property.owner.name.charAt(0)}</span>
                    </div>
                  )}
                  <div>
                    <h4 className="font-medium">{property.owner.name}</h4>
                    <p className="text-sm text-gray-500">
                      {property.owner.organizationType && (
                        property.owner.organizationType.charAt(0).toUpperCase() + property.owner.organizationType.slice(1)
                      )}
                    </p>
                  </div>
                </div>
                
                {/* Contact info */}
                {(property.owner.email || property.owner.phone || property.owner.website) && (
                  <div className="space-y-2 text-sm">
                    {property.owner.email && (
                      <div className="flex items-center">
                        <svg className="h-4 w-4 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href={`mailto:${property.owner.email}`} className="text-green-600 hover:underline">
                          {property.owner.email}
                        </a>
                      </div>
                    )}
                    {property.owner.phone && (
                      <div className="flex items-center">
                        <svg className="h-4 w-4 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <a href={`tel:${property.owner.phone.replace(/[^0-9+]/g, '')}`} className="text-green-600 hover:underline">
                          {property.owner.phone}
                        </a>
                      </div>
                    )}
                    {property.owner.website && (
                      <div className="flex items-center">
                        <svg className="h-4 w-4 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                        </svg>
                        <a href={property.owner.website} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                          Visit Website
                        </a>
                      </div>
                    )}
                  </div>
                )}
                
                <Link
                  href={`/partners/${property.owner.slug.current}`}
                  className="inline-block mt-4 text-green-600 hover:underline text-sm"
                >
                  View all projects by this organization →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
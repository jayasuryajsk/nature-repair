// Script to add sample data to Sanity
const { createClient } = require('@sanity/client');
require('dotenv').config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2022-03-25',
  token: process.env.SANITY_API_TOKEN, // Need to create this in Sanity and add to .env.local
  useCdn: false,
});

// Sample data for owners
const owners = [
  {
    _type: 'owner',
    name: 'Australian Conservation Foundation',
    slug: { _type: 'slug', current: 'australian-conservation-foundation' },
    organizationType: 'nonprofit',
    email: 'info@acf.org.au',
    phone: '(03) 9345 1111',
    website: 'https://www.acf.org.au',
    bio: [
      {
        _type: 'block',
        style: 'normal',
        _key: 'intro',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'The Australian Conservation Foundation is Australia\'s national environmental organization. We are 700,000 people who speak out, show up and act for a world where forests, rivers, people and wildlife thrive.',
            _key: 'intro-span',
          },
        ],
      },
    ],
  },
  {
    _type: 'owner',
    name: 'Greening Australia',
    slug: { _type: 'slug', current: 'greening-australia' },
    organizationType: 'nonprofit',
    email: 'info@greeningaustralia.org.au',
    phone: '(02) 6202 1600',
    website: 'https://www.greeningaustralia.org.au',
    bio: [
      {
        _type: 'block',
        style: 'normal',
        _key: 'intro',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Greening Australia has been restoring and conserving Australia\'s unique landscapes at scale through collaborative, science-based programs for over 40 years.',
            _key: 'intro-span',
          },
        ],
      },
    ],
  },
];

// Sample data for properties
const properties = [
  {
    _type: 'property',
    title: 'Murray-Darling Basin Wetland Restoration',
    slug: { _type: 'slug', current: 'murray-darling-basin-wetland' },
    propertyType: 'wetland',
    pricePerCredit: 15,
    totalCredits: 10000,
    creditsRemaining: 7500,
    hectares: 2200,
    location: {
      address: 'Riverina Region',
      city: 'Deniliquin',
      state: 'New South Wales',
      postalCode: '2710',
      _type: 'object',
    },
    publishedAt: new Date().toISOString(),
    description: [
      {
        _type: 'block',
        style: 'normal',
        _key: 'description1',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'This project focuses on restoring critical wetland habitats in the Murray-Darling Basin, one of Australia\'s most important ecological systems. The restoration work includes revegetation of native species, water flow management, and invasive species control.',
            _key: 'desc1-span',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'description2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Project Benefits:',
            _key: 'desc2-title',
          },
          {
            _type: 'span',
            marks: [],
            text: ' Improved water quality, enhanced habitat for waterbirds and fish, carbon sequestration, and increased resilience to climate change impacts.',
            _key: 'desc2-span',
          },
        ],
      },
    ],
    environmentalBenefits: [
      'Habitat restoration for 25 threatened species',
      'Carbon sequestration of 15,000 tonnes CO2-e per year',
      'Improved water quality in the Murray-Darling system',
      'Enhanced biodiversity corridors',
      'Reduced soil erosion and salinity',
    ],
    certifications: [
      'Biodiversity Conservation Trust Accredited',
      'Climate Active Carbon Neutral',
      'Environmental Stewardship Program',
    ],
  },
  {
    _type: 'property',
    title: 'Great Dividing Range Forest Conservation',
    slug: { _type: 'slug', current: 'great-dividing-range-forest' },
    propertyType: 'forest',
    pricePerCredit: 22,
    totalCredits: 15000,
    creditsRemaining: 12000,
    hectares: 3500,
    location: {
      address: 'Alpine Region',
      city: 'Bright',
      state: 'Victoria',
      postalCode: '3741',
      _type: 'object',
    },
    publishedAt: new Date().toISOString(),
    description: [
      {
        _type: 'block',
        style: 'normal',
        _key: 'description1',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'This project protects and enhances old-growth forest ecosystems in the Great Dividing Range. The conservation efforts include permanent protection covenants, habitat enhancement, and fire management practices that protect biodiversity while reducing wildfire risks.',
            _key: 'desc1-span',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'description2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Forest Composition:',
            _key: 'desc2-title',
          },
          {
            _type: 'span',
            marks: [],
            text: ' The area includes significant stands of Alpine Ash, Mountain Ash, and Snow Gum forests, supporting complex ecosystems with high biodiversity value.',
            _key: 'desc2-span',
          },
        ],
      },
    ],
    environmentalBenefits: [
      'Protection of habitat for endangered species including Leadbeater\'s Possum',
      'Carbon sequestration of 25,000 tonnes CO2-e per year',
      'Water catchment protection for major river systems',
      'Reduction of erosion and land degradation',
      'Preservation of old-growth forest biodiversity',
    ],
    certifications: [
      'Forest Stewardship Council Certification',
      'National Carbon Offset Standard',
      'Trust for Nature Conservation Covenant',
    ],
  },
];

// Function to upload an asset to Sanity
async function uploadAsset(url, filename) {
  try {
    // Properly fetch the image first
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch image from ${url}: ${response.statusText}`);
    }
    
    // Get the image data as a buffer
    const imageBuffer = await response.arrayBuffer();
    
    // Upload the buffer to Sanity
    return client.assets.upload('image', Buffer.from(imageBuffer), {
      filename: filename
    });
  } catch (error) {
    console.error(`Error uploading asset from ${url}:`, error);
    throw error;
  }
}

// Main function to add data
async function addData() {
  console.log('🌱 Starting to seed data...');
  
  try {
    // Add owners first
    console.log('Adding owners...');
    const ownerResults = await Promise.all(
      owners.map(async (owner) => {
        // Add a placeholder image for each owner
        const ownerImageAsset = await uploadAsset(
          `https://picsum.photos/300/300?random=${Math.floor(Math.random() * 1000)}`, 
          `${owner.slug.current}.jpg`
        );
        
        // Add the image to the owner document
        const ownerWithImage = {
          ...owner,
          image: {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: ownerImageAsset._id
            }
          }
        };
        
        return client.create(ownerWithImage);
      })
    );
    
    console.log(`✅ Added ${ownerResults.length} owners`);
    
    // Add properties and link to owners
    console.log('Adding properties...');
    const propertyResults = await Promise.all(
      properties.map(async (property, index) => {
        // Add a main image for each property
        const mainImageAsset = await uploadAsset(
          `https://picsum.photos/1200/800?random=${Math.floor(Math.random() * 1000)}`, 
          `${property.slug.current}-main.jpg`
        );
        
        // Add additional images
        const additionalImages = await Promise.all([
          uploadAsset(`https://picsum.photos/1200/800?random=${Math.floor(Math.random() * 1000)}`, `${property.slug.current}-1.jpg`),
          uploadAsset(`https://picsum.photos/1200/800?random=${Math.floor(Math.random() * 1000)}`, `${property.slug.current}-2.jpg`),
          uploadAsset(`https://picsum.photos/1200/800?random=${Math.floor(Math.random() * 1000)}`, `${property.slug.current}-3.jpg`),
        ]);
        
        // Associate property with an owner (alternating between the two owners)
        const ownerId = ownerResults[index % 2]._id;
        
        // Add the images to the property document
        const propertyWithImages = {
          ...property,
          mainImage: {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: mainImageAsset._id
            }
          },
          images: additionalImages.map(img => ({
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: img._id
            }
          })),
          owner: {
            _type: 'reference',
            _ref: ownerId
          }
        };
        
        return client.create(propertyWithImages);
      })
    );
    
    console.log(`✅ Added ${propertyResults.length} properties`);
    console.log('🎉 Seeding completed successfully!');
    
  } catch (error) {
    console.error('⚠️ Error seeding data:', error);
  }
}

// Run the seeding function
addData(); 
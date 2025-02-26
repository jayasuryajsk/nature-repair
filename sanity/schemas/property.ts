// Define the structure of a property/project in the Nature Repair marketplace
export default {
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'propertyType',
      title: 'Property Type',
      type: 'string',
      options: {
        list: [
          { title: 'Forest Conservation', value: 'forest' },
          { title: 'Wetland Restoration', value: 'wetland' },
          { title: 'Grassland Preservation', value: 'grassland' },
          { title: 'Coastal Ecosystem', value: 'coastal' },
          { title: 'Agricultural Land', value: 'agricultural' },
          { title: 'Wildlife Corridor', value: 'wildlife' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        { name: 'address', title: 'Address', type: 'string' },
        { name: 'city', title: 'City', type: 'string' },
        { name: 'state', title: 'State', type: 'string' },
        { name: 'postalCode', title: 'Postal Code', type: 'string' },
        { name: 'coordinates', title: 'Coordinates', type: 'geopoint' },
      ],
    },
    {
      name: 'pricePerCredit',
      title: 'Price Per Credit',
      type: 'number',
    },
    {
      name: 'totalCredits',
      title: 'Total Credits Available',
      type: 'number',
    },
    {
      name: 'creditsRemaining',
      title: 'Credits Remaining',
      type: 'number',
    },
    {
      name: 'hectares',
      title: 'Hectares',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'environmentalBenefits',
      title: 'Environmental Benefits',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'certifications',
      title: 'Certifications',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
    {
      name: 'owner',
      title: 'Property Owner',
      type: 'reference',
      to: [{ type: 'owner' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      propertyType: 'propertyType',
      media: 'mainImage',
    },
    prepare({ title, propertyType, media }: any) {
      return {
        title,
        subtitle: propertyType,
        media,
      };
    },
  },
} 
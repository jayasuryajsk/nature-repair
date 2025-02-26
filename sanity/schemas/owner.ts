// Define the structure of a property owner in the Nature Repair marketplace
export default {
  name: 'owner',
  title: 'Property Owner',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
    },
    {
      name: 'organizationType',
      title: 'Organization Type',
      type: 'string',
      options: {
        list: [
          { title: 'Individual', value: 'individual' },
          { title: 'Corporate', value: 'corporate' },
          { title: 'Non-profit', value: 'nonprofit' },
          { title: 'Government', value: 'government' },
          { title: 'Indigenous', value: 'indigenous' },
        ],
      },
    },
    {
      name: 'properties',
      title: 'Properties',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'property' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
} 
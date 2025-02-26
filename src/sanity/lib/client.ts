import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
  // Enable this for debugging in development
  // token: process.env.SANITY_API_TOKEN,
})

// Helper function to fetch all properties
export async function getProperties() {
  return client.fetch(`*[_type == "property"]{
    _id,
    title,
    slug,
    propertyType,
    mainImage,
    location,
    pricePerCredit,
    totalCredits,
    creditsRemaining,
    hectares,
    "owner": owner->{name, slug, image}
  }`)
}

// Helper function to fetch a single property by slug
export async function getPropertyBySlug(slug: string) {
  return client.fetch(
    `*[_type == "property" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      propertyType,
      mainImage,
      images,
      location,
      pricePerCredit,
      totalCredits,
      creditsRemaining,
      hectares,
      description,
      environmentalBenefits,
      certifications,
      publishedAt,
      "owner": owner->{
        _id,
        name,
        slug,
        image,
        bio,
        email,
        phone,
        website,
        organizationType
      }
    }`,
    { slug }
  )
}

// Helper function to fetch all owners
export async function getOwners() {
  return client.fetch(`*[_type == "owner"]{
    _id,
    name,
    slug,
    image,
    organizationType,
    "propertyCount": count(*[_type == "property" && references(^._id)])
  }`)
}

// Helper function to fetch a single owner by slug
export async function getOwnerBySlug(slug: string) {
  return client.fetch(
    `*[_type == "owner" && slug.current == $slug][0]{
      _id,
      name,
      slug,
      image,
      bio,
      email,
      phone,
      website,
      organizationType,
      "properties": *[_type == "property" && references(^._id)]{
        _id,
        title,
        slug,
        propertyType,
        mainImage,
        location,
        pricePerCredit,
        totalCredits,
        creditsRemaining,
        hectares
      }
    }`,
    { slug }
  )
}

import { client } from '@/sanity/lib/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query') || '';
    
    console.log(`Search API called with query: "${query}"`);
    
    // If no query is provided, return an empty result
    if (!query.trim()) {
      return NextResponse.json({ properties: [] });
    }

    // Create a Sanity GROQ query that searches through property titles and descriptions
    const properties = await client.fetch(
      `*[_type == "property" && (
        title match $queryParam ||
        propertyType match $queryParam ||
        location.city match $queryParam ||
        location.state match $queryParam
      )]{
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
      }`,
      { queryParam: `*${query}*` }
    );
    
    console.log(`Search found ${properties.length} results for query: "${query}"`);
    return NextResponse.json({ properties });
  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json(
      { error: 'Failed to perform search', message: error instanceof Error ? error.message : 'Unknown error' }, 
      { status: 500 }
    );
  }
} 
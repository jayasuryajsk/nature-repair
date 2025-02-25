"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function NewsSection() {
  // Mock nature repair news data
  const newsItems = [
    {
      id: 1,
      title: 'Australia launches $1.5bn Nature Repair Market to restore ecosystems',
      image: '/images/news-1.jpg',
      category: 'Market News',
      readTime: '4 mins read',
      link: '#'
    },
    {
      id: 2,
      title: 'Farmers generate first biodiversity credits in NSW pilot program',
      image: '/images/news-2.jpg',
      category: 'Biodiversity',
      readTime: '3 mins read',
      link: '#'
    },
    {
      id: 3,
      title: 'Indigenous groups lead restoration project in Queensland rainforest',
      image: '/images/news-3.jpg',
      category: 'Indigenous',
      readTime: '5 mins read',
      link: '#'
    },
    {
      id: 4,
      title: 'Corporate investors flock to environmental restoration projects',
      image: '/images/news-4.jpg',
      category: 'Investment',
      readTime: '3 mins read',
      link: '#'
    },
    {
      id: 5,
      title: 'New methodology approved for measuring biodiversity outcomes',
      image: '/images/news-5.jpg',
      category: 'Science',
      readTime: '4 mins read',
      link: '#'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-14 bg-white">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Latest nature repair news</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {newsItems.map((item) => (
          <Link key={item.id} href={item.link} className="group flex flex-col">
            <div className="overflow-hidden rounded-lg bg-gray-100 aspect-[4/3] relative mb-3">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center mb-1">
                <span className="text-xs text-gray-500">{item.category}</span>
                <span className="text-xs text-gray-500 mx-1">•</span>
                <span className="text-xs text-gray-500">{item.readTime}</span>
              </div>
              <h3 className="text-sm font-medium text-gray-800 group-hover:text-green-600 line-clamp-2">{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
} 
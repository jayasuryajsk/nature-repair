const fs = require('fs');
const path = require('path');
const https = require('https');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Define placeholder image URLs
const images = [
  {
    name: 'hero-background.jpg',
    url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1920&auto=format&fit=crop',
    description: 'Hero background image of coastal properties'
  },
  {
    name: 'news-1.jpg',
    url: 'https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=600&auto=format&fit=crop',
    description: 'News article thumbnail 1'
  },
  {
    name: 'news-2.jpg',
    url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=600&auto=format&fit=crop',
    description: 'News article thumbnail 2'
  },
  {
    name: 'news-3.jpg',
    url: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=600&auto=format&fit=crop',
    description: 'News article thumbnail 3'
  },
  {
    name: 'news-4.jpg',
    url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=600&auto=format&fit=crop',
    description: 'News article thumbnail 4'
  },
  {
    name: 'news-5.jpg',
    url: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=600&auto=format&fit=crop',
    description: 'News article thumbnail 5'
  }
];

// Download each image
images.forEach(image => {
  const filePath = path.join(imagesDir, image.name);
  
  console.log(`Downloading ${image.name} - ${image.description}...`);
  
  const file = fs.createWriteStream(filePath);
  
  https.get(image.url, response => {
    response.pipe(file);
    
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${image.name}`);
    });
  }).on('error', err => {
    fs.unlink(filePath, () => {}); // Delete the file on error
    console.error(`Error downloading ${image.name}: ${err.message}`);
  });
}); 
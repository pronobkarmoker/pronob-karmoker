import React from 'react';

function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
      title: "Team Project Presentation"
    },
    {
      url: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80",
      title: "IEEE Workshop"
    },
    {
      url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
      title: "Coding Competition"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-center">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
import React from 'react'
import { motion } from "framer-motion";
const images = [
  { id: 1, src: 'src/assets/mountain.jpg', title: 'Mountain Escape' },
  { id: 2, src: 'src/assets/Beach.jpg', title: 'Beach Paradise' },
  { id: 3, src: 'src/assets/Adwenture.jpg', title: 'Urban Adventure' },
  { id: 4, src: 'src/assets/Tropical.jpg', title: 'Tropical Retreat' },
  { id: 5, src: 'src/assets/hill.jpg', title: 'Hill view' },
  { id: 6, src: 'src/assets/SEA.jpg', title: 'Sea drive' },
  { id: 7, src: 'src/assets/jungle.jpg', title: 'Jungle view' },
  { id: 8, src: 'src/assets/Resort.jpg', title: 'Resort Stay' },
  { id: 9, src: 'src/assets/Cities.jpg', title: 'Cities' },
  { id: 10, src: 'src/assets/Park.webp', title: 'Parks' },
  { id: 11, src: 'src/assets/Virtual.webp', title: 'Virtual Reality' },
  { id: 12, src: 'src/assets/trekking.jpg', title: 'Trecking Spot' },
  { id: 13, src: 'src/assets/Shopping.jpg', title: 'Shopping Mall' },
  { id: 14, src: 'src/assets/water.jpg', title: 'Under Water park' },
  { id: 15, src: 'src/assets/Train.webp', title: 'Train Travel' },
  { id: 16, src: 'src/assets/waterfalls.webp', title: 'WaterFalls' },
  { id: 17, src: 'src/assets/amusement.webp', title: 'Amusement Parks' },
  { id: 18, src: 'src/assets/Sunset.jpg', title: 'Sun set' },
  { id: 19, src: 'src/assets/images.jpg', title: 'Food Spot' },
  { id: 20, src: 'src/assets/images (1).jpg', title: 'Dance Bars' },
];

const Gallery = () => {
  return (
     <div className="container mx-auto p-4 bg-gray-200g">
      <motion.h2 
                className="text-4xl font-bold text-gray-800 mb-4 text-center px-5 py-5"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Explore Our Spot
              </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div key={image.id} className="">
            <img
              src={image.src}
              alt={image.title}
              className="rounded-2xl object-cover w-full h-48"
            />
            <p className="text-center font-medium mt-2">{image.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery

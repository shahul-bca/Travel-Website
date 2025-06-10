import React from 'react';
import { FaPlane, FaHotel, FaCar, FaGlobe, FaUmbrellaBeach } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  { icon: <FaPlane className="text-blue-500 text-4xl" />, title: "Flight Booking", description: "Book flights to any destination with ease." },
  { icon: <FaHotel className="text-green-500 text-4xl" />, title: "Hotel Stays", description: "Find the best hotels for your stay." },
  { icon: <FaCar className="text-yellow-500 text-4xl" />, title: "Car Rentals", description: "Affordable car rentals at your fingertips." },
  { icon: <FaGlobe className="text-red-500 text-4xl" />, title: "Tour Packages", description: "Explore curated travel packages." },
  { icon: <FaUmbrellaBeach className="text-purple-500 text-4xl" />, title: "Beach Resorts", description: "Relax at luxurious beach resorts." },
];

const Services = () => {
  return (
    <div className="bg-gray-200 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 flex flex-col items-center bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="animate-pulse">{service.icon}</div>
            <h3 className="mt-4 text-xl font-semibold text-gray-700">{service.title}</h3>
            <p className="mt-2 text-sm text-gray-500 text-center">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;

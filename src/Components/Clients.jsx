import React from 'react';
import { motion } from 'framer-motion';
const testimonials = [
  {
    image: "assets/user1.jpg",
    name: "John Doe",
    quote: "This travel service is amazing! Highly recommend to anyone looking for a seamless experience.",
  },
  {
    image: "assets/user2.jpg",
    name: "Jane Smith",
    quote: "A wonderful experience from start to finish. Excellent customer service!",
  },
  {
    image: "/assets/user3.jpg",
    name: "Carlos Ruiz",
    quote: "They made my trip unforgettable! I will definitely book with them again.",
  },
];
const Clients = () => {
  return (
    <div className="bg-gray-200 py-16 px-6 ">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4  border-blue-400 "
            />
            <h3 className="text-xl font-semibold text-gray-700">{testimonial.name}</h3>
            <p className="mt-2 text-sm text-gray-500">"{testimonial.quote}"</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
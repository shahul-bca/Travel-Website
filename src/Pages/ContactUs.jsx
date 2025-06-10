import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="bg-gray-200 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h2>
        <p className="text-gray-800 mb-8">
          We are here to assist you with all your travel needs. Reach out to us anytime!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white px-8">
          <motion.div 
            className="flex flex-col items-center bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg  "
            whileHover={{ scale: 1.1 }}
          >
            <FaPhoneAlt className="text-3xl mb-4 text-blue-400" />
            <h3 className="text-xl font-semibold mb-2 text-green-500">Call Us</h3>
            <p className="text-gray-800 font-bold">+1 234 567 890</p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.1 }}
          >
            <FaEnvelope className="text-3xl mb-4 text-rose-300" />  
            <h3 className="text-xl font-semibold mb-2 text-red-400">Email Us</h3>
            <p className="text-gray-800 font-bold">contact@travelagency.com</p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.1 }}
          >
            <FaMapMarkerAlt className="text-3xl mb-4 text-green-500" />
            <h3 className="text-xl font-semibold mb-2 text-orange-300">Visit Us</h3>
            <p className="text-gray-800 font-bold">123 Travel St., Adventure City</p>
          </motion.div>
        </div>

        <form className="mt-12 bg-white rounded-lg shadow-lg p-8  space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4   ">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <motion.button
            type="submit"
            className="w-full bg-blue-400 text-white py-3 rounded-lg font-bold shadow-lg hover:bg-blue-500 focus:outline-none"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;

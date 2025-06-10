import React from "react";
import { motion } from "framer-motion";
import Destinations from "../Components/Destinations";
import Serves from '../Components/Serves'
import Clients from "../Components/Clients";


const Home = () => {
  return (
    <>
    <section className="bg-gray-200">
    <div
      className="relative bg-cover h-screen bg-center"
      style={{ backgroundImage: "url('/src/assets/homeBg.jpg')" }} 
    >
      <div className="flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Investing in Your Journey
        </motion.h1>
        <motion.p
          className="text-lg text-gray-800 max-w-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Life is a collective memory. Expand it and explore
        </motion.p>
        <motion.button
          className="mt-6 px-6 py-2 bg-transparent text-gray-800 font-semibold rounded-lg outline-2 shadow-lg hover:bg-gray-50 transition "
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          aria-label="Get started with your journey"
        >
          Get Started
        </motion.button>
      </div>
    </div>
    <Destinations/>
    <Serves />
    <Clients />
   </section>
    </>
  );
  
};

export default Home;



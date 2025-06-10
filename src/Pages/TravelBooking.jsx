import React, { useState } from "react";
import { motion } from "framer-motion";
const TravelBooking = () => {
  const [bookingData, setBookingData] = useState({
    destination: "",
    travelDate: "",
    travelers: "",
    travelClass: "Economy",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details: ", bookingData);
    alert("Booking Submitted!");
  };

  return (
    <>
    <section className="bg-gray-200 py-20">
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10 px-20 py-20">
       <motion.h2 
                className="text-4xl font-bold text-gray-800 mb-4 text-center px-5 py-5"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Booking
              </motion.h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="destination">
            Destination
          </label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={bookingData.destination}
            onChange={handleChange}
            placeholder="Enter destination"
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="travelDate">
            Travel Date
          </label>
          <input
            type="date"
            id="travelDate"
            name="travelDate"
            value={bookingData.travelDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="travelers">
            Number of Travelers
          </label>
          <input
            type="number"
            id="travelers"
            name="travelers"
            value={bookingData.travelers}
            onChange={handleChange}
            placeholder="Enter number"
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="travelClass">
            Travel Class
          </label>
          <select
            id="travelClass"
            name="travelClass"
            value={bookingData.travelClass}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200"
          >
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
            <option value="First Class">First Class</option>
          </select>
        </div>
        <motion.button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
           whileHover={{ scale: 1.05 }}
        >
          Submit Booking
        </motion.button>
      </form>
    </div>
    </section>
    </>
  );
};

export default TravelBooking;

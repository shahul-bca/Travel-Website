import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-5 px-5">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-center md:text-left">
          <h4 className="text-2xl font-light">
            Make<span className="text-red-400 font-bold">My</span>
            <span className="text-white font-extrabold">Trip</span>
          </h4>

          <p>Your trusted partner for seamless travel experiences.</p>
          <div className=" text-gray-500 text-sm mt-5">
            &copy; {new Date().getFullYear()} TravelCo. All Rights Reserved.
          </div>
        </div>

        <div className="text-center md:text-right">
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex justify-center md:justify-end space-x-4">
            <a
              href="#"
              className="text-gray-200 hover:text-blue-400 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-gray-200 hover:text-blue-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-gray-200 hover:text-blue-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-gray-200 hover:text-blue-400 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

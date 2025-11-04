import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 bg-gray-800 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <h1 className="text-2xl font-light">Make 
            <span className="text-red-400 font-bold">My</span><span className="text-white font-extrabold">trip</span>
          </h1>
          {/* Hamburger Menu (Small Screens) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Navigation Links (Visible on Medium+ Screens) */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link to="/gallery" className="hover:text-gray-300 transition-colors">
              Gallery
            </Link>
            <Link to="/contact" className="hover:text-gray-300 transition-colors">
              Contact
            </Link>
            <Link to="Signup" className="hover:text-gray-300 transition-colors">
              <button className="bg-blue-500 h-8 w-20 rounded-sm ">Booking</button>
            </Link>
          </div>
        </div>

        {/* Dropdown Menu for Mobile */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="space-y-4 mt-4 text-center">
            <Link
              to="/"
              className="block text-white hover:bg-gray-700 py-2 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/gallery"
              className="block text-white hover:bg-gray-700 py-2 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="block text-white hover:bg-gray-700 py-2 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/signup"
              className="block text-white hover:bg-gray-700 py-2 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Booking
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

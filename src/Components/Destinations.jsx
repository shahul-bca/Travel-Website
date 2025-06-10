import React from "react";

const destinations = [
  {
    image: "src/assets/destination1.jpg",
    title: "India",
    disc: "The Taj Mahal is a white marble mausoleum in Agra, India.",
  },
  {
    image: "src/assets/destination2.jpg",
    title: "UAE",
    disc: "The UAE consists of seven emirates and was founded on 2 December 1971 as a federation.",
  },
  {
    image: "src/assets/destination3.jpg",
    title: "Poland",
    disc: "Poland, officially the Republic of Poland, is a country in Central Europe.",
  },
  {
    image: "src/assets/destination4.avif",
    title: "Malaysia",
    disc: "Malaysia is a country in Southeast Asia.",
  },
  {
    image: "src/assets/destination5.avif",
    title: "England",
    disc: "England is the largest of the four constituent countries of the United Kingdom",
  },
  {
    image: "src/assets/destination6.jpg",
    title: "Australia",
    disc: "Australia is a federal parliamentary democracy and constitutional monarchy comprising six states and ten territories.",
  }
];

const Destinations = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h3 className="text-3xl font-bold text-center mb-8">Popular Destinations</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((city, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden  hover:shadow-lg"
          >
            <img
              className="w-full h-48 object-cover transform transition-transform hover:scale-110"
              src={city.image}
              alt={city.title}
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold mb-2">{city.title}</h4>
              <p className="text-sm text-gray-600">{city.disc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;

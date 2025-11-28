// ~~~{"id":"86214","variant":"standard","title":"Horizontal scroll ExploreDestinations"}
import React from "react";

const destinations = [
  { name: "INDIA", img: "/Images/home26.avif" },
  { name: "NEPAL", img: "/Images/home18.avif" },
  { name: "BHUTAN", img: "/Images/home19.avif" },
  { name: "BANGLADESH", img: "/Images/home20.avif" },
  { name: "SRI LANKA", img: "/Images/home21.avif" },
  { name: "TIBET", img: "/Images/home22.avif" },
  { name: "NORTH INDIA", img: "/Images/home23.avif" },
  { name: "SOUTH INDIA", img: "/Images/home24.avif" },
  { name: "WEST INDIA", img: "/Images/home25.avif" },
];

const ExploreDestinations = () => {
  return (
    <div className=" py-16 px-5">
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <h2 className="text-4xl font-bold text-teal-600 text-center">
          Explore Our Destinations
        </h2>
        <div className="w-24 h-1 bg-teal-300 mt-3 mb-6 mx-auto"></div>

        {/* TEXT */}
        <p className=" leading-relaxed text-[17px] text-center max-w-3xl mx-auto mb-8">
          Incredible India, the most glorious land of the east, the country that
          is known for its diverse culture, old age history, rich flora and
          fauna, simple lifestyle, welcoming people and intensely beautiful
          landscapes cannot be seen in a single trip.
          <br />
          <br />
          The vast country with 29 states and 7 union territories has something
          new and different to offer in every tour. Every tour package leaves an
          unforgettable spell on traveller’s mind.
          <br />
          <br />
          Be it North India or South India, India is full of remarkable tourist
          places such as Rajasthan, Kerala, Goa, Varanasi, Taj Mahal, Madhya
          Pradesh, Gujarat, Odisha and more. Neighbouring countries include
          Nepal, Bhutan, Tibet, Sri Lanka and Bangladesh.
        </p>

        {/* HORIZONTAL SCROLLER */}
        <div className="flex space-x-4 overflow-x-auto mt-10 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-teal-400 scrollbar-track-gray-700">
          {destinations.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 md:w-72 rounded-lg snap-center"
            >
              {/* Image Box */}
              <div className="h-40 md:h-48 rounded-lg overflow-hidden relative group shadow-lg">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                />
              </div>

              {/* Name Below Image */}
              <p className="text-center mt-2 text-teal-600 font-semibold text-lg tracking-wide">
                {item.name}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <a
            href="#"
            className="text-teal-400 font-semibold text-lg hover:underline"
          >
            [ view all destinations ]
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExploreDestinations;

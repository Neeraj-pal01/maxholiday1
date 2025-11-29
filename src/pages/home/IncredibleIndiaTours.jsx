import React from "react";
import { MapPin, Scissors, Users } from "lucide-react";
import { motion } from "framer-motion";


const IncredibleIndiaTours = () => {
  const images = [
    "/Images/home14.avif",
    "/Images/home15.avif",
    "/Images/home17.avif",
    "/Images/home16.avif",
  ];

  return (
    <div
      className="mx-auto px-4 py-16 rounded-xl"
      style={{
        background: "linear-gradient(to bottom, #e6f7f7, #f4ffff)",
      }}
    >
      {/* TEXT CONTENT TOP */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-600">
        Incredible India Tours
      </h2>

      <div className="w-24 h-1 bg-amber-200 mx-auto mt-4 mb-8"></div>

      <p className="text-center text-lg text-black leading-relaxed max-w-4xl mx-auto">
        When you think about travelling to India, the first thing which comes in
        your mind is its rich culture, age old history and the perfect mix of
        varying topographies...
      </p>

      <div className="text-center mt-3">
        <a
          href="#"
          className="text-amber-600 font-semibold hover:underline text-lg"
        >
          [ View Tours .. ]
        </a>
      </div>

      {/* 📸 IMAGE SCROLLER */}
      <div className="mt-10 overflow-x-auto flex gap-5 py-4 scrollbar-hide">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="tour"
            className="w-[350px] h-[220px] object-cover rounded-xl shadow-md flex-shrink-0"
          />
        ))}
      </div>

      {/* 3 FEATURE BOXES */}
      <div className="grid md:grid-cols-3 gap-10 mt-16">
        {/* Box 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-7 h-7 text-amber-700" />
            <h3 className="text-xl font-semibold text-amber-700">
              500+ Tours Packages
            </h3>
          </div>
          <p className="text-black leading-relaxed text-justify">
            We know it is not an easy task for you to plan a perfect holiday. At
            Max Holidays we bring for you hundreds of handcrafted pre-designed
            private tours to India & its neighbouring countries.Select a tour
            package from the list & write to us for price quotations, bookings
            or any alterations. We love to work for you
          </p>
          <a href="#" className="text-amber-600 font-semibold mt-3 inline-block">
            All India tour packages »
          </a>
        </motion.div>

        {/* Box 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Scissors className="w-7 h-7 text-amber-700" />
            <h3 className="text-xl font-semibold text-amber-700">
              On Demand Customisation
            </h3>
          </div>
          <p className="text-gray-700 leading-relaxed text-justify">
            Travelling to Indian Subcontinent and not sure to book a readymade
            tour? Our travel experts are eager to offer you suggestions and
            tailor made your holidays exactly as per your taste. Share your
            interest with us and stay relaxed when we design your perfect tour
            to India or its neighbouring countries.
          </p>
          <a href="#" className="text-amber-600 font-semibold mt-3 inline-block">
            Get more travel ideas »
          </a>
        </motion.div>

        {/* Box 3 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-7 h-7 text-amber-700" />
            <h3 className="text-xl font-semibold text-amber-700">
              20 Years of Excellence
            </h3>
          </div>
          <p className="text-gray-700 leading-relaxed text-justify">
            Since 2004 Max Holidays has been setting new benchmarks in customer
            services. Over 78,000 tour packages have been sold and over seven
            million travellers have been benefitted with India travel
            information and guidance. one of the top travel experiences followed
            by everlasting memories
          </p>
          <a href="#" className="text-amber-600 font-semibold mt-3 inline-block">
            India group tours »
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default IncredibleIndiaTours;

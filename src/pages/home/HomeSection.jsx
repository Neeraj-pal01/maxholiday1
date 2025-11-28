import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sliderImages = [
  "/Images/home1.avif",
  "/Images/home2.avif",
  "/Images/home4.avif",
];

const bottomImages = [
  {
    title: (
      <>
        Taj Mahal Palace Mumbai <span className="text-teal-600">India</span>
      </>
    ),
    desc: "The iconic luxury hotel located beside the Gateway of India in Mumbai.",
    img: "/Images/home9.avif",
  },
  {
    title: (
      <>
        Lotus Temple Delhi <span className="text-teal-600">India</span>
      </>
    ),
    desc: "A stunning Baháʼí House of Worship known for its flower-like architecture.",
    img: "/Images/home8.webp",
  },
  {
    title: (
      <>
      Sanchi Stupa <span className="text-teal-600">Madhya Pradesh</span>
      </>
    ),
    desc: "A UNESCO World Heritage Site famous for its monumental chariot design.",
    img: "/Images/home12.webp",
  },
  {
    title: (
      <>
        Hawa Mahal Jaipur <span className="text-teal-600">India</span>
      </>
    ),
    desc: "The Palace of Winds, an iconic landmark in the heart of Jaipur.",
    img: "/Images/home6.avif",
  },
];


// ⭐ NEW 3 CARD SECTION
const tripleImages = [
  {
    title: (
      <>
        Champaner Archaeological Park <span className="text-teal-600">Gujarat</span>
      </>
    ),
    desc: "A UNESCO heritage site known for its ancient mosques and historic structures.",
    img: "/Images/home10.webp",
  },
  {
    title: (
      <>
        Nainital Boat Lake View <span className="text-teal-600">Uttarakhand</span>
      </>
    ),
    desc: "A peaceful lakeside destination famous for boating and mountain views.",
    img: "/Images/home11.avif",
  },
  {
    title: (
      <>
        India Gate New Delhi <span className="text-teal-600">India</span>
      </>
    ),
    desc: "A war memorial and one of the most iconic landmarks of New Delhi.",
    img: "/Images/home3.avif",
  },
];


export default function HomeSection() {
  const [current, setCurrent] = useState(0);

  // Auto Slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-4 md:px-10 py-10 space-y-10">

      {/* ---------------- SLIDER ---------------- */}
      <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden rounded-2xl shadow-lg">
        {sliderImages.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: current === index ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          />
        ))}

        {/* ---- Slider Dots ---- */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
          {sliderImages.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index ? "bg-white scale-110 shadow" : "bg-white/40"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* ---------------- 4 CATEGORIES SECTION ---------------- */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {bottomImages.map((item, i) => (
          <motion.div
            key={i}
            className="relative h-[220px] rounded-xl overflow-hidden group shadow-md cursor-pointer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={item.img}
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>
            <h2 className="absolute bottom-4 left-4 text-white font-bold text-md drop-shadow-xl">
              {item.title}
            </h2>
          </motion.div>
        ))}
      </div>

      {/* ---------------- 3-IMAGE NEW SECTION ---------------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {tripleImages.map((item, index) => (
          <motion.div
            key={index}
            className="relative h-[230px] rounded-xl overflow-hidden group shadow-lg cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={item.img}
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>
            <h3 className="absolute bottom-4 left-4 text-white text-md font-semibold drop-shadow-xl">
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>

    </div>
  );
}

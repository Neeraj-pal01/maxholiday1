import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sliderImages = [
  "/Images/home31.avif",
  "/Images/home29.avif",
  "/Images/home33.avif",
];

const bottomImages = [
  {
    title: (
      <>
        Taj Mahal Palace Mumbai <span className="text-amber-600">India</span>
      </>
    ),
    desc: "The iconic luxury hotel located beside the Gateway of India in Mumbai.",
    img: "/Images/home9.avif",
  },
  {

    title: (
      <>
        Champaner Archaeological Park{" "}
        <span className="text-amber-600">Gujarat</span>
      </>
    ),
    desc: "A stunning Baháʼí House of Worship known for its flower-like architecture.",
    img: "/Images/home10.webp",
  },
  {
    title: (
      <>
        India Gate New Delhi <span className="text-amber-600">India</span>
      </>
    ),
    desc: "A UNESCO World Heritage Site famous for its monumental chariot design.",
    img: "/Images/home3.avif",
  },
  {
    title: (
      <>
        Hawa Mahal Jaipur <span className="text-amber-600">India</span>
      </>
    ),
    desc: "The Palace of Winds, an iconic landmark in the heart of Jaipur.",
    img: "/Images/home6.avif",
  },
  {
    title: (
      <>
        Charminar, Hyderabad <span className="text-amber-600">India</span>
      </>
    ),
    desc: "Charminar is the iconic symbol of Hyderabad, known for its stunning four minarets ",
    img: "/Images/home13.avif",
  },
];

// ⭐ NEW 3 CARD SECTION
const tripleImages = [
  {
    title: (
      <>
        Lotus Temple Delhi <span className="text-amber-600">India</span>
      </>
    ),
    desc: "A UNESCO heritage site known for its ancient mosques and historic structures.",
    img: "/Images/home8.webp",
  },
  {
    title: (
      <>
        Nainital Boat Lake View{" "}
        <span className="text-amber-600">Uttarakhand</span>
      </>
    ),
    desc: "A peaceful lakeside destination famous for boating and mountain views.",
    img: "/Images/home11.avif",
  },
  {
    title: (
      <>
        Sanchi Stupa <span className="text-amber-600">Madhya Pradesh</span>
      </>
    ),
    desc: "A war memorial and one of the most iconic landmarks of New Delhi.",
    img: "/Images/home12.webp",
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
    <div className="">
      {/* ---------------- SLIDER ---------------- */}
      <div className="relative hero-parallax top-0 w-full h-[75vh] md:h-[110vh] overflow-hidden shadow-lg">

        {sliderImages.map((img, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${img})`,
              opacity: current === index ? 1 : 0
            }}
            initial={{ opacity: 0, scale: 1 }}
            animate={{
              opacity: current === index ? 1 : 0,
              scale: current === index ? 1.08 : 1
            }}
            transition={{ duration: 1, ease: "easeOut" }}
          ></motion.div>
        ))}

        {/* DARK OVERLAY */}
        <motion.div
          className="absolute inset-0 bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 1.2 }}
        ></motion.div>

        {/* TEXT CONTENT */}
        <div className="absolute inset-0 flex mt-10 md:mt-0 flex-col justify-center items-center space-y-6 text-center px-4 z-20">
          <motion.h1
            key={current}
            className="text-white text-3xl md:text-5xl font-bold drop-shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Discover Incredible Places
          </motion.h1>
          <div className="w-full flex justify-center z-40 relative px-4">
            <div className="bg-white shadow-xl rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 w-full max-w-6xl">

              {/* Location */}
              <div className="flex items-center justify-between w-full md:w-auto bg-gray-100 px-5 py-3 rounded-xl cursor-pointer hover:bg-gray-200">
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-location-dot text-gray-600"></i>
                  <span className="text-gray-700 font-medium">Location</span>
                </div>
                <i className="fa-solid fa-chevron-down text-gray-500"></i>
              </div>

              {/* Trip Types */}
              <div className="flex items-center justify-between w-full md:w-auto bg-gray-100 px-5 py-3 rounded-xl cursor-pointer hover:bg-gray-200">
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-person-hiking text-gray-600"></i>
                  <span className="text-gray-700 font-medium">Trip Types</span>
                </div>
                <i className="fa-solid fa-chevron-down text-gray-500"></i>
              </div>

              {/* Days */}
              <div className="flex items-center justify-between w-full md:w-auto bg-gray-100 px-5 py-3 rounded-xl cursor-pointer hover:bg-gray-200">
                <div className="flex items-center gap-3">
                  <i className="fa-regular fa-clock text-gray-600"></i>
                  <span className="text-gray-700 font-medium">0 Days - 7 Days</span>
                </div>
                <i className="fa-solid fa-chevron-down text-gray-500"></i>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between w-full md:w-auto bg-gray-100 px-5 py-3 rounded-xl cursor-pointer hover:bg-gray-200">
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-image text-gray-600"></i>
                  <span className="text-gray-700 font-medium">$11 - $450</span>
                </div>
                <i className="fa-solid fa-chevron-down text-gray-500"></i>
              </div>

              {/* Search Button */}
              <button className="bg-amber-600 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-white border border-gray-500 hover:text-amber-600 transition">
                SEARCH <i className="fa-solid fa-magnifying-glass"></i>
              </button>

            </div>
          </div>


          {/* <motion.p
            key={`sub-${current}`}
            className="text-white text-lg md:text-xl mt-3 drop-shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Experience unforgettable adventures.
          </motion.p> */}
        </div>

      </div>




      {/* ---------------- 4 CATEGORIES SECTION ---------------- */}
      <div className="w-full flex justify-between relative mt-5 md:-mt-20 z-30  items-center gap-4 px-4 md:px-10 flex-wrap md:flex-nowrap">
        {bottomImages.map((item, i) => (
          <motion.div
            key={i}
            className={`
        relative overflow-hidden group shadow-md cursor-pointer rounded-xl 
        transition-all duration-500

        /* 📱 MOBILE (full width) */
        w-full h-[220px]

        /* 📱 TABLET (3 cards layout) */
        md:${i === 1 ? "w-[30%] h-[250px]" : ""}
        md:${i === 2 ? "w-[40%] h-[300px]" : ""}
        md:${i === 3 ? "w-[30%] h-[250px]" : ""}
        md:${i === 0 || i === 4 ? "hidden" : ""}

        /* 🖥️ DESKTOP (5 cards layout) */
        lg:flex
        lg:${i === 2 ? "w-[26%] h-[330px]" : ""}
        lg:${i === 1 || i === 3 ? "w-[20%] h-[260px]" : ""}
        lg:${i === 0 || i === 4 ? "w-[17%] h-[220px]" : ""}
      `}
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

      {/* video  */}
      <section className="w-full mt-10 bg-white text-black flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-16">
        {/* Left Video Circle */}
        <div className="flex justify-center md:w-1/2">
          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-amber-600 flex items-center justify-center">
            <video
              src="/Images/home1TMerged.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 mt-10 md:mt-0 md:pl-12">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug ">
            Welcome to{" "}
            <span className="text-amber-600">Max Holidays India Pvt. Ltd.</span>
          </h1>

          <h2 className="text-amber-600 text-3xl md:text-4xl font-semibold mt-4">
            Tour & Family Packages
          </h2>

          <p className="text-black text-lg mt-6 leading-relaxed text-justify">
            Explore incamberible India with our premium holiday packages
            tailoamber for families, couples, and group travellers. Enjoy
            seamless travel planning, comfortable stays, and unforgettable
            experiences with Max Holidays India Pvt. Ltd.
          </p>

          <p className="text-black text-lg mt-3 leading-relaxed">
            Let’s begin your journey of{" "}
            <span className="text-amber-500 font-semibold">
              memorable travel experiences
            </span>{" "}
            together!
          </p>
        </div>
      </section>

      {/* paragraph  */}
      <p className="text-lg leading-relaxed text-gray-700 text-justify px-4 md:px-10 my-10">
        <span className="text-amber-500 font-semibold">
          Max Holidays India Pvt. Ltd.
        </span>
        is one of India's leading travel experts, offering beautifully planned
        tours across famous cities, heritage sites, beaches, and hill stations.
        With carefully curated{" "}
        <span className="text-amber-500 font-semibold">family packages</span>, we
        make every journey comfortable, safe, and memorable. Our team ensures
        smooth hotel stays, guided sightseeing, and seamless transportation. At
        <span className="text-amber-500 font-semibold">
          Max Holidays India Pvt. Ltd.
        </span>
        , we believe in delivering joy-filled travel experiences that bring
        families closer. Start your next adventure with our perfectly designed
        <span className="text-amber-500 font-semibold">tour packages</span>{" "}
        today!
      </p>

      {/* ---------------- 3-IMAGE NEW SECTION ---------------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-4 md:px-10 my-10">
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

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sliderImages = [
  "/Images/home1.avif",
  "/Images/home27.avif",
  "/Images/home4.avif",
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

      {/* video  */}
      <section className="w-full bg-white text-black flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-16">
        {/* Left Video Circle */}
        <div className="flex justify-center md:w-1/2">
          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-amber-600 flex items-center justify-center">
            <video
              src="/Images/home1.mp4"
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

      {/* ---------------- 4 CATEGORIES SECTION ---------------- */}
      <div className="w-full flex justify-between items-center gap-4 px-4 md:px-10 flex-wrap md:flex-nowrap">
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

      {/* paragraph  */}
      <p className="text-lg leading-relaxed text-gray-700 text-justify">
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

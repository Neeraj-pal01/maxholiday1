import React from 'react'
import { Check } from "lucide-react";
import { Link } from 'react-router-dom';

export default function MostPopularTrakking() {
    const trekkingData = [
        {
            img: "/Images/t1.webp",
            days: 2,
            guests: 5,
            price: 370,
            title: "Mount Agung, Bali – Indonesia",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.",
        },
        {
            img: "/Images/t2.webp",
            days: 4,
            guests: 8,
            price: 400,
            title: "Mount Rinjani, NTB – Indonesia",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.",
        },
        {
            img: "/Images/t3.webp",
            days: 6,
            guests: 5,
            price: 950,
            title: "Mount Jayawijaya, Papua – Indonesia",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.",
        },
    ];
    return (
        <div className="px-5 md:px-20 py-16">
            {/* TOP TEXT */}
            <div className="flex justify-between items-start mb-10">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-wide">
                        MOST POPULAR TREKKING
                    </h2>
                    <p className="text-gray-600 mt-3 max-w-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-sm font-semibold">
                    VIEW ALL
                </button>
            </div>

            {/* TREKKING CARDS GRID */}
            <div className="grid md:grid-cols-3 gap-10">
                {trekkingData.map((item, i) => (
                    <div key={i}>
                        {/* IMAGE */}
                        <div className="relative h-96 min-h-96 w-full  rounded-lg">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full saturate-15 hover:saturate-100 h-full block object-cover"
                            />
                            {/* ORANGE DATA BOX */}
                            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex">
                                <div className="bg-orange-600 text-white px-5 py-3 text-center">
                                    <p className="text-xl font-bold">{item.guests}</p>
                                    <p className="text-sm opacity-80">Guest</p>
                                </div>
                                <div className="bg-orange-600 text-white px-5 py-3 text-center border-l border-white/20">
                                    <p className="text-xl font-bold">{item.days}</p>
                                    <p className="text-sm opacity-80">Days</p>
                                </div>
                                <div className="bg-white flex items-center text-orange-600 px-5 py-3 text-xl font-bold border-l border-white/20">
                                    ${item.price}
                                </div>
                            </div>
                        </div>

                        {/* TEXT */}
                        <h3 className="text-xl font-bold mt-4">{item.title}</h3>
                        <p className="text-gray-600 mt-2 leading-relaxed">{item.desc}</p>

                        <button className="mt-4 text-orange-600 font-semibold flex items-center gap-2 hover:underline">
                           <Link to={"/booking"}> START JOURNEY →</Link>
                        </button>
                    </div>
                ))}
            </div>

            {/* About Us  */}

            <div className="grid md:grid-cols-2 px-5 mt-16 gap-10 items-center">
                {/* LEFT TEXT CONTENT */}
                <div>
                    {/* QUOTE + HEADING */}
                    <div className="flex items-start gap-4 mb-5">
                        <span className="text-orange-600 text-7xl leading-none">❝</span>

                        <h2 className="text-xl md:text-2xl font-bold text-gray-800 leading-snug">
                            The Best Journeys In Life Are Those That
                            Answer Questions You Never Thought To Ask
                        </h2>
                    </div>

                    {/* PARAGRAPH */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit.
                    </p>

                    {/* BULLET POINTS */}
                    <ul className=" mb-6">
                        {[
                            "Vivamus starlord finibus, dictum massa eget suscipit metus nami",
                            "Vivamus starlord finibus, dictum massa eget suscipit metus nami",
                            "Morbi maximus mauris eget groot dignissim, in laoreet justo facilisis",
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <Check className="text-orange-600 mt-1" />
                                <span className="text-gray-700">{item}</span>
                            </li>
                        ))}
                    </ul>

                    {/* BOTTOM PARAGRAPH */}
                    <p className="text-gray-600 leading-relaxed mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi Duis aute irure.
                    </p>

                    {/* BUTTON */}
                    <button className="bg-orange-600 hover:bg-orange-700 transition text-white px-10 py-3 font-semibold uppercase tracking-wider">
                        About Us
                    </button>
                </div>

                {/* RIGHT IMAGE */}
                <div>
                    <img
                        src="/Images/t4.webp"
                        alt="hiking"
                        className="w-full p-10 h-[600px] object-cover "
                    />
                </div>
            </div>
        </div>

    )
}

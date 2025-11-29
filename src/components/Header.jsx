import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(null);
  const [mobile, setMobile] = useState(false);

  const toggleMenu = (menu) => {
    setOpen(open === menu ? null : menu);
  };

  return (
    <nav className="bg-white shadow-md border-b relative z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-bold text-amber-600 flex items-center transition-transform duration-300 hover:scale-105"
        >
          Max <span className="text-black ml-1">Holidays</span>
        </Link>

        {/* RIGHT SIDE BUTTON (DESKTOP) */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-10 text-[#001248] font-semibold">

            {/* DESTINATION */}
            <MenuItem
              name="DESTINATION"
              id="destination"
              open={open}
              toggleMenu={toggleMenu}
            >
              <MegaMenu size="large">
                <MegaSection
                  title="COUNTRIES"
                  items={["India", "Nepal", "Tibet", "Bhutan", "Sri Lanka", "Bangladesh"]}
                />

                <MegaSection
                  title="ZONE WISE"
                  items={[
                    "North India",
                    "South India",
                    "Central India",
                    "West India",
                    "North East India",
                    "East India",
                  ]}
                />

                <MegaSection
                  title="STATE WISE"
                  items={[
                    "Rajasthan",
                    "Kerala",
                    "Tamil Nadu",
                    "Ladakh",
                    "Andhra Pradesh",
                    "Karnataka",
                  ]}
                />

                <MegaSection
                  title="POPULAR CITIES"
                  items={["Agra", "Udaipur", "Old Delhi", "Varanasi", "Mumbai", "Munnar"]}
                />
              </MegaMenu>
            </MenuItem>

            {/* TOUR PACKAGES */}
            <MenuItem
              name="TOUR PACKAGES"
              id="packages"
              open={open}
              toggleMenu={toggleMenu}
            >
              <MegaMenu size="large">
                <MegaSection
                  title="POPULAR TOURS"
                  items={[
                    "Taj Mahal Tours",
                    "Golden Triangle Tours",
                    "Kailash Mansarovar Yatra",
                    "Pushkar Fair",
                    "Kerala Tours",
                    "India Luxury Train Tours",
                    "Muktinath Tours",
                  ]}
                />

                <MegaSection
                  title="GROUP TOURS"
                  items={[
                    "Forts & Palaces of Rajasthan",
                    "Grand South India Tour",
                    "Taj Mahal, Tiger & Culture",
                    "Adi Kailash & Om Parvat",
                    "Romantic Indian Beaches",
                    "Cultural Heritage of India",
                    "Ultimate India Tour Package",
                  ]}
                />

                <MegaSection
                  title="TOP TRAVEL IDEAS"
                  items={[
                    "Cultural Tours",
                    "Cruising Tours",
                    "Wildlife Tours",
                    "Honeymoon Tours",
                    "Trekking Tours",
                    "Festival Tours",
                    "Photography Tours",
                    "Food Tours",
                  ]}
                />

                <MegaSection
                  title="STATE WISE TOUR"
                  items={[
                    "Ladakh Tours",
                    "Kerala Tours",
                    "Rajasthan Tours",
                    "Tamil Nadu Tours",
                    "Delhi Tours",
                    "Gujarat Tours",
                    "Sikkim Tours",
                    "Karnataka Tours",
                  ]}
                />
              </MegaMenu>
            </MenuItem>

          

            {/* ABOUT */}
            <MenuItem
              name="ABOUT"
              id="about"
              open={open}
              toggleMenu={toggleMenu}
            >
              <MegaMenu size="medium">
                <MegaSection
                  title="ABOUT COMPANY"
                  items={["Company Profile", "Our Founder", "Why Us", "Contact Us"]}
                />

                <MegaSection
                  title="MAX FOR YOU"
                  items={[
                    "Ways to Travel",
                    "Deals and Offers",
                    "Loyalty Rewards",
                    "Our Brochures",
                    "Max Blogs",
                  ]}
                />
              </MegaMenu>
            </MenuItem>

            {/* REVIEWS */}
            <li className="hover:text-amber-600 mr-10">
              <Link to="/reviews">REVIEWS</Link>
            </li>
          </ul>

          {/* ASK A QUESTION BUTTON */}
          <Link
            to="/contact"
            className="bg-amber-600 hover:bg-amber-900 text-white font-semibold px-8 py-3 rounded-full transition-all"
          >
            ASK A QUESTION
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button className="md:hidden text-2xl" onClick={() => setMobile(!mobile)}>
          {mobile ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobile && <MobileMenu />}
    </nav>
  );
}

/*-----------------------------------------------------
  REUSABLE COMPONENTS
------------------------------------------------------*/

function MenuItem({ name, id, open, toggleMenu, children }) {
  return (
    <li
      className="relative cursor-pointer"
      onMouseEnter={() => toggleMenu(id)}
      onMouseLeave={() => toggleMenu(null)}
    >
      <div className="flex items-center gap-1 hover:text-amber-600">
        {name} <FaChevronDown size={12} />
      </div>

      {open === id && children}
    </li>
  );
}

function MegaMenu({ children, size }) {
  const sizes = {
    large: "w-[750px] grid-cols-4",
    medium: "w-[500px] grid-cols-2",
    small: "w-[400px] grid-cols-1",
  };

  return (
    <div
      className={`absolute left-0 top-full bg-white shadow-xl border p-10 grid gap-12 z-50 rounded-xl ${sizes[size]}`}
    >
      {children}
    </div>
  );
}

function MegaSection({ title, items }) {
  return (
    <div>
      <h4 className="font-semibold text-amber-600 mb-3">{title}</h4>
      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li key={item} className="hover:text-amber-600">
            <Link to="/">{item}</Link>
          </li>
        ))}
      </ul>
      <Link className="text-amber-600 mt-2 inline-block font-semibold text-sm">
        View All »
      </Link>
    </div>
  );
}

/* MOBILE MENU */
function MobileMenu() {
  return (
    <div className="md:hidden bg-white shadow-lg border-t p-6 space-y-4">
      <p className="font-semibold">Mobile Menu Coming…</p>

      <Link
        to="/contact"
        className="block text-center bg-red-600 text-white font-semibold py-3 rounded-full"
      >
        ASK A QUESTION
      </Link>
    </div>
  );
}

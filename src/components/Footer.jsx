import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t mt-20">
      
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div>
          <img src="/logo.png" alt="Max Holidays" className="w-40 mb-4" />

          <p className="text-sm leading-6 text-gray-600">
            <strong className="text-teal-600 font-bold text-md">Max Holidays India Pvt. Ltd.</strong>
            <br />
            301, HB Twin Tower,
            <br />
            Netaji Subhash Place,
            <br />
            Pitam Pura, New Delhi 110034
          </p>

          <p className="mt-4 text-sm leading-6 text-gray-600">
            <span className="font-bold text-teal-600">Landline :</span> 011 45026500
            <br />
            <span className="font-bold text-teal-600">Whatsapp :</span> +91 8800740030
            <br />
            <span className="font-bold text-teal-600">Email :</span> tours@maxholidays.com
            <br />
            <span className="font-bold text-teal-600">Support :</span> support@maxholidays.com
            <br />
            <span className="font-bold text-teal-600">Skype :</span> max.holidays
          </p>

          {/* Social icons */}
          <div className="flex gap-4 mt-4 text-xl text-gray-600">
            {[
              { Icon: FaFacebookF, color: "hover:text-blue-600" },
              { Icon: FaInstagram, color: "hover:text-pink-600" },
              { Icon: FaLinkedinIn, color: "hover:text-blue-700" },
              { Icon: FaTwitter, color: "hover:text-blue-500" },
              { Icon: FaYoutube, color: "hover:text-red-600" },
              { Icon: FaPinterestP, color: "hover:text-red-500" },
            ].map(({ Icon, color }) => (
              <Icon key={color} className={`${color} cursor-pointer transition`} />
            ))}
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-bold text-xl mb-4 text-teal-600">Company</h3>
          <ul className="space-y-2 text-sm">
            {[
              ["About Us", "/about"],
              ["Corporate Profile", "/corporate-profile"],
              ["Our Founder", "/founder"],
              ["Why Us", "/why-us"],
              ["Max Blog", "/blog"],
              ["Travel Tips", "/travel-tips"],
              ["Brochures", "/brochures"],
              ["Contact Us", "/contact"],
            ].map(([label, link]) => (
              <li key={link}>
                <Link
                  to={link}
                  className="hover:text-teal-600 transition font-medium"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-xl mb-4 text-teal-600">Services</h3>
          <ul className="space-y-2 text-sm">
            {[
              ["India Travel Guide", "/india-travel-guide"],
              ["Our Destinations", "/destinations"],
              ["Tour Packages", "/tour-packages"],
              ["Escorted Group Tours", "/group-tours"],
              ["Ways to Travel", "/ways-to-travel"],
              ["Special Interest Tours", "/special-interest-tours"],
              ["Business Travel Services", "/business-travel"],
              ["Responsible Tourism", "/responsible-tourism"],
              ["Responsible Business", "/responsible-business"],
            ].map(([label, link]) => (
              <li key={link}>
                <Link
                  to={link}
                  className="hover:text-teal-600 transition font-medium"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Max For You */}
        <div>
          <h3 className="font-bold text-xl mb-4 text-teal-600">Max For You</h3>
          <ul className="space-y-2 text-sm">
            {[
              ["FAQs", "/faqs"],
              ["Deal & Offers", "/deals"],
              ["Loyalty Rewards", "/loyalty"],
              ["Testimonial", "/testimonials"],
              ["Booking Conditions", "/booking-conditions"],
              ["Terms of Services", "/terms"],
              ["Payments", "/payments"],
              ["Enquiry Form", "/enquiry"],
            ].map(([label, link]) => (
              <li key={link}>
                <Link
                  to={link}
                  className="hover:text-teal-600 transition font-medium"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* TRUST BADGES + PAYMENT METHODS */}
      <div className="border-t py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          
          {/* Trust Badges */}
          <div>
            <h3 className="font-bold text-teal-600 mb-4 text-lg">Book with Confidence</h3>
            <div className="flex flex-wrap gap-4">
              {[
                "/Images/footer1.jpg",
                "/Images/footer2.jpg",
                "/Images/footer3.svg",
                "/Images/footer4.jpg",
                "/Images/footer5.svg",
                "/Images/footer6.svg",
                "/Images/footer7.svg",
                "/Images/footer8.png",
              ].map((src) => (
                <img key={src} src={src} className="h-14 rounded shadow-sm" />
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="font-bold text-lg text-teal-600 mb-4">Payment Methods</h3>
            <div className="flex items-center gap-4">
              {[
                "/Images/payment1.png",
                "/Images/payment2.png",
                "/Images/payment3.png",
                "/Images/payment4.png",
                "/Images/payment5.png",
              ].map((src) => (
                <img key={src} src={src} className="h-10 rounded shadow-sm" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM LINKS */}
      <div className="border-t py-6 text-center text-sm">
        <div className="flex flex-wrap justify-center gap-6 mb-4 font-medium">
          {["Privacy Policy", "Cookies Policy", "Disclaimer", "Legal", "Sitemap"].map(
            (item) => (
              <span key={item} className="text-teal-600 transition font-bold">
                {item}
              </span>
            )
          )}
        </div>

        <p className="text-gray-500 font-medium">
          © 2004–2025 <span className="text-teal-600" > Max Holidays</span> India Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

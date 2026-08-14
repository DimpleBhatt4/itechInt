import React from "react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaGooglePlusG,
} from "react-icons/fa";

const navigation = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Solutions", path: "/solutions" },
  { name: "Industries We Serve", path: "/industry" },
  { name: "Contact Us", path: "/contact" },
];

const products = [
  { name: "Continuous Inkjet (CIJ)", id: "cij" },
  { name: "Laser Marking Systems", id: "laser-marking" },
  { name: "Thermal Inkjet (TIJ)", id: "tij" },
  { name: "Thermal Transfer Overprinters (TTO)", id: "tto" },
  { name: "Large Character Printers", id: "large-character-printers" },
  { name: "High-Resolution Printers", id: "high-resolution-printers" },
  { name: "Label Printing & Applicators", id: "label-printing-applicators" },
  { name: "Vision Inspection Systems", id: "vision-inspection-systems" },
  { name: "Checkweighers", id: "checkweighers" },
  { name: "Metal Detectors", id: "metal-detectors" },
  { name: "Packaging Automation", id: "packaging-automation" },
  { name: "Track & Trace Solutions", id: "track-trace-solutions" },
  { name: "Industrial Consumables", id: "industrial-consumables" },
];

const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    link: "https://www.facebook.com/",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    link: "https://twitter.com/",
  },
  {
    name: "Youtube",
    icon: FaYoutube,
    link: "https://www.youtube.com/",
  },
  {
    name: "Linkedin",
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/",
  },
  {
    name: "Google Plus",
    icon: FaGooglePlusG,
    link: "https://plus.google.com/",
  },
];

const Footer = () => {
  return (
    <div className="w-full bgOrange textBlue py-y px-2">
      
      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">

        {/* ================= NAVIGATION ================= */}
        <div>
          <h6 className="font-bold uppercase pt-2 text-white">
            Navigation
          </h6>

          <ul>
            {navigation.map((item) => (
              <li
                key={item.name}
                className="py-1 text-gray-300 hover:text-white"
              >
                <Link to={item.path}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= OUR SOLUTIONS ================= */}
        <div className="col-span-1 md:col-span-2">
          <h6 className="font-bold uppercase pt-2 text-white">
            Our Solutions
          </h6>

          <ul>
            {products.map((product) => (
              <li
                key={product.id}
                className="py-1 text-gray-300 hover:text-white"
              >
                <Link to={`/products/${product.id}`}>
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= CONTACT INFO ================= */}
        <div className="col-span-1 md:col-span-2">
          <h6 className="font-bold uppercase pt-2 text-white">
            Contact Info
          </h6>

          <div className="text-gray-300">
            <p className="py-1 text-[#43c6d9] font-semibold">
              ITECH INKJET FZE
            </p>

            <p>P.O.Box 124111, SHARJAH AIRPORT</p>

            <p>INTERNATIONAL FREE ZONE (</p>

            <p>SAIF ZONE ) SHARJAH</p>

            <p>United Arab Emirates</p>

            <p>T : +971 6 88 45619</p>

            <p>F : +971 6 52 45570</p>

            <p>M : +971 52 946 2093</p>

            <p className="mt-3 text-[#43c6d9] font-semibold">
              Sales Enquiry / 24X7 Customer
              <br />
              Support:
            </p>

            <a
              href="mailto:Info@itechinkjetprinting.com"
              className="hover:text-white"
            >
              Info@itechinkjetprinting.com
            </a>
          </div>
        </div>

        {/* ================= SOCIAL ================= */}
        <div>
          <h6 className="font-bold uppercase pt-2 text-white">
            Social Connection
          </h6>

          <div className="mt-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center w-[235px] h-[38px] mb-2 rounded-full border border-gray-600 text-gray-300 hover:text-white"
                >
                  <span className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-[#2878b5]">
                    <Icon />
                  </span>

                  <span className="px-5">
                    {social.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-300">
        <p className="py-4 w-full">
          Copyright © 2018 ITech Inkjet Printing Complete Solution
          All right reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
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
    <footer className="w-full bgOrange textBlue px-2">

      {/* ================= MAIN FOOTER ================= */}
      <div
        className="
          mx-auto
          grid
          max-w-[1240px]
          grid-cols-1
          gap-10
          border-b-2
          border-gray-600
          py-10
          text-center
          lg:grid-cols-6
          lg:gap-6
          lg:text-left
        "
      >

        {/* ================= NAVIGATION ================= */}
        <div className="lg:col-span-1">
          <h6 className="pt-2 font-bold uppercase textBlue underline">
            Navigation
          </h6>

          <ul className="mt-3">
            {navigation.map((item) => (
              <li
                key={item.name}
                className="py-1 text-gray-300 transition hover:text-white"
              >
                <Link to={item.path}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= OUR SOLUTIONS ================= */}
        <div className="lg:col-span-2">
          <h6 className="pt-2 font-bold uppercase textBlue underline">
            Our Solutions
          </h6>

          <ul className="mt-3">
            {products.map((product) => (
              <li
                key={product.id}
                className="py-1 text-gray-300 transition hover:text-white"
              >
                <Link to={`/products/${product.id}`}>
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= CONTACT INFO ================= */}
        <div className="lg:col-span-2">
          <h6 className="pt-2 font-bold uppercase textBlue underline">
            Contact Info
          </h6>

          <div className="mt-3 text-gray-300">

            <p className="py-1 font-semibold textBlue">
              ITECH INKJET FZE
            </p>

            <p>P.O.Box 124111, SHARJAH AIRPORT</p>

            <p>INTERNATIONAL FREE ZONE (</p>

            <p>SAIF ZONE ) SHARJAH</p>

            <p>United Arab Emirates</p>

            <p>T : +971 6 88 45619</p>

            <p>F : +971 6 52 45570</p>

            <p>M : +971 52 946 2093</p>

            <p className="mt-3 font-semibold textBlue">
              Sales Enquiry / 24X7 Customer
              <br />
              Support:
            </p>

            <a
              href="mailto:Info@itechinkjetprinting.com"
              className="break-all transition hover:text-white"
            >
              Info@itechinkjetprinting.com
            </a>
          </div>
        </div>

        {/* ================= SOCIAL ================= */}
        <div className="lg:col-span-1">
          <h6 className="pt-2 font-bold uppercase textBlue underline">
            Social Connection
          </h6>

          <div className="mt-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mx-auto
                    flex
                    h-[38px]
                    w-full
                    max-w-[235px]
                    items-center
                    rounded-full
                    border
                    border-gray-600
                    text-gray-300
                    transition
                    hover:text-white
                    lg:mx-0
                  "
                >
                  <span
                    className="
                      flex
                      h-[38px]
                      w-[38px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bgBlue
                    "
                  >
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
      <div
        className="
          mx-auto
          flex
          max-w-[1240px]
          justify-center
          px-2
          py-4
          text-center
          text-gray-300
        "
      >
        <p className="py-4">
          Copyright © 2026 ITech Inkjet Printing Complete Solution
          All right reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
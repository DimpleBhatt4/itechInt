import React from "react";
import { Link } from "react-router-dom";

import cij from "../../assets/itech_solution_icons_svg/continuous-inkjet-cij.svg";
import lms from "../../assets/itech_solution_icons_svg/laser-marking-systems.svg";
import tij from "../../assets/itech_solution_icons_svg/thermal-inkjet-tij.svg";
import tto from "../../assets/itech_solution_icons_svg/thermal-transfer-overprinter-tto.svg";
import lcp from "../../assets/itech_solution_icons_svg/large-character-printers.svg";
import hrp from "../../assets/itech_solution_icons_svg/high-resolution-printers.svg";
import lpa from "../../assets/itech_solution_icons_svg/label-printing-applicators.svg";
import vis from "../../assets/itech_solution_icons_svg/vision-inspection-systems.svg";
import cw from "../../assets/itech_solution_icons_svg/checkweighers.svg";
import md from "../../assets/itech_solution_icons_svg/metal-detectors.svg";
import pa from "../../assets/itech_solution_icons_svg/packaging-automation.svg";
import ttc from "../../assets/itech_solution_icons_svg/track-trace-solutions.svg";
import ic from "../../assets/itech_solution_icons_svg/industrial-consumables.svg";

import {
  cijProductInfo,
  laserProductInfo,
  tijProductInfo,
  ttoProductInfo,
  largeCharacterProductInfo,
  highResolutionProductInfo,
  labelProductInfo,
  visionProductInfo,
  checkweigherProductInfo,
  metalDetectorProductInfo,
  packagingProductInfo,
  trackTraceProductInfo,
  consumablesProductInfo,
} from "./productInfo";

const AllTypes = () => {
  const features = [
    {
      name: "Continuous Inkjet (CIJ)",
      icon: cij,
      infoPage: cijProductInfo,
    },
    {
      name: "Laser Marking Systems",
      icon: lms,
      infoPage: laserProductInfo,
    },
    {
      name: "Thermal Inkjet (TIJ)",
      icon: tij,
      infoPage: tijProductInfo,
    },
    {
      name: "Thermal Transfer Overprinters (TTO)",
      icon: tto,
      infoPage: ttoProductInfo,
    },
    {
      name: "Large Character Printers",
      icon: lcp,
      infoPage: largeCharacterProductInfo,
    },
    {
      name: "High-Resolution Printers",
      icon: hrp,
      infoPage: highResolutionProductInfo,
    },
    {
      name: "Label Printing & Applicators",
      icon: lpa,
      infoPage: labelProductInfo,
    },
    {
      name: "Vision Inspection Systems",
      icon: vis,
      infoPage: visionProductInfo,
    },
    {
      name: "Checkweighers",
      icon: cw,
      infoPage: checkweigherProductInfo,
    },
    {
      name: "Metal Detectors",
      icon: md,
      infoPage: metalDetectorProductInfo,
    },
    {
      name: "Packaging Automation",
      icon: pa,
      infoPage: packagingProductInfo,
    },
    {
      name: "Track & Trace Solutions",
      icon: ttc,
      infoPage: trackTraceProductInfo,
    },
    {
      name: "Industrial Consumables (Ink, Make-up, Solvents, Ribbons)",
      icon: ic,
      infoPage: consumablesProductInfo,
    },
  ];

  return (
    <div>
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4'>
        {features.map((feature, index) => {
          const isConsumables =
            feature.name ===
            "Industrial Consumables (Ink, Make-up, Solvents, Ribbons)";

          return (
            <Link
              key={index}
              to={`/products/${feature.infoPage.id}`}
              state={{
                product: feature.infoPage,
              }}
              className={`block
                group
                cursor-pointer
                rounded-2xl
                border border-slate-100
                bgGrey
                shadow-[0_2px_12px_rgba(12,0,90,0.06)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_8px_25px_rgba(12,0,90,0.12)]
                ${isConsumables ? "lg:col-span-4" : ""}
              `}>
              {isConsumables ? (
                <div
                  className='
                    flex
                    min-h-[120px]
                    items-center
                    justify-center
                    gap-6
                    px-6
                    py-6
                  '>
                  <div
                    className='
                      flex
                      h-16
                      w-16
                      shrink-0
                      items-center
                      justify-center
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    '>
                    <img
                      src={feature.icon}
                      alt={feature.name}
                      className='h-14 w-14 object-contain'
                    />
                  </div>

                  <div>
                    <h3
                      className='
                        text-base
                        font-semibold
                        leading-6
                        textOrange
                        sm:text-lg
                      '>
                      Industrial Consumables
                    </h3>

                    <p className='mt-1 text-sm font-medium text-slate-700'>
                      (Ink, Make-up, Solvents, Ribbons)
                    </p>

                    <div className='mt-3 h-1 w-9 rounded-full bgBlue' />
                  </div>
                </div>
              ) : (
                <div
                  className='
                    flex
                    min-h-[175px]
                    flex-col
                    items-center
                    justify-center
                    px-5
                    py-6
                    text-center
                  '>
                  <div
                    className='
                      mb-5
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    '>
                    <img
                      src={feature.icon}
                      alt={feature.name}
                      className='h-14 w-14 object-contain'
                    />
                  </div>

                  <h3
                    className='
                      max-w-[210px]
                      largeScreenSubHead
                      font-semibold
                      leading-5
                      textOrange
                      sm:text-base
                    '>
                    {feature.name}
                  </h3>

                  <div
                    className='
                      mt-4
                      h-1
                      w-9
                      rounded-full
                      bgBlue
                      transition-all
                      duration-300
                      group-hover:w-12
                    '
                  />
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AllTypes;

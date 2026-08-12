import React from "react";

import fp from "../../assets/itech_industry_images/01-food-processing.jpg";
import beverage from "../../assets/itech_industry_images/02-beverage.jpg";
import pharma from "../../assets/itech_industry_images/03-pharmaceutical.jpg";
import cosmetics from "../../assets/itech_industry_images/04-cosmetics.jpg";
import dairy from "../../assets/itech_industry_images/05-dairy.jpg";
import bakery from "../../assets/itech_industry_images/06-bakery.jpg";
import fmcg from "../../assets/itech_industry_images/07-fmcg.jpg";
import cable from "../../assets/itech_industry_images/08-cable-wire.jpg";
import pipes from "../../assets/itech_industry_images/09-pipes.jpg";
import autom from "../../assets/itech_industry_images/10-automotive.jpg";
import chemicals from "../../assets/itech_industry_images/11-chemicals.jpg";
import building from "../../assets/itech_industry_images/12-building-materials.jpg";

// Heroicons
import {
  BuildingOfficeIcon,
  BeakerIcon,
  CubeIcon,
  SparklesIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
  Cog6ToothIcon,
  CircleStackIcon,
  BoltIcon,
  BuildingOffice2Icon,
  FireIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";

const AllIndustry = () => {
  const features = [
    {
      name: "Food Processing",
      icon: BuildingOfficeIcon,
      image: fp,
    },
    {
      name: "Beverage",
      icon: CubeIcon,
      image: beverage,
    },
    {
      name: "Pharmaceutical",
      icon: BeakerIcon,
      image: pharma,
    },
    {
      name: "Cosmetics",
      icon: SparklesIcon,
      image: cosmetics,
    },
    {
      name: "Dairy",
      icon: CircleStackIcon,
      image: dairy,
    },
    {
      name: "Bakery",
      icon: FireIcon,
      image: bakery,
    },
    {
      name: "FMCG",
      icon: CubeIcon,
      image: fmcg,
    },
    {
      name: "Cable & Wire",
      icon: BoltIcon,
      image: cable,
    },
    {
      name: "Pipes",
      icon: CircleStackIcon,
      image: pipes,
    },
    {
      name: "Automotive",
      icon: TruckIcon,
      image: autom,
    },
    {
      name: "Chemicals",
      icon: BeakerIcon,
      image: chemicals,
    },
    {
      name: "Building Materials",
      icon: BuildingOffice2Icon,
      image: building,
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              className="
                group
                relative
                aspect-[4/3]
                overflow-hidden
                rounded-2xl
                bg-slate-200
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              {/* Background Image */}
              {feature.image ? (
                <img
                  src={feature.image}
                  alt={feature.name}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />
              ) : (
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-slate-300
                    via-slate-400
                    to-slate-600
                  "
                />
              )}

              {/* Dark Gradient */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/85
                  via-black/25
                  to-transparent
                "
              />

              {/* Bottom Content */}
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  flex
                  items-center
                  gap-3
                  p-4
                "
              >
                {/* Circular Icon */}
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/80
                    bgOrange
                    shadow-lg
                    transition-all
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>

                {/* Industry Name */}
                <h3
                  className="
                    flex-1
                    largeScreenSubHead
                    font-semibold
                    leading-5
                    text-white
                    sm:text-base
                  "
                >
                  {feature.name}
                </h3>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllIndustry;
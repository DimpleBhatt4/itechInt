import React, { useState } from "react";
import { PlayIcon } from "@heroicons/react/24/solid";

import VideoModal from "./VideoModal";

import cijVideo from "../../assets/videos/cij.mp4";
import uvLaserVideo from "../../assets/videos/laserMarking.mp4";
import fiberLaserVideo from "../../assets/videos/fibreLaser.mp4";

import cijImage from "../../assets/cijCoverImage.jpeg";
import uvLaserImage from "../../assets/laserImg1.jpg";
import fiberLaserImage from "../../assets/laserImg2.jpg";

const DemoVideos = () => {

  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: "Continuous Inkjet (CIJ)",
      category: "Coding & Marking",
      image: cijImage,
      video: cijVideo,
      description:
        "See our Continuous Inkjet printing solution in action, delivering fast, reliable and precise coding across high-speed production lines.",
      points: [
        "High-speed production coding",
        "Excellent print quality",
        "Reliable non-contact printing",
      ],
    },

    {
      id: 2,
      title: "UV Laser Marking",
      category: "Laser Marking",
      image: uvLaserImage,
      video: uvLaserVideo,
      description:
        "Explore UV laser marking technology for high-precision, permanent marking on a wide range of industrial materials.",
      points: [
        "High-precision permanent marking",
        "Excellent contrast and readability",
        "Ideal for sensitive materials",
      ],
    },

    {
      id: 3,
      title: "Fiber Laser Marking",
      category: "Laser Marking",
      image: fiberLaserImage,
      video: fiberLaserVideo,
      description:
        "Discover fiber laser marking for durable, high-speed identification and traceability across demanding industrial applications.",
      points: [
        "Fast industrial marking",
        "Permanent and durable codes",
        "Ideal for metal applications",
      ],
    },
  ];

  return (
    <>
      {/* =====================================================
          DEMO VIDEOS SECTION
      ====================================================== */}

      <section className="bgBlue py-16 sm:py-20 lg:py-4 lg:pb-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">

            <p className=" text-4xl font-bold uppercase tracking-[0.18em] textOrange">
              See Our Solutions In Action
            </p>

            <p className="mt-3 largeScreenHead font-semibold textGrey text-3xl">
              Live Demos & Successful Installations
            </p>

            {/* <p className="mt-4 text-base leading-7 text-white sm:text-lg">
              Explore our coding and marking technologies through real-world
              demonstrations and industrial applications.
            </p> */}

          </div>


          {/* Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {videos.map((item) => (

              <div
                key={item.id}
                onClick={() => setSelectedVideo(item)}
                className="
                  group
                  relative
                  aspect-[4/3]
                  cursor-pointer
                  overflow-hidden
                  rounded-2xl
                  bg-black
                  shadow-[0_4px_20px_rgba(12,0,90,0.10)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_12px_30px_rgba(12,0,90,0.16)]
                "
              >

                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/25
                    to-black/5
                  "
                />

                {/* Play Button */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    flex
                    h-16
                    w-16
                    -translate-x-1/2
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    bgOrange
                    shadow-lg
                    ring-4
                    ring-white/30
                    transition-all
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <PlayIcon className="ml-1 h-7 w-7 text-white" />
                </div>

                {/* Card Text */}
                <div className="absolute inset-x-0 bottom-0 p-6">

                  <p className="text-lg font-bold uppercase tracking-[0.15em] text-orange-300">
                    {item.category}
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-white largeScreenSubHead">
                    {item.title}
                  </h3>

                  <div className="mt-3 h-1 w-9 rounded-full bgOrange transition-all duration-300 group-hover:w-14" />

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          REUSABLE VIDEO MODAL
      ====================================================== */}

      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

    </>
  );
};

export default DemoVideos;
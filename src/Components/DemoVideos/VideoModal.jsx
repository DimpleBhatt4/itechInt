import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const VideoModal = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        bg-black/70
        p-3
        backdrop-blur-sm
        sm:p-6
      "
      onClick={onClose}
    >
      {/* Modal */}
      <div
        className="
          relative
          flex
          h-[90vh]
          w-full
          max-w-7xl
          overflow-hidden
          rounded-2xl
          bg-white
          shadow-2xl
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="
            absolute
            right-4
            top-4
            z-20
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-black/60
            text-white
            backdrop-blur
            transition
            hover:bgOrange
          "
        >
          <XMarkIcon className="h-5 w-5" />
        </button>

        {/* Main Content */}
        <div
          className="
            grid
            h-full
            w-full
            grid-rows-[auto_1fr]
            lg:grid-cols-[1.7fr_1fr]
            lg:grid-rows-1
          "
        >
          {/* ================= VIDEO ================= */}
          <div
            className="
              flex
              h-full
              min-h-0
              items-center
              justify-center
              bg-black
            "
          >
            <video
              controls
              muted
              playsInline
              preload="metadata"
              className="
                h-full
                w-full
                object-contain
              "
            >
              <source src={video.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* ================= INFORMATION ================= */}
          <div
            className="
              flex
              h-full
              flex-col
              justify-center
              overflow-y-auto
              p-6
              sm:p-8
              lg:p-9
            "
          >
            {/* Category */}
            <p
              className="
                largeScreenSubHead
                font-bold
                uppercase
                tracking-[0.18em]
                textBlue
              "
            >
              {video.category}
            </p>

            {/* Title */}
            <h3
              className="
                mt-2
                largeScreenSubHead
                font-bold
                textOrange
                sm:text-3xl
              "
            >
              {video.title}
            </h3>

            {/* Description */}
            <p
              className="
                mt-4
                text-lg
                leading-6
                textBlue
              "
            >
              {video.description}
            </p>

            {/* Points */}
            {video.points?.length > 0 && (
              <div className="mt-6 space-y-3">
                {video.points.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    {/* Check Icon */}
                    <div
                      className="
                        mt-0.5
                        flex
                        h-5
                        w-5
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bgOrange
                        text-white
                      "
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-3 w-3"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 5.29a1 1 0 010 1.42l-7.25 7.25a1 1 0 01-1.42 0l-3.25-3.25a1 1 0 111.42-1.42l2.54 2.54 6.54-6.54a1 1 0 011.42 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    {/* Point */}
                    <p className="font-bold text-xl textBlue">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/8006902440?text=Hi!%20I%E2%80%99d%20like%20to%20know%20more%20about%20your%20products%20and%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-full
                  rounded-md
                  bgOrange
                  px-3.5
                  py-2.5
                  text-center
                  text-lg
                  font-bold
                  textGrey
                  shadow-xs
                  transition
                  hover:opacity-90
                  sm:w-auto
                "
              >
                Contact Our Experts
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
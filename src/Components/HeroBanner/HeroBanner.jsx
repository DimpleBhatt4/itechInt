import BentoGrids from "./BentoGrids";
import Carousel from "./Carousel";

export default function HeroBanner() {
  return (
    <div
      className="
        relative
        isolate
        overflow-hidden
        bgBlue
        px-6
        pt-16
        shadow-2xl
        sm:px-10
        sm:pt-20
        md:px-16
        md:pt-24
        lg:flex
        lg:gap-x-12
        lg:px-16
        xl:gap-x-20
        xl:px-24
      "
    >
      {/* Content */}
      <div
        className="
          mx-auto
          max-w-2xl
          text-center
          lg:mx-0
          lg:w-[45%]
          lg:max-w-xl
          lg:flex-auto
          lg:py-24
          lg:text-left
          xl:py-32
        "
      >
        <h2
          className="
            text-3xl
            font-semibold
            tracking-tight
            text-balance
            text-white
            sm:text-4xl
            md:text-5xl
          "
        >
          Empowering Global Manufacturing with Smart Coding, Marking &
          Traceability Solutions
        </h2>

        <p
          className="
            mt-6
            text-base/7
            text-pretty
            text-gray-300
            sm:text-lg/8
          "
        >
          Delivering innovative coding, packaging, inspection, labeling, and
          traceability solutions across the Middle East and East Africa.
        </p>

        <div
          className="
            mt-8
            flex
            flex-col
            items-center
            gap-4
            sm:flex-row
            sm:justify-center
            lg:mt-10
            lg:justify-start
          "
        >
          <a
            href="#"
            className="
              w-full
              rounded-md
              bgOrange
              px-3.5
              py-2.5
              text-center
              text-sm
              font-semibold
              textGrey
              shadow-xs
              transition
              hover:opacity-90
              sm:w-auto
            "
          >
            Contact Our Experts
          </a>

          <a
            href="#"
            className="
              text-sm/6
              font-semibold
              text-white
              transition
              hover:text-gray-300
            "
          >
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* Bento Images */}
      <div
        className="
          relative
          mt-12
          w-full
          lg:mt-8
          lg:w-[55%]
          lg:flex-none
          lg:py-8
          xl:w-[52%]
        "
      >
        <div
          className="
            w-full
            rounded-2xl
            bg-white/5
            p-2
            ring-1
            ring-white/10
            sm:p-3
            h-full
          "
        >
          <Carousel />
          {/* <BentoGrids /> */}
        </div>
      </div>
    </div>
  );
}
import AllIndustry from "./AllIndustry";
import solutionBg from "../../assets/solutionBg.png";

export default function Industry() {
  return (
    <section className="bgGrey pb-8">
      {/* Hero */}
      <div
        className="
          relative
          bgBlue
          bg-cover
          bg-center
          bg-no-repeat
          px-4
          py-24
          sm:py-32
        "
      >
        <div className="mx-auto max-w-7xl">
          {/* Text */}
          <p className="largeScreenSubHead font-bold text-white">
           Industries We Serve
          </p>

          <p
            className="
              mt-2
              max-w-4xl
              text-4xl
              font-semibold
              tracking-tight
              text-pretty
              text-white
              sm:text-5xl
            "
          >
            Solutions Built for Every Industry
          </p>

          <p className="mt-6 max-w-3xl text-lg/8 text-white">
            From food to automotive, we deliver advanced coding, marking, inspection, and traceability solutions tailored to your industry needs
          </p>
        </div>
      </div>

      {/* Cards - overlap hero */}
      <div
        className="
          relative
          z-10
          mx-auto
          -mt-14
          w-[calc(100%-2rem)]
          max-w-7xl
          rounded-4xl
          bg-white
          
          p-4
          sm:-mt-16
        "
      >
        <AllIndustry />
      </div>
    </section>
  );
}
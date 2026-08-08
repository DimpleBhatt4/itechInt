import AllTypes from "./AllTypes";
import solutionBg from "../../assets/solutionBg.png";

export default function OurSolutions() {
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
        style={{
          backgroundImage: `url(${solutionBg})`,
        }}
      >
        <div className="mx-auto max-w-7xl">
          {/* Text */}
          <p className="text-sm font-semibold text-white">
            Our Solutions
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
            Smart Solutions For Every Step Of Your Production
          </p>

          <p className="mt-6 max-w-3xl text-lg/8 text-white">
            End-to-end coding, marking, inspection, and packaging solutions
            designed to improve productivity, ensure quality, and drive
            operations efficiently.
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
        <AllTypes />
      </div>
    </section>
  );
}
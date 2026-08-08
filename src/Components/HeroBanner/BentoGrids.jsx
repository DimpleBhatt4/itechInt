import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";
import img6 from "../../assets/img6.jpeg";
import img7 from "../../assets/img7.jpeg";

export default function BentoGrids() {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-3
        sm:grid-cols-2
        lg:grid-cols-3
        lg:grid-rows-2
        lg:gap-4
      "
    >
      {/* Large Left Image */}
      <div
        className="
          group
          overflow-hidden
          rounded-3xl
          shadow-lg
          sm:col-span-2
          lg:col-span-1
          lg:row-span-2
        "
      >
        <img
          src={img1}
          alt="Industrial manufacturing"
          className="
            h-full
            min-h-[300px]
            w-full
            object-cover
            transition
            duration-500
            group-hover:scale-105
            lg:min-h-0
          "
        />
      </div>

      {/* Top Middle Image */}
      <div
        className="
          group
          overflow-hidden
          rounded-3xl
          shadow-lg
        "
      >
        <img
          src={img2}
          alt="Industrial production"
          className="
            h-full
            min-h-[220px]
            w-full
            object-cover
            transition
            duration-500
            group-hover:scale-105
            lg:min-h-0
          "
        />
      </div>

      {/* Large Right Image */}
      <div
        className="
          group
          overflow-hidden
          rounded-3xl
          sm:row-span-2
          lg:col-span-1
          lg:row-span-2
        "
      >
        <img
          src={img7}
          alt="Industrial manufacturing facility"
          className="
            h-full
            min-h-[300px]
            w-full
            object-cover
            transition
            duration-500
            group-hover:scale-105
            lg:min-h-0
          "
        />
      </div>

      {/* Bottom Middle Image */}
      <div
        className="
          group
          overflow-hidden
          rounded-3xl
          sm:col-span-1
        "
      >
        <img
          src={img6}
          alt="Industrial machines"
          className="
            h-full
            min-h-[220px]
            w-full
            object-cover
            transition
            duration-500
            group-hover:scale-105
            lg:min-h-0
          "
        />
      </div>
    </div>
  );
}
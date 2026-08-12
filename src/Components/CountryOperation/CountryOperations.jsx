import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

import eastAfricaMapNoBg from "../../assets/eastAfricaMapNoBg.png"

const countries = [
  "Kenya",
  "Tanzania",
  "Uganda",
  "Rwanda",
  "Ethiopia",
  "Djibouti",
  "South Sudan",
  "Burundi",
];

const features = [
  {
    name: "Local Sales",
    description:
      "Dedicated teams providing tailored industrial solutions.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Technical Support",
    description:
      "Fast remote and on-site assistance when you need it.",
    icon: LockClosedIcon,
  },
  {
    name: "Spare Parts",
    description:
      "Genuine consumables and readily available replacement parts.",
    icon: ServerIcon,
  },
  {
    name: "Service Engineers",
    description:
      "Skilled engineers for installation, maintenance, and training.",
    icon: ServerIcon,
  },
];

export default function CountryOperations() {
  return (
    <div className="overflow-hidden bgBlue py-2 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className="
            mx-auto
            grid
            grid-cols-1
            items-center
            gap-x-12
            gap-y-12
            lg:mx-0
            lg:max-w-none
            lg:grid-cols-2
          "
        >
          {/* LEFT CONTENT */}
          <div>
            <div className="">
              {/* Small heading */}
              <h2 className="text-base/7 font-semibold text-white">
                East Africa Operations
              </h2>

              {/* Main heading */}
              <p
                className="
                  mt-2
                  text-4xl
                  font-semibold
                  tracking-tight
                  text-pretty
                  text-white
                  sm:text-5xl
                "
              >
                Supporting Manufacturers Across East Africa
              </p>

              {/* Description */}
              <p className="mt-4 text-lg/8 text-white">
                Delivering reliable coding, marking, and traceability
                solutions across East Africa with local expertise, fast
                response times, and dependable after-sales support.
              </p>

              {/* Countries */}
              <div className="mt-4">
                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
                  Countries We Serve
                </p>

                <div className="flex flex-wrap gap-2">
                  {countries.map((country) => (
                    <div
                      key={country}
                      className="
                        rounded-lg
                        border
                        border-white/30
                        bg-white/5
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-white
                        transition-all
                        duration-200
                        hover:border-white/60
                        hover:bg-white/10
                      "
                    >
                      {country}
                    </div>
                  ))}
                </div>
              </div>

              {/* Operations */}
              <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                {features.map((feature) => {
                  const Icon = feature.icon;
                 
                  return (
                    <div
                      key={feature.name}
                      className="
                        relative
                        rounded-xl
                        border
                        border-white/15
                        bg-white/5
                        p-2
                        transition-all
                        duration-300
                        hover:border-white/30
                        hover:bg-white/10
                      "
                    >
                      {/* Icon */}
                      {/* <div
                        className="
                          mb-3
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-lg
                          bgOrange
                        "
                      >
                        <Icon
                          aria-hidden="true"
                          className="h-5 w-5 text-white"
                        />
                      </div> */}

                      {/* Title */}
                      <dt className="font-semibold text-white">
                        {feature.name}
                      </dt>

                      {/* Description */}
                      <dd className="mt-1 text-sm leading-6 text-white/70">
                        {feature.description}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:h-full gap-4">
            <img
              alt="Itech East Africa Operations"
              src={eastAfricaMapNoBg}
              width={2432}
              height={1442}
              className="
                h-auto
                max-h-[520px]
                w-full
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
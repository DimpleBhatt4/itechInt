import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import GlobeIcon from "../icons/globeIcon";
import Trust from "../icons/Trust";
import CompleteIcon from "../icons/CompleteIcon";
import CustomerIcon from "../icons/CustomerIcon";

const features = [
  {
    name: "Global Presence",
    description:
      "Serving manufacturers across multiple regions through a strong international network, ensuring reliable sales, service, and technical support.",
    icon: GlobeIcon,
  },
  {
    name: "Industry Expertise",
    description:
      "Trusted by manufacturing industries for delivering complete coding, marking, labeling, and traceability solutions tailored to production needs.",
    icon: Trust,
  },
  {
    name: "Complete Solutions",
    description:
      "From consultation and installation to automation and integration, we provide end-to-end solutions designed for modern smart factories.",
    icon: CompleteIcon,
  },
  {
    name: "Customer Commitment",
    description:
      "Our expert engineers provide fast technical assistance, authentic consumables, and cost-effective ownership to maximize equipment performance.",
    icon: CustomerIcon,
  },
];

export default function About() {
  return (
    <div className='bgGrey py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          {/* <h2 className='text-base/7 font-semibold textOrange'>
            About Itech International Group
          </h2> */}
          <p className='mt-2 text-4xl font-semibold tracking-tight text-pretty textBlue sm:text-5xl lg:text-balance'>
            25+ Years of Excellence in Industrial Coding Marking & Traceability
            Solutions
          </p>
          <p className='mt-6 text-lg/8 textBlue'>
            For over 25 years, Itech International Group has been delivering
            innovative coding, marking, labeling, inspection, and traceability
            solutions to manufacturers worldwide. Headquartered in the UAE with
            operations across the Middle East, East Africa, and Asia, we combine
            world-class technology with expert engineering and responsive
            after-sales support.
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
            {features.map((feature) => (
              <div key={feature.name} className='relative pl-16'>
                <dt className='text-base/7 font-bold textOrange largeScreenSubHead'>
                  <div className='absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bgOrange'>
                    <feature.icon
                      aria-hidden='true'
                      className='size-6 text-white'
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className='mt-2 text-base/7 textBlue'>
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

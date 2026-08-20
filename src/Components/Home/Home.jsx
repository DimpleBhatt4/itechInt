import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import HeroBanner from "../HeroBanner/HeroBanner";
import About from "../About/About";
import OurSolutions from "../OurSolutions/OurSolution";
import Industry from "../Industry/Industry";
import CountryOperations from "../CountryOperation/CountryOperations";
import VideoModal from "../DemoVideos/VideoModal";
import DemoVideos from "../DemoVideos/DemoVideos";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.pathname.substring(1);

    if (sectionId) {
      const section = document.getElementById(sectionId);

      if (section) {
        setTimeout(() => {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location.pathname]);

  return (
    <>
      <div id="home">
        <HeroBanner />
        <DemoVideos />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="solutions">
        <OurSolutions />
      </div>

      <div id="industry">
        <Industry />
      </div>

      <div id="country-operations">
        <CountryOperations />
      </div>
    </>
  );
}
import HeroBanner from "../HeroBanner/HeroBanner";
import About from "../About/About";
import OurSolutions from "../OurSolutions/OurSolution";
import Industry from "../Industry/Industry";
import CountryOperations from "../CountryOperation/CountryOperations";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <About />
      <OurSolutions />
      <Industry />
      <CountryOperations />
    </>
  );
}
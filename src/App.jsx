import { useState } from 'react'
import './App.css'
import NavBar from "./Components/NavBar/NavBar"
import HeroBanner from './Components/HeroBanner/HeroBanner'
import About from './Components/About/About'
import CountryOperations from './Components/CountryOperation/CountryOperations'
import OurSolutions from './Components/OurSolutions/OurSolution'
import AllTypes from './Components/OurSolutions/AllTypes'
import Industry from './Components/Industry/Industry'
function App() {
  return (
    <div>
      <NavBar />

      <main className="pt-20">
        <HeroBanner />
        <About />
        <OurSolutions />
        <Industry />
        <CountryOperations />
      </main>
    </div>
  );
}

export default App

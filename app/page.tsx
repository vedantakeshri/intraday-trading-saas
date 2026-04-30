// import React from 'react'
// import Navbar from './componets/Home/Navbar'
// import Hero from './componets/Home/Hero'
// import Stats from './componets/Home/Stats'
// import Footer from './componets/Home/Footer'
// import Problem from './componets/Home/Problem'
// import ChartsSection from './componets/Home/ChartSection'
// import HowItWorks from './componets/Home/HowItWorks'
// import Features from './componets/Home/Features'

import ChartsSection from "./componets/Home/ChartSection";
import CTA from "./componets/Home/CTA";
import Features from "./componets/Home/Features";
import Footer from "./componets/Home/Footer";
import Hero from "./componets/Home/Hero";
import HowItWorks from "./componets/Home/HowItWorks";
import Navbar from "./componets/Home/Navbar";
import Pricing from "./componets/Home/Pricing";
import Problem from "./componets/Home/Problem";
import Stats from "./componets/Home/Stats";

// const page = () => {
//   return (
//     <>
//     <Navbar />
//     <Hero />
//     <Stats />
//     <HowItWorks />
//     <Features />
    
//     <ChartsSection />
//     <Footer />
//     </>
//   )
// }

// export default page









export default function Page() {
  return (
    <main className="bg-[#0B0F1A] text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Problem />
      <HowItWorks />
      <Features />
      <ChartsSection />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
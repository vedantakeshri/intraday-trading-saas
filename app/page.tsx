import React from 'react'
import Navbar from './componets/Home/Navbar'
import Hero from './componets/Home/Hero'
import Stats from './componets/Home/Stats'
import Footer from './componets/Home/Footer'
import Problem from './componets/Home/Problem'
import ChartsSection from './componets/Home/ChartSection'

const page = () => {
  return (
    <>
    <Navbar />
    <Hero />
    {/* <Stats /> */}
    {/* <Problem /> */}
    <ChartsSection />
    <Footer />
    </>
  )
}

export default page
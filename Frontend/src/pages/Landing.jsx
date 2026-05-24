import React from 'react'
import Navbar from '../components/Navbar'
import SubNav from '../components/landing/SubNav'
import HeroSection from '../components/landing/HeroSection'
import ExploreSection from '../components/landing/ExploreSection'
import PlanForLater from '../components/landing/PlanForLater'
import ExploreDestination from '../components/landing/ExploreDestination'
import CabwayOne from '../components/landing/CabwayOne'
import GroupRide from '../components/landing/GroupRide'
import TravelYourWay from '../components/landing/TravelYourWay'
import Footer from '../components/landing/Footer'

const Landing = () => {
  return (
    <div className='min-h-screen bg-white font-sans'>
      <Navbar />
      <SubNav />
      <HeroSection />
      <ExploreSection />
      <PlanForLater />
      <ExploreDestination />
      <CabwayOne />
      <GroupRide />
      <TravelYourWay />
      <Footer />
    </div>
  )
}

export default Landing

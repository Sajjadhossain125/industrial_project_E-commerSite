import React from 'react'
import Navbar from '../../components/Header/Nav'
import Adbar from '../../components/Header/TopNestedNav'
import NestedNavbar from '../../components/Header/NestedNav'
import Footer from '../../components/Footer/Footer'
import Footermain from '../../components/Footer/FooterMain'
import WelcomeSection from '../../layout/About/Welcom'
import ServiceFeatures from '../../layout/About/ServiceFeature'
import PerformanceSection from '../../layout/About/PerformanceSection'
import BottomInfoSection from '../../layout/About/BottomInfoSection'
import StatsSection from '../../layout/About/StatsSection'
import TeamSection from '../../layout/About/TeamSection'

export default function AboutPage() {
  return (
  <>
  <Adbar/>
  <Navbar/>
  <NestedNavbar/>
  <section>
  <main>
      <WelcomeSection />
      <ServiceFeatures />
      <PerformanceSection />
      <BottomInfoSection />
      <StatsSection />
      <TeamSection/>
    </main>

  </section>
  <Footer/>
  <Footermain/>
  </>
  )
}

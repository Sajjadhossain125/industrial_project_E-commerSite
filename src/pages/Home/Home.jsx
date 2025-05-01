import React from 'react'
import Adbar from '../../components/Header/TopNestedNav'
import Navbar from '../../components/Header/Nav'
import NestedNavbar from '../../components/Header/NestedNav'
import SimpleHeroCarousel from '../../components/Herosection/Carousale'
import FeaturedCategories from '../../layout/Featured'
import Footerdown from '../../components/Footer/Footer'
import Footermain from '../../components/Footer/FooterMain'
import Productcarosal from '../../layout/ProductCarousal'
import ProductGrid from '../../layout/Products'
import DailyBestSells from '../../layout/DailyBestSell'
import DealsOfTheDay from '../../layout/DealofTheDay'
import ProductShowcase from '../../components/Products/Tranding'
export default function HomePage() {
  return (
    <div>
       <Adbar/>
       <Navbar/>
       <NestedNavbar/>
       <section>
        <br />
        <SimpleHeroCarousel/>
        <br />
        <FeaturedCategories/>
        <br />
        <Productcarosal/>
        <br />
        <ProductGrid/>
        <br />
        <DailyBestSells/>
        <br />
        <DealsOfTheDay/>
        <br />
        <ProductShowcase/>
       </section>
       <Footermain/>
       <Footerdown/>

    </div>
  )
}

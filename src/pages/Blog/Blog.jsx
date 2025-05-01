import React from 'react'
import Navbar from '../../components/Header/Nav'
import Adbar from '../../components/Header/TopNestedNav'
import NestedNavbar from '../../components/Header/NestedNav'
import Footer from '../../components/Footer/Footer'
import Footermain from '../../components/Footer/FooterMain'
import CategorySidebar from '../../components/Catagories/Caragories'
import FilterSidebar from '../../components/Prices/FilterPrices'
import NewProductsSidebar from '../../components/Products/NewProducts'

export default function BlogPage() {
  return (
    <>
    <Adbar/>
      <Navbar/>
      <NestedNavbar/>
      <section>
        <CategorySidebar/>
        <br />
        <FilterSidebar/>
        <br />
        <NewProductsSidebar/>
    
      </section>
      <Footer/>
      <Footermain/>
    </>
  )
}

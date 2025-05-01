import React from 'react'
import Navbar from '../../components/Header/Nav'
import Adbar from '../../components/Header/TopNestedNav'
import NestedNavbar from '../../components/Header/NestedNav'
import Footer from '../../components/Footer/Footer'
import Footermain from '../../components/Footer/FooterMain'
import SnackBanner from '../../layout/Shope/Carousale'
import ProductShow from '../../layout/Shope/ProuductShow'
import DealsOfTheDay from '../../components/Products/Offers'
import GroceryBanner from '../../components/Banner/ShopBanner'


export default function ShopPage() {
  return (
    <>
    <Adbar/>
      <Navbar/>
      <NestedNavbar/>
      <section>
    <SnackBanner/>
    <ProductShow/>
    <br />
    <DealsOfTheDay/>
    <br />
    <GroceryBanner/>
    <br />
    
      </section>
      <Footer/>
      <Footermain/>
    
    </>
  )
}

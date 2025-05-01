import React from 'react'
import Navbar from '../../components/Header/Nav'
import Adbar from '../../components/Header/TopNestedNav'
import NestedNavbar from '../../components/Header/NestedNav'
import Footer from '../../components/Footer/Footer'
import Footermain from '../../components/Footer/FooterMain'
import YourCart from '../SubPages/CardPage'


export default function ContractPage() {
  return (
   <>
   <Adbar/>
     <Navbar/>
     <NestedNavbar/>
     <section>
        <YourCart/>
   
     </section>
     <Footer/>
     <Footermain/>
   </>
  )
}

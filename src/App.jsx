
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import ContractPage from './pages/Contract/Contract'
import HomePage from './pages/Home/Home'
import ShopPage from './pages/Shop/Shop'
import AboutPage from './pages/About/About'
import BlogPage from './pages/Blog/Blog'


function App() {


  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/shop' element={<ShopPage />} />
      <Route path='/contract' element={<ContractPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/blog' element={<BlogPage />} />
     </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App

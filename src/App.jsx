import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeIndex from './Pages/Home/HomeIndex'
import AboutIndex from './Pages/About/AboutIndex'
import ContactsIndex from './Pages/Contacts/ContactsIndex'
import ShopIndex from './Pages/Shop/ShopIndex'
import CartIndex from './Pages/Cart/CartIndex'
import ProductDetails from './Pages/Home/HomeComponents/Products/ProductDetails'
import Error from './Pages/ErrorPage/Error'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomeIndex/>} />
          <Route path='about' element={<AboutIndex/>} />
          <Route path='contacts' element={<ContactsIndex/>} />
          <Route path='shop' element={<ShopIndex/>} />
          <Route path='cart' element={<CartIndex/>} />
          <Route path='/products/:productId' element={<ProductDetails/>}/>
          <Route path='*' element={<Error/>} />
        </Routes>
      </BrowserRouter> 
    </div>
  )
}

export default App

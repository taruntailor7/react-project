import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Home } from '../Pages/Home'
import { About } from '../Pages/About'
import { ContactUs } from '../Pages/ContactUs'
import { Products } from '../Pages/Products'
import { Cart } from '../Pages/Cart'
import { Signup } from '../Pages/Signup'
import { Login } from '../Pages/Login'
import { NotFound } from '../Pages/NotFound'
import { PrivateRoute } from './PrivateRoute'
import { ProductDetails } from '../Pages/ProductDetails'
import { YourOreders } from '../Pages/YourOreders'


export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/productsDetails/:id" element={<ProductDetails />}></Route>
        <Route path="/shoppingcart" element={<PrivateRoute><Cart /></PrivateRoute>}></Route>
        <Route path="/orders" element={<PrivateRoute><YourOreders /></PrivateRoute> }></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
    </Routes>
  )
}

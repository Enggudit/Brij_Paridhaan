import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Marquee from './components/marquee'
import Nav from './components/nav'
import Home from './components/home'
import SerHis from './components/ser_his'
import About from './components/about'
import History from './components/history'
import Product from './components/product'
import Feedback from './components/feedback'
import Footer from './components/footer'
import Feedform from './pages/feedform'
import Aboutpage from './pages/abouts';
import Products from './pages/products';

function App() {
    const router = createBrowserRouter([
    {
      path: "",
      element: (
        <div className='overflow-x-hidden'>
          <Marquee />
          <Nav />
          <Home />
          <SerHis />
          <About />
          <History />
          <Product />
          <Feedback />
          <Footer />
        </div>
      ),
    },
    {
      path: "/Feedback-form",
      element: (
        <div className='overflow-hidden'>
          <Marquee />
          <Nav />
          <Feedform />
          <Feedback />
          <Footer />
        </div>
      ),
    },
    {
      path: "/products/:category/:subCategory",
      element: (
        <>
          <Marquee />
          <Nav />
          <Products />
          <Footer />
        </>
      ),
    },
    {
      path: "/AboutUs",
      element: (
        <div className='overflow-x-hidden'>
          <Marquee />
          <Nav />
          <Aboutpage />
          <Footer />
        </div>
      ),
    },
   
  ]);

  return <RouterProvider router={router} />;
}

export default App

import React, { useEffect, useState } from 'react'
import {  Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Service from '../Pages/Services/Service'
import ServiceDetails from '../components/Services/ServiceDetails/Main'
import FAQ from '../Pages/FAQ/faqs'
import Contact from '../Pages/Contact/Contact'
import NotFound from '../Pages/404/NotFound'


const Layout = () => {
    const [homepage, sethomepage] = useState(false);
    const location = useLocation();
    useEffect(() => {
      if (location.pathname === "/home"){
        sethomepage(false);
      }else{
        sethomepage(true);
      }
    }, [location]);
    
    return (
        <>
      
            {homepage && <Navbar />}
            
            <Routes>
            <Route> 
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/service-details" element={<ServiceDetails />} />
                <Route path="/faqs" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                </Route>
                <Route path='*' element={<NotFound />} />
                
            </Routes>
            <Footer />
           
           
        </>
    )
}

export default Layout
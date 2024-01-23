import React, { useEffect, useState } from 'react'
import {  Route, Routes, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar/Main'
import Footer from '../components/Footer/Main'
import Home from '../components/Pages/Home/Main'
import About from '../components/Pages/About/Main'
import Service from '../components/Pages/Services/Service/Main'
import ServiceDetails from '../components/Pages/Services/ServiceDetails/Main'
import FAQ from '../components/Pages/FAQ/Main'
import Testimonials from '../components/Pages/Testimonial/Main'
import Contact from '../components/Pages/Contact/Main'
import NotFound from '../components/Pages/404/NotFound'


const Routing = () => {
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
                <Route path="/testimonial" element={<Testimonials />} />
                <Route path="/contact" element={<Contact />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
           
           
        </>
    )
}

export default Routing
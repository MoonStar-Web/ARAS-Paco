import React, { useEffect, useState } from 'react'
import "../../App.css";
// import link
import { animateScroll as scroll } from 'react-scroll';
// import icon
import { BiChevronUp } from "react-icons/bi";

const BackButton = () => {
    const [show, setShow] = useState(false);

    useEffect(()=> {
        window.addEventListener('scroll', ()=> {
            return window.scrollY > 200 ? setShow(true) : setShow(false);
        });
    });

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

  return (

    show && (
    
        <button 
        style={{
        color: "white",
        position: "fixed",
        bottom: "50px",
        right: "50px",
        height: "50px",
        width: "50px",
        fontSize: "50px",
        borderRadius: "50px",
        zIndex: 200,
        
        }} 
        id='back-to-top' 
        className='btn btn-warning' 
        role='button'  
        onClick={() => scrollToTop()}>
        <BiChevronUp className='' 
        style={{ 
            
            position: "fixed",
            bottom: "50px",
            right: "50px",
           
         }} />
        </button>
    )

  );
};

export default BackButton;
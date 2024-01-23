import React, { useEffect, useState } from 'react'
import "../App.css";
// import link
import { animateScroll as scroll } from 'react-scroll';
// import icon
import { BsArrowUpCircleFill } from "react-icons/bs";

const BackButton = () => {
    const [show, setShow] = useState(false);

    useEffect(()=> {
        window.addEventListener('scroll', ()=> {
            return window.scrollY > 600 ? setShow(true) : setShow(false);
        });
    });

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

  return (

    show && (
    
        <button 
        style={{
        color:"blue",

        }} 
        id='back-to-top' 
        className='' 
        role='button'  
        onClick={() => scrollToTop()}>
        
        </button>
    )

  );
};

export default BackButton;
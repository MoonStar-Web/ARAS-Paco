import React from 'react';
import ImageSlider from "./ImageSlider";


function Designer() {

  const slides = [
    { url: "/a1.jpg", title: "Ambalaj Tasarım" },
    { url: "/a2.jpg", title: "Ambalaj Etüd" },
    { url: "/a3.jpg", title: "Proses İyileştirme" },
    { url: "/a4.jpg", title: "Ayıklama Rötüş" },
    { url: "/a5.jpg", title: "Ambalaj" },
  ];

  const containerStyles = {
    width: "350px",
    height: "350px",
    margin: "0 auto",
  };
    return (

      <div>
      <div style={containerStyles}>
      <ImageSlider slides={slides} parentWidth={500} />
      </div>
    </div>

    )
}

export default Designer
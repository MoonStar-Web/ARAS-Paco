
import React from 'react';
import CardGallery from "react-card-image-gallery";
import a1 from "../../../assets/images/resources/a1.jpg";
import a2 from "../../../assets/images/resources/a2.jpg";
import a3 from "../../../assets/images/resources/a3.jpg";
import a4 from "../../../assets/images/resources/a4.jpg";
import a5 from "../../../assets/images/resources/a5.jpg";


function Gallery() {
    return (
        <>
            <section className="gallery-one">
                <div className="sw-container">
                    <div className="block-title text-center">
                        <p>Galeri</p>
                        <h3>Ambalaj Tasarım</h3>
                    </div>
                    <CardGallery imagesPerPage={4}>
                    <div>
                      <img
                        src={
                          a1
                        }
                      />
                    </div>
                    <div>
                      <img src={a2} />
                    </div>
                    <div>
                      <img
                        src={
                          a3
                        }
                      />
                    </div>
                    <div>
                      <img
                        src={
                          a4
                        }
                      />
                    </div>
                    <div>
                      <img
                        src={
                          a5
                        }
                      />
                    </div>
                    <div>
                      <img
                        src={
                          "https://nationalzoo.si.edu/sites/default/files/animals/alpaca-01.jpg"
                        }
                      />
                    </div>
                    <div>
                      <img
                        src={
                          "https://www.rd.com/wp-content/uploads/2016/05/01-smart-animals-racoon.jpg"
                        }
                      />
                    </div>
                    <div>
                      <img
                        src={
                          "https://static.boredpanda.com/blog/wp-content/uploads/2014/03/cute-smiling-animals-2.jpg"
                        }
                      />
                    </div>
                  </CardGallery>
                </div>
            </section>
        </>
    )
}

export default Gallery
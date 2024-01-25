/* eslint-disable react/jsx-key */
import React from 'react'
import { Link } from 'react-router-dom'

function Offering() {
    const services = [
        {
            image: "assets/images/services/services-1-1.png",
            title: "Ahşap Ambalaj",
           
        },
        {
            image: "assets/images/services/services-1-2.png",
            title: "Karton Ambalaj ",
            
        },
        {
            image: "assets/images/services/services-1-3.png",
            title: "Metal Ambalaj",
            
        },
        {
            image: "assets/images/services/services-1-3.png",
            title: "Plastik Ambalaj",
            
        }
    ];

    return (
        <>
            <section className="service-one">
                <div className="container">
                    <div className="block-title text-center">
                        <p>Ne Sunuyoruz</p>
                        <h2>Tüm Hizmetler</h2>
                    </div>
                    <div className="row">
                        {services.map(service => (
                            <div className="col-lg-3">
                                <div className="service-one__card">
                                    <div className="service-one__image">
                                        <img src={service.image} alt="" />
                                    </div>
                                    <div className="service-one__content">
                                        <h3><Link to="/servicedetails">{service.title}</Link></h3>
                                        <p>{service.description}</p>
                                        <Link to="/servicedetails" className="pylon-icon-right-arrow service-one__link"></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Offering

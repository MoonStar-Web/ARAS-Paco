/* eslint-disable react/jsx-key */
import React from 'react'
import { Link } from 'react-router-dom'
import at from "../../../assets/images/services/servicesize.png"
import ae from "../../../assets/images/services/servicesize.png"
import pi from "../../../assets/images/services/servicesize.png"
import ar from "../../../assets/images/services/servicesize.png"


function Offering() {
    const services = [
        {
            ID: "1",
            image: at,
            title: "Ambalaj Tasarım",
           
        },
        {
            ID: "2",
            image: ae,
            title: "Ambalaj Etüd",
            
        },
        {
            ID: "3",
            image: pi,
            title: "Proses İyileştirme",
            
        },
        {
            ID: "4",
            image: ar,
            title: "Ayıklama Rotüş",
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
                            <div className="col-lg-3 col-md-6 mb-60">
                                <div className="service-one__card">
                                    <div className="service-one__image">
                                        <img src={service.image} alt="" />
                                    </div>
                                    <div className="service-one__content">
                                        <h5><Link to="/service-details">{service.title}</Link></h5>
                                        <p >{service.description}</p>
                                        <Link to="/service-details" className="aras-icon-right-arrow service-one__link"></Link>
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

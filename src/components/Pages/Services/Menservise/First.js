import React from 'react'
import { Link } from 'react-router-dom'

const services = [
    {
        imgSrc: "assets/images/services/services-1-1.png",
        title: "Ahşap Ambalaj",
        description: "There are many variations of passages of lorem ipsum available the majority have some."
    },
    {
        imgSrc: "assets/images/services/services-1-2.png",
        title: "Karton Ambalaj",
        description: "There are many variations of passages of lorem ipsum available the majority have some."
    },
    {
        imgSrc: "assets/images/services/services-1-3.png",
        title: "Metal Ambalaj",
        description: "There are many variations of passages of lorem ipsum available the majority have some."
    },
    {
        imgSrc: "assets/images/services/services-1-4.png",
        title: "Plastik Ambalaj",
        description: "There are many variations of passages of lorem ipsum available the majority have some."
    },
    {
        imgSrc: "assets/images/services/services-1-5.png",
        title: "Danışmanlık",
        description: "There are many variations of passages of lorem ipsum available the majority have some."
    },
    {
        imgSrc: "assets/images/services/services-1-6.png",
        title: "Stok Yönetimi",
        description: "There are many variations of passages of lorem ipsum available the majority have some."
    }
];

function First() {
    return (
        <>
            <section className="service-page pt-120 pb-60">
                <div className="container">
                    <div className="row">
                        {services.map((service, index) => (
                            <div className="col-lg-4 col-md-6 mb-60" key={index}>
                                <div className="service-one__card">
                                    <div className="service-one__image">
                                        <img src={service.imgSrc} alt="" />
                                    </div>
                                    <div className="service-one__content">
                                        <h3><Link to="/service-details">{service.title}</Link></h3>
                                        <p>{service.description}</p>
                                        <Link to="/service-details" className="pylon-icon-right-arrow service-one__link"></Link>
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

export default First

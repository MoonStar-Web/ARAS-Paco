import React from 'react'
import { Link } from 'react-router-dom'

const services = [
    {
        imgSrc: "assets/images/services/services-1-1.png",
        title: "Ambalaj Tasarım",
        description: "There are many variations of passages of lorem ipsum available the majority have some."
    },
    {
        imgSrc: "assets/images/services/services-1-2.png",
        title: "Ambalaj Etüd",
        description: "There are many variations of passages of lorem ipsum available the majority have some."
    },
    {
        imgSrc: "assets/images/services/services-1-3.png",
        title: "Proses İyileştirme",
        description: "There are many variations of passages of lorem ipsum available the majority have some."
    },
    {
        imgSrc: "assets/images/services/services-1-4.png",
        title: "Ayıklama Rotüş",
        description: "There are many variations of passages of lorem ipsum available the majority have some."
    },

];

function First() {
    return (
        <>
            <section className="service-page pt-120 pb-60">
                <div className="container">
                    <div className="row">
                        {services.map((service, index) => (
                            <div className="col-lg-6 col-md-6 mb-60" key={index}>
                                <div className="service-one__card">
                                    <div className="service-one__image">
                                        <img src={service.imgSrc} alt="" />
                                    </div>
                                    <div className="service-one__content">
                                        <h3><Link to="/service-details">{service.title}</Link></h3>
                                        <p>{service.description}</p>
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

export default First

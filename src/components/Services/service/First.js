import React from 'react'
import { Link } from 'react-router-dom'

const services = [
    {
        imgSrc: "assets/images/p-designer/a4.jpg",
        title: "Ambalaj Tasarım",
        description: "Daha fazlası için devam et",
        Link: "/service-packaging-design"
    },
    {
        imgSrc: "assets/images/p-designer/a1.jpg",
        title: "Ambalaj Etüd",
        description: "Daha fazlası için devam et",
        Link: "/service-packaging-study"
    },
    {
        imgSrc: "assets/images/p-designer/a3.jpg",
        title: "Proses İyileştirme",
        description: "Daha fazlası için devam et",
        Link: "/service-process-improvement"
    },
    {
        imgSrc: "assets/images/p-designer/a2.jpg",
        title: "Ayıklama & Rotüş",
        description: "Daha fazlası için devam et",
        Link: "/service-weeding-retouch"
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
                                        <Link to={service.Link} className="aras-icon-right-arrow service-one__link"></Link>
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

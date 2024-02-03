/* eslint-disable react/jsx-key */
import React from 'react'
import { Link } from 'react-router-dom'
import at from "../../../assets/images/p-designer/a1.jpg"
import ae from "../../../assets/images/p-designer/a2.jpg"
import pi from "../../../assets/images/p-designer/a3.jpg"
import ar from "../../../assets/images/p-designer/a4.jpg"
import { useTranslation } from 'react-i18next';

function Offering() {
    const { t } = useTranslation()
    const services = [
        {
            ID: "1",
            image: ar,
            title: "Ambalaj Tasarım",
            Link: "/service-packaging-design",
           
        },
        {
            ID: "2",
            image: at,
            title: "Ambalaj Etüd",
            Link: "/service-packaging-study",
            
        },
        {
            ID: "3",
            image: pi,
            title: "Proses İyileştirme",
            Link: "/service-process-improvement",
            
        },
        {
            ID: "4",
            image: ae,
            title: "Ayıklama & Rotüş",
            Link: "/service-weeding-retouch",
        }
    ];

    return (
        <>
            <section className="service-one">
                <div className="container">
                    <div className="block-title text-center">
                        <p>{t('whypre')}</p>
                        <h2>{t('allservice')}</h2>
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

export default Offering

/* eslint-disable react/jsx-key */
import React from 'react'
import { Link } from 'react-router-dom'
import at from "../../../assets/images/resources/faq-box-1-2.webp"
import ae from "../../../assets/images/resources/faq-box-1-1.webp"
import pi from "../../../assets/images/resources/process.webp"
import ar from "../../../assets/images/resources/faq-box-1-3.webp"
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
            title: "Üretim İyileştirme",
            Link: "/service-process-improvement",
            
        },
        {
            ID: "4",
            image: ae,
            title: "Üretim Planlama",
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

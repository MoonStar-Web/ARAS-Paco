import { Link }  from 'react-router-dom'
import React from 'react'
import Shape3 from "../../../assets/images/shapes/service-shape-1-3.png"
import Shape2 from "../../../assets/images/shapes/service-shape-1-2.png"
import Shape1 from "../../../assets/images/shapes/service-shape-1-1.png"
import { useTranslation } from 'react-i18next';



function Quick() {

    const { t } = useTranslation()

    return (
        <>
            <section className="service-two">
                <img src={Shape1} className="service-two__shape-1" alt="" />
                <img src={Shape2} className="service-two__shape-2" alt="" />
                <img src={Shape3} className="service-two__shape-3" alt="" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="service-two__card">
                                <i className="aras-icon-consumer-behavior"></i>
                                <h3><Link to="/">{t('Indcardtitle')}</Link></h3>
                                <p>{t('IncardDest')}</p>
                                </div>
                        </div>
                        <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="service-two__card">
                                <i className="aras-icon-point-of-sale"></i>
                                <h3><Link to="">{t('Indcardtitle2')}</Link></h3>
                                <p>{t('IncardDest2')}</p>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="service-two__card">
                                <i className="aras-icon-strategy"></i>
                                <h3><Link to="">{t('Indcardtitle3')}</Link></h3>
                                <p>{t('IncardDest3')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Quick
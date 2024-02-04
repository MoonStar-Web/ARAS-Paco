import React from "react";
import { Link } from 'react-router-dom'
import Designer from "../../Designer"
import { useTranslation } from 'react-i18next';
import faqbox from "../../../assets/images/resources/faq-box-1-3.webp"

function PDesigner() {
    const { t } = useTranslation()
  return (
    <>
    <section className="service-details faq-one">
        <div className="container">
            <div className="row">
                    <div className="col-lg-1">

                </div>
                <div className="col-lg-3">
                <br/>
                <div className="service-sidebar">
                    <div className="service-sidebar__category">
                        <h3>{t('allcatagory')}</h3>
                        <ul className="list-unstyled service-sidebar__category-list">
                            <li><Link to="/service-packaging-design">{t('packdesigner')}</Link></li>
                            <li><Link to="/service-packaging-study">{t('packetüd')}</Link></li>
                            <li><Link to="/service-process-improvement">{t('process')}</Link></li>
                            <li><Link to="/service-weeding-retouch">{t('retouch')}</Link></li>

                        </ul>
                    </div>
                    <div className="faq-one__box">
                        <img src={faqbox} className="img-fluid" alt="Ambalaj Tasarım İletişim" />
                        <div className="main-header__info">
                            <div className="main-header__info-phone">
                                <i className="aras-icon-tech-support"></i>
                                <div className="main-header__info-phone-content">
                                    <span className="text-white">{t('collanytime')}</span>
                                    <h3><Link to="tel:+905559949808">0 555 994 98 08</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="col-lg-8">
                    <div className="service-details__content">
                        <div className="service-details__image">
                        </div>
                        <h3>{t('packdesigner')}</h3>
                        <p>{t('desginerdesc')}</p>
                            <div className="row">
                            <div className="col-xl-6">
                          
                            <Designer />
                            </div>
                            <div className="col-xl-6">
                            
                                <h4>{t('desginerpros')}</h4>
                                <ul className="list-unstyled about-two__list service-details__list">
                                    <li >
                                        <i className="fa fa-check-circle"></i>
                                        {t('designerans')}
                                    </li>
                                    <li>
                                        <i className="fa fa-check-circle"></i>
                                        {t('designerans2')}
                                    </li>
                                    <li>
                                        <i className="fa fa-check-circle"></i>
                                        {t('designerans3')}
                                    </li>
                                    <li>
                                        <i className="fa fa-check-circle"></i>
                                        {t('designerans4')}
                                    </li>
                                </ul>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </section>
</>

  )
}

export default PDesigner

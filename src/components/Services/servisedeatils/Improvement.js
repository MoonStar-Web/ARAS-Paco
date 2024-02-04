import React from "react";
import { Link } from 'react-router-dom'
import Designer from "../../Designer"
import { useTranslation } from 'react-i18next';
import faqbox from "../../../assets/images/resources//process.webp"

function Improvement() {
    const { t } = useTranslation()
  return (
      
      <>
      <section className="service-details faq-one">
          <div className="container">
              <div className="row">
                      <div className="col-lg-1">

                  </div>
                  <div className="col-lg-3">
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
                          <img src={faqbox} className="img-fluid" alt="Üretim İyileştirme" />
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
                          <h3>{t('process')}</h3>
                          <p>{t('processdesc')}</p>
                          <div className="row">
                              <div className="col-xl-6">
                              <br/>
                              <Designer />
                              </div>
                              <div className="col-xl-6">
                              <br/>
                                  <h4>{t('processtitle')}</h4>
                                  <ul className="list-unstyled about-two__list service-details__list">
                                      <li>
                                          <i className="fa fa-check-circle"></i>
                                          {t('processans')}
                                      </li>
                                      <li>
                                          <i className="fa fa-check-circle"></i>
                                          {t('processans2')}
                                      </li>
                                      <li>
                                          <i className="fa fa-check-circle"></i>
                                          {t('processans3')}
                                      </li>
                                      <li>
                                          <i className="fa fa-check-circle"></i>
                                          {t('processans4')}
                                      </li>
                                      <li>
                                      <i className="fa fa-check-circle"></i>
                                      {t('processans5')}
                                  </li>
                                  <li>
                                  <i className="fa fa-check-circle"></i>
                                  {t('processans6')}
                              </li>
                              <li>
                              <i className="fa fa-check-circle"></i>
                              {t('processans7')}
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

export default Improvement

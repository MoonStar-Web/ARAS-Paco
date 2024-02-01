import { Link}  from 'react-router-dom'
import React from 'react'
import logo from '../../assets/images/logo-dark.svg';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation()
  return (
    <>
        <footer  className="site-footer">
            <div  className="container">
                <div  className="row">
                    <div  className="col-lg-5 col-md-8">
                        <div  className="footer-widget footer-widget__about">
                            <Link to="/">
                                <img src={logo} width="155" alt=""/>
                            </Link>
                            <p>{t('footerArticle')}</p>
                            <div  className="footer-widget__about-phone">
                                <i  className="aras-icon-tech-support"></i>
                                <div  className="footer-widget__about-phone-content">
                                    <span>{t('collanytime')}</span>
                                    <h3><Link to="tel:+905559949808">0 555 994 98 08</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="col-lg-2 col-md-6">
                        <div  className="footer-widget footer-widget__link">
                            <h3  className="footer-widget__title">{t('fooDiscover')}</h3>
                            <ul  className="list-unstyled footer-widget__link-list">
                                <li><Link to="/about">{t('fooabout')}</Link></li>
                                <li><Link to="/service">{t('fooservice')}</Link></li>
                                <li><Link to="/testimonial">{t('footestimonial')}</Link></li>
                                <li><Link to="/faqs">{t('foofaq')}</Link></li>
                                <li><Link to="/contact">{t('foocontact')}</Link></li>
                                
                            </ul>
                        </div>
                    </div>

                    <div  className="col-lg-4 col-md-6">
                        <div  className="footer-widget footer-widget__contact">
                            <h3>{t('foocontact')}</h3>
                            <ul  className="list-unstyled footer-widget__contact-list">
                                <li>
                                    <Link to="mailto:info@eksperendustriyel.com.tr"><i  className="aras-icon-email1"></i>info@eksperendustriyel.com.tr</Link>
                                </li>
                                <li>
                                    <Link to="#"><i  className="aras-icon-clock2"></i>{t('workday')}</Link>
                                </li>
                                <li>
                                    <Link to="https://goo.gl/maps/rLTqEpoxUoYuzsqi6" aria-label="Ambalaj tasarım, ambalaj etüt, proje destek, proses iyileştirme gibi tüm üretim aşamalarında çözüm belirleme ve devreye alma" rel="noreferrer" target="_blank"><i  className="aras-icon-pin1"></i>Balat Mah. Ali Fuat Aslanoba Sokak Andapark2 Sitesi F Blok D:4
                                    Nilüfer / Bursa,Türkiye</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div  className="bottom-footer">
            <div  className="container">
                <p>{t('fooCopyright')}</p>
                <div  className="bottom-footer__social">
                <Link to="https://www.linkedin.com/company/eksperendustriyel/" rel="noreferrer" target="_blank" className="fab fa-linkedin"></Link>
                </div>
            </div>
        </div>
        <Link to="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></Link>
    
    </>
  )
}

export default Footer
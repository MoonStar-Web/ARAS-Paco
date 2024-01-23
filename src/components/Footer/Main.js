import { Link}  from 'react-router-dom'
import React from 'react'
import logo from '../../assets/images/logo-dark.svg';

const Footer = () => {
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
                            <p>Lorem ipsum is not dolor sit amet, consect etur adi pisicing elit sed eiusmod tempor ut labore.</p>
                            <div  className="footer-widget__about-phone">
                                <i  className="pylon-icon-tech-support"></i>
                                <div  className="footer-widget__about-phone-content">
                                    <span>İstediğiniz Zaman Arayın</span>
                                    <h3><Link to="tel:+905559949808">0 555 994 98 08</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="col-lg-2 col-md-6">
                        <div  className="footer-widget footer-widget__link">
                            <h3  className="footer-widget__title">Keşfedin</h3>
                            <ul  className="list-unstyled footer-widget__link-list">
                                <li>< Link to="/about">Hakkımızda</Link></li>
                                <li>< Link to="/service">Hizmetlerimiz</Link></li>
                                <li>< Link to="/testimonial">Referanslar</Link></li>
                                <li>< Link to="/faqs">SSS</Link></li>
                                <li>< Link to="/contact">İletişim</Link></li>
                                
                            </ul>
                        </div>
                    </div>

                    <div  className="col-lg-4 col-md-6">
                        <div  className="footer-widget footer-widget__contact">
                            <h3>İletişim</h3>
                            <ul  className="list-unstyled footer-widget__contact-list">
                                <li>
                                    < Link to="mailto:info@eksperendüstriyel.com.tr"><i  className="pylon-icon-email1"></i>info@eksperendüstriyel.com.tr</Link>
                                </li>
                                <li>
                                    < Link to="#"><i  className="pylon-icon-clock2"></i>Pazartesi - Cuma 08:00 / 19:00</Link>
                                </li>
                                <li>
                                    < Link to="https://goo.gl/maps/rLTqEpoxUoYuzsqi6" aria-label="Ambalaj tasarım, ambalaj etüt, proje destek, proses iyileştirme gibi tüm üretim aşamalarında çözüm belirleme ve devreye alma" rel="noreferrer" target="_blank"><i  className="pylon-icon-pin1"></i>Balat Mah. Ali Fuat Aslanoba Sokak Andapark2 Sitesi F Blok D:4
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
                <p>© 2023 Endüstriyel Eksper. Her hakkı saklıdır!</p>
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
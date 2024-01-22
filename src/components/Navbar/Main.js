import { Link, useLocation }  from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import WOW from 'wowjs'
import logo from '../../assets/images/logo-dark.svg';
import flagtr from '../../assets/images/resources/flag-tr.svg'
import flagen from '../../assets/images/resources/flag-en.svg'

const Navbar = () => {
    const [mobile, setmobile] = useState(false)
    const [search, setsearch] = useState(false)
    const location = useLocation()
    const path = location.pathname
    const [menu, setmenu] = useState({})
    const activeMenu = () => {
        if (path === "/" || path === "/home") {
            setmenu({ home: true })
        } else if (path === "about" || path === "/about") {
            setmenu({ about: true })
        } else if (path === "/service" || path === "/service-details") {
            setmenu({ service: true })
        } 
        else if (path === "/testimonial") {
            setmenu({ service: false })
        } 
        else if(path === "/contact"){
            setmenu({contact: true})
        }else {
            setmenu({ home: true })
        }
    }

    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);

    useEffect(() => {
        window.scroll(0, 0)
        new WOW.WOW({
          live: false
        }).init();
        activeMenu()
    }, [path]);
    const isSticky = () => {
        const scrollTop = window.scrollY;
        scrollTop >= 141 ? setSticky(true) : setSticky(false);
    }

  return (
    <>
        <div className="page-wrapper">
            <header className="main-header">
                <div className="topbar">
                    <div className="container">
                        <div className="topbar__left">
                            <div className="topbar__social">
                                <Link to="https://www.linkedin.com/company/eksperendustriyel/" rel="noreferrer" target="_blank" className="fab fa-linkedin"></Link>
                            </div>
                            <Link to="/faqs">SSS</Link>
                        </div>

                        <div className="topbar__right">
                             
                            <Link to="mailto:info@eksperendüstriyel.com.tr"><i className="pylon-icon-email1"></i>info@eksperendüstriyel.com.tr</Link>
                            <Link to="#"><i className="pylon-icon-clock2"></i>Pazartesi - Cuma 08:00 / 19:00</Link>
                        </div>
                    </div>
                </div>
                <nav className={`main-menu ${sticky && "stricky-header stricked-menu stricky-fixed"}`}>
                    <div className="container">
                        <div className="logo-box">
                            <Link to="/" aria-label="logo image"><img src={logo} width="155" alt="Endüstriyel Eksper"/></Link>
                            <span onClick={() => setmobile(true)} className="fa fa-bars mobile-nav__toggler"></span>
                        </div>
                        <ul className="main-menu__list">
                            <li className={`dropdown ${menu.home && "current"}`}>
                                <Link to="/">Anasayfa</Link>
                                
                            </li>
                            <li className={`dropdown ${menu.about && "current"}`}><Link to="/about">Hakkımızda</Link> </li>
                            <li className={`dropdown ${menu.service && "current"}`}><Link to="/service">Hizmetler</Link>

                            </li>

                            <li className={`dropdown ${menu.pages && "current"}`}><Link to="/testimonial">Referanslar</Link>
                            </li>
                            <li className={`dropdown ${menu.contact && "current"}`}><Link to="/contact">İletişim</Link></li>
                        </ul>

                        <div className="main-header__info">
                            <div className="main-header__info-phone">
                                <i className="pylon-icon-tech-support"></i>
                                <div className="main-header__info-phone-content">
                                    <span>İstediğiniz Zaman Arayın</span>
                                    <h3><Link to="tel:+905559949808">0 555 994 98 08</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>

        <div  className={`mobile-nav__wrapper ${mobile ? "expanded" : ""}`}>
            <div  className="mobile-nav__overlay mobile-nav__toggler" onClick={() => setmobile(false)}></div>
            <div  className="mobile-nav__content">
                <span  className="mobile-nav__close mobile-nav__toggler" onClick={() => setmobile(false)}><i  className="far fa-times"></i></span>

                <div  className="logo-box">
                    <Link to="/" aria-label="logo image"><img src={logo} width="155" alt="Endüstriyel Eksper" /></Link>
                </div>
                <div  className="mobile-nav__container">
                    <ul className="main-menu__list">

                        <li><Link to="/" onClick={() => setmobile(false)}>Anasayfa</Link></li>
                        <li>
                        <Link to="/about" onClick={() => setmobile(false)}>Hakkımızda</Link>
                        </li>

                        <li>
                        <Link to="/service-details" onClick={() => setmobile(false)}>Hizmetler</Link> 
                        </li>

                        <li>
                        <Link to="/testimonial" onClick={() => setmobile(false)}>Referanslar</Link>
                        </li>

                        <li>
                            <Link to="/contact" onClick={() => setmobile(false)}>İletişim</Link>
                        </li>
                    </ul>
                </div>

                <ul  className="mobile-nav__contact list-unstyled">
                    <li>
                        <i  className="pylon-icon-email1"></i>
                        <Link to="mailto:info@eksperendüstriyel.com.tr">info@eksperendüstriyel.com.tr</Link>
                    </li>
                    <li>
                        <i  className="pylon-icon-telephone"></i>
                        <Link to="tel:+905559949808">0 555 994 98 08</Link>
                    </li>
                </ul>
                <div  className="mobile-nav__top">
                    <div  className="mobile-nav__language">
                        <img src={flagtr} alt=""/>
                        <label  className="sr-only" htmlFor="language-select">Dil seçin</label>
                        <select  className="selectpicker" id="language-select">
                            <option value="tr">Türkçe</option>
                            <option value="en">English</option>
                        </select>
                    </div>
                    <div  className="mobile-nav__social">
                    <Link to="https://www.linkedin.com/company/eksperendustriyel/" rel="noreferrer" target="_blank" className="fab fa-linkedin"></Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar
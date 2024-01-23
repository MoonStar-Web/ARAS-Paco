import { Link, useLocation }  from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import WOW from 'wowjs'
import logo from '../../assets/images/logo-dark.svg';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';


const Navbar = () => {

    const languages = [
        {
          code: 'TR',
          name: 'Türkçe',
          country_code: 'tr', 
        },
        {
          code: 'EN',
          name: 'English',
          country_code: 'gb',
        },
      ]
       
    const [mobile, setmobile] = useState(false)
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

    const currentLanguageCode = cookies.get('i18next') || 'tr'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation()

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
    
    useEffect(() => {
        console.log('Setting page stuff')
        document.body.dir = currentLanguage.dir || 'ltr'
      }, [currentLanguage, t])

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
                            <Link to="/faqs">{t('faq')}</Link>
                            </div>
                            <div className="topbar__right">
                            <Link to="mailto:info@eksperendüstriyel.com.tr"><i className="pylon-icon-email1"></i>info@eksperendüstriyel.com.tr</Link>
                            <Link to="#"><i className="pylon-icon-clock2"></i>{t('workday')}</Link>
                            
                            <div className="language-select">
                            <div className="d-flex justify-content-end align-items-center language-select-root">
                              <div className="dropdown">
                                <button
                                  className="btn btn-link dropdown-toggle"
                                  type="button"
                                  id="dropdownMenuButton1"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
    
                                {currentLanguageCode}
    
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                  <li>
                                    <span className="dropdown-item-text">{t('language')}</span>
                                  </li>
                                  {languages.map(({ code, name,country_code }) => (
                                    <li key={country_code}>
                                      <a
                                        href="#"
                                        className={('dropdown-item', {
                                          disabled: currentLanguageCode === code,
                                        })}
                                        onClick={() => {
                                          i18next.changeLanguage(code)
                                        }}
                                      >
                                        <span
                                        className={`flag-icon flag-icon-${country_code} mx-2`}
                                          style={{
                                            opacity: currentLanguageCode === code ? 0.5 : 1,
                                          }}
                                        ></span>
                                       {name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
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
                                <Link to="/">{t('home')}</Link>
                                
                            </li>
                            <li className={`dropdown ${menu.about && "current"}`}><Link to="/about">{t('about')}</Link> </li>
                            <li className={`dropdown ${menu.service && "current"}`}><Link to="/service">{t('services')}</Link>

                            </li>

                            <li className={`dropdown ${menu.pages && "current"}`}><Link to="/testimonial">{t('testimonial')}</Link>
                            </li>
                            <li className={`dropdown ${menu.contact && "current"}`}><Link to="/contact">{t('contact')}</Link></li>
                        </ul>

                        <div className="main-header__info">
                            <div className="main-header__info-phone">
                                <i className="pylon-icon-tech-support"></i>
                                <div className="main-header__info-phone-content">
                                    <span>{t('collanytime')}</span>
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

                        <li><Link to="/" onClick={() => setmobile(false)}>{t('home')}</Link></li>
                        <li>
                        <Link to="/about" onClick={() => setmobile(false)}>{t('about')}</Link>
                        </li>

                        <li>
                        <Link to="/service-details" onClick={() => setmobile(false)}>{t('services')}</Link> 
                        </li>

                        <li>
                        <Link to="/testimonial" onClick={() => setmobile(false)}>{t('testimonial')}</Link>
                        </li>

                        <li>
                            <Link to="/contact" onClick={() => setmobile(false)}>{t('contact')}</Link>
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
                    <div className="language-select">
                    <div className="d-flex justify-content-end align-items-center language-select-root">
                      <div className="dropdown">
                        <button
                          className="btn btn-link dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >

                        {currentLanguageCode}

                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <li>
                            <span className="dropdown-item-text">{t('language')}</span>
                          </li>
                          {languages.map(({ code, name, country_code,flag }) => (
                            <li key={country_code}>
                              <a
                                href="#"
                                className={('dropdown-item', {
                                  disabled: currentLanguageCode === code,
                                })}
                                onClick={() => {
                                  i18next.changeLanguage(code)
                                }}
                              >
                                <span
                                className={`${flag} mx-3`}
                                  style={{
                                    opacity: currentLanguageCode === code ? 0.5 : 1,
                                  }}
                                ></span>
                                {name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
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
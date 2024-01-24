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

      const GlobeIcon = ({ width = 24, height = 24 }) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          fill="currentColor"
          className="bi bi-globe"
          viewBox="0 0 16 16"
        >
          <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
        </svg>
      )

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
                            <div className="d-flex justify-content-end align-items-center language-select-root ml-3">
                              <div className="dropdown">
                                <button
                                  className="btn btn-link dropdown-toggle"
                                  type="button"
                                  id="dropdownMenuButton1"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >     

                                <GlobeIcon />

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

                        <GlobeIcon />

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
import { Link, useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import WOW from 'wowjs'

function Headertwo() {

    const [mobile, setmobile] = useState(false)
    const [sticky, setSticky] = useState(false);
    const [homeDrop, sethomeDrop] = useState(false)
    const [headerDrop, setheaderDrop] = useState(false)
    const [aboutDrop, setaboutDrop] = useState(false)
    const [servicesDrop, setservicesDrop] = useState(false)
    const [newsDrop, setnewsDrop] = useState(false)
    const [pagesDrop, setpagesDrop] = useState(false)
    const [cardDrop, setcardDrop] = useState(false)
    const [search, setsearch] = useState(false)
    const location = useLocation()
    const path = location.pathname
    const [menu, setmenu] = useState({})

    const activeMenu = () => {
        if (path === "/" || path === "/home-02") {
            setmenu({ home: true })
        } else if (path === "team" || path === "/team-details") {
            setmenu({ about: true })
        } else if (path === "/service" || path === "/service-details") {
            setmenu({ service: true })
        } else if (path === "/work" || path === "/loan-calculator" || path === "/credit-card" || path === "/faqs" || path === "/testimonial") {
            setmenu({ pages: true })
        } else if (path === "/shops" || path === "/shopdetails") {
            setmenu({ shop: true })
        } else if (path === "/news-main" || path === "/news-details") {
            setmenu({ news: true })
        }
        else if (path === "/contact") {
            setmenu({ contact: true })
        } else {
            setmenu({ home: true })
        }
    }

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
            <header className="main-header main-header__two">
                <nav className={`main-menu main-menu__two ${sticky && "stricky-header stricked-menu main-menu main-menu__two stricky-fixed"}`}>
                    <div className="container">
                        <div className="logo-box">
                            <Link to="/" aria-label="logo image"><img src="assets/images/logo-light.png" width="155" alt="" /></Link>
                            <span onClick={() => setmobile(true)} className="fa fa-bars mobile-nav__toggler"></span>
                        </div>
                        <ul className="main-menu__list">
                            <li className={`dropdown ${menu.home && "current"}`}>
                                <Link to="/">Home</Link>
                                <ul>
                                    <li>
                                        <Link to="/">Home One</Link>
                                    </li>
                                    <li><Link to="/Home-02">Home Two</Link></li>
                                    <li className={`dropdown ${menu.home && "current"}`}>
                                        <Link to="#">Header Styles</Link>
                                        <ul>
                                            <li><Link to="/">Header One</Link></li>
                                            <li><Link to="/Home-02">Header Two</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className={`dropdown ${menu.about && "current"}`}>
                                <Link to="#">About</Link>
                                <ul>
                                    <li><Link to="/team">Team</Link></li>
                                    <li><Link to="/team-details">Team Details</Link></li>
                                </ul>
                            </li>
                            <li className={`dropdown ${menu.service && "current"}`}><Link to="/service">Services</Link>
                                <ul>
                                    <li><Link to="/service">Services</Link></li>
                                    <li><Link to="/service-details">Service Details</Link></li>
                                </ul>
                            </li>
                            <li className={`dropdown ${menu.news && "current"}`}><Link to="/news-main">News</Link>
                                <ul>
                                    <li><Link to="/news-main">News</Link></li>
                                    <li><Link to="/news-details">News Details</Link></li>
                                </ul>
                            </li>
                            <li className={`dropdown ${menu.pages && "current"}`}><Link to="#">Pages</Link>
                                <ul>
                                    <li><Link to="/work">How It Works</Link></li>
                                    <li><Link to="/loan-calculator">Loan Calculator</Link></li>
                                    <li className={`dropdown ${menu.pages && "current"}`}>
                                        <Link to="/credit-card">Credit Card</Link>
                                        <ul>
                                            <li><Link to="/credit-card">Credit Card</Link></li>
                                            <li><Link to="/credit-card-details">Credit Card Details</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/faqs">FAQ</Link></li>
                                    <li><Link to="/testimonial">Testimonials</Link></li>
                                </ul>
                            </li>
                            <li className={`dropdown ${menu.contact && "current"}`}><Link to="/contact">Contact</Link></li>
                            <li className="search-btn search-toggler">
                                <Link to="#" onClick={() => setsearch(true)}><i className="pylon-icon-magnifying-glass"></i></Link>
                            </li>
                        </ul>

                        <div className="main-header__info">
                            <div className="main-header__info-phone">
                                <i className="pylon-icon-tech-support"></i>
                                <div className="main-header__info-phone-content">
                                    <span>Call Anytime</span>
                                    <h3><Link to="tel:92-666-888-0000">92 666 888 0000</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <div className={`mobile-nav__wrapper ${mobile ? "expanded" : ""}`}>
                <div className="mobile-nav__overlay mobile-nav__toggler" onClick={() => setmobile(false)}></div>
                <div className="mobile-nav__content">
                    <span className="mobile-nav__close mobile-nav__toggler" onClick={() => setmobile(false)}><i className="far fa-times"></i></span>

                    <div className="logo-box">
                        < Link to="/" aria-label="logo image"><img src="assets/images/logo-light.png" width="155" alt="" /></Link>
                    </div>
                    <div className="mobile-nav__container">
                        <ul className="main-menu__list">
                            <li className="dropdown current">
                                <Link to="#" className={homeDrop ? "expanded" : ""}>Home<button aria-label="dropdown toggler" className={homeDrop ? "expanded" : ""} onClick={() => sethomeDrop(homeDrop ? false : true)} ><i className="fa fa-angle-down"></i></button></Link>
                                {homeDrop &&
                                    <ul style={{ display: "block" }}>
                                        <li className="current">
                                            <Link to="/" onClick={() => setmobile(false)}>Home One</Link>
                                        </li>
                                        <li><Link to="/home-02" onClick={() => setmobile(false)}>Home Two</Link></li>
                                        <li className="dropdown">
                                            <Link to="#" className={headerDrop ? "expanded" : ""}>Header Styles
                                                <button aria-label="dropdown toggler" className={headerDrop ? "expanded" : ""} onClick={() => setheaderDrop(headerDrop ? false : true)}>
                                                    <i className="fa fa-angle-down"></i>
                                                </button>
                                            </Link>
                                            {headerDrop &&
                                                <ul style={{ display: "block" }}>
                                                    <li className="current"><Link to="/" onClick={() => setmobile(false)}>Header One</Link></li>
                                                    <li><Link to="/home2" onClick={() => setmobile(false)}>Header Two</Link></li>
                                                </ul>}
                                        </li>
                                    </ul>}
                            </li>

                            <li className="dropdown">
                                <Link to="#" className={aboutDrop ? "expanded" : ""}>About
                                    <button aria-label="dropdown toggler" className={aboutDrop ? "expanded" : ""} onClick={() => setaboutDrop(aboutDrop ? false : true)}>
                                        <i className="fa fa-angle-down"></i>
                                    </button>
                                </Link>
                                {aboutDrop &&
                                    <ul style={{ display: "block" }}>
                                        <li><Link to="/team" onClick={() => setmobile(false)}>Team</Link></li>
                                        <li><Link to="/team-details" onClick={() => setmobile(false)}>TeamDetails</Link></li>
                                    </ul>}
                            </li>

                            <li className="dropdown">
                                <Link to="#" className={servicesDrop ? "expanded" : ""}>Services
                                    <button aria-label="dropdown toggler" className={servicesDrop ? "expanded" : ""} onClick={() => setservicesDrop(servicesDrop ? false : true)}>
                                        <i className="fa fa-angle-down"></i>
                                    </button>
                                </Link>
                                {servicesDrop &&
                                    <ul style={{ display: "block" }}>
                                        <li><Link to="/service" onClick={() => setmobile(false)}>Service</Link></li>
                                        <li><Link to="/service-details" onClick={() => setmobile(false)}>Service Details</Link></li>
                                    </ul>}
                            </li>

                            <li className="dropdown">
                                <Link to="#" className={newsDrop ? "expanded" : ""}>News
                                    <button aria-label="dropdown toggler" className={newsDrop ? "expanded" : ""} onClick={() => setnewsDrop(newsDrop ? false : true)}>
                                        <i className="fa fa-angle-down"></i>
                                    </button>
                                </Link>
                                {newsDrop &&
                                    <ul style={{ display: "block" }}>
                                        <li><Link to="/newsmain" onClick={() => setmobile(false)}>News</Link></li>
                                        <li><Link to="/newsdetails" onClick={() => setmobile(false)}>News Details</Link></li>
                                    </ul>}
                            </li>

                            <li className="dropdown">
                                <Link to="#" className={pagesDrop ? "expanded" : ""}>Pages
                                    <button aria-label="dropdown toggler" className={pagesDrop ? "expanded" : ""} onClick={() => setpagesDrop(pagesDrop ? false : true)}>
                                        <i className="fa fa-angle-down"></i>
                                    </button>
                                </Link>
                                {pagesDrop &&
                                    <ul style={{ display: "block" }}>
                                        <li><Link to="/work" onClick={() => setmobile(false)}>How it works</Link></li>
                                        <li><Link to="/loan-calculator" onClick={() => setmobile(false)}>Loan Calculator</Link></li>
                                        <li className="dropdown">
                                            <Link to="#" className={cardDrop ? "expanded" : ""}>Credit Card
                                                <button aria-label="dropdown toggler" className={cardDrop ? "expanded" : ""} onClick={() => setcardDrop(cardDrop ? false : true)}>
                                                    <i className="fa fa-angle-down"></i>
                                                </button>
                                            </Link>
                                            {cardDrop &&
                                                <ul style={{ display: "block" }}>
                                                    <li><Link to="/credit-card" onClick={() => setmobile(false)}>Credit Card</Link></li>
                                                    <li><Link to="/credit-card-details" onClick={() => setmobile(false)}>Credit Card Details</Link></li>
                                                </ul>}
                                        </li>
                                        <li><Link to="/faqs" onClick={() => setmobile(false)}>FAQ</Link></li>
                                        <li><Link to="/testimonials" onClick={() => setmobile(false)}>Testimonials</Link></li>
                                    </ul>}
                            </li>


                            <li>
                                <Link to="/contact" onClick={() => setmobile(false)}>Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="pylon-icon-email1"></i>
                            < Link to="mailto:needhelp@azino.com">needhelp@pylon.com</Link>
                        </li>
                        <li>
                            <i className="pylon-icon-telephone"></i>
                            < Link to="tel:666-888-0000">666 888 0000</Link>
                        </li>
                    </ul>
                    <div className="mobile-nav__top">
                        <div className="mobile-nav__language">
                            <img src="assets/images/resources/flag-1-1.jpg" alt="" />
                            <label className="sr-only" htmlFor="language-select">select language</label>
                            <select className="selectpicker" id="language-select">
                                <option value="english">English</option>
                                <option value="arabic">Arabic</option>
                            </select>
                        </div>
                        <div className="mobile-nav__social">
                            < Link to="#" aria-label="twitter"><i className="fab fa-twitter"></i></Link>
                            < Link to="#" aria-label="facebook"><i className="fab fa-facebook-square"></i></Link>
                            < Link to="#" aria-label="pinterest"><i className="fab fa-pinterest-p"></i></Link>
                            < Link to="#" aria-label="instagram"><i className="fab fa-instagram"></i></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`search-popup ${search && "active"}`}>
                <div className="search-popup__overlay search-toggler" onClick={() => setsearch(false)}></div>
                <div className="search-popup__content">
                    <form action="#">
                        <label htmlFor="search" className="sr-only">search here</label>
                        <input type="text" id="search" placeholder="Search Here..." />
                        <button type="submit" aria-label="search submit" className="thm-btn">
                            <i className="fa fa-search"></i>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Headertwo
import React from 'react'
import { Link } from 'react-router-dom'

function Transparent() {
    return (
        <>
            <section className="about-two">
                <img src="assets/images/shapes/about-shape-1-1.png" className="about-two__shape-1" alt="" />
                <img src="assets/images/shapes/about-shape-1-2.png" className="about-two__shape-2" alt="" />
                <img src="assets/images/shapes/about-shape-1-3.png" className="about-two__shape-3" alt="" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-duration="1500ms">
                            <div className="about-two__image">
                                <img src="assets/images/resources/about-2-1.png" alt="" />
                                <div className="about-two__box">
                                    <i className="aras-icon-assets"></i>
                                    <h3>26 Years of Expericence</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-two__content">
                                <div className="block-title text-left">
                                    <p>Company Introductions</p>
                                    <h2>A Quick, Secure & Transparent Process</h2>
                                </div>
                                <p>There are many variations of passages of lorem ipsum available the majority have suffered alteration in some form by injected humour. Duis aute irure dolor lipsum is simply free text available in the local markets in reprehenderit.</p>
                                <ul className="list-unstyled about-two__list">
                                    <li>
                                        <i className="fa fa-check-circle"></i>
                                        We’ve less paper work
                                    </li>
                                    <li>
                                        <i className="fa fa-check-circle"></i>
                                        We offer any type of loans
                                    </li>
                                    <li>
                                        <i className="fa fa-check-circle"></i>
                                        We’ve less process fees
                                    </li>
                                    <li>
                                        <i className="fa fa-check-circle"></i>
                                        We process quickly
                                    </li>
                                </ul>
                                <div className="button-wrap">
                                    <Link to="#" className="thm-btn">Discover More</Link>
                                    <div className="main-header__info-phone">
                                        <i className="aras-icon-tech-support"></i>
                                        <div className="main-header__info-phone-content">
                                            <span>Call Anytime</span>
                                            <h3><Link to="tel:92-666-888-0000">92 666 888 0000</Link></h3>
                                        </div>
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

export default Transparent
import React from 'react'
import { Link } from 'react-router-dom'

function Offeringtwo() {
    return (
        <>
            <section className="service-one service-one__home-two">
                <img src="assets/images/shapes/service-shape-2-1.png" alt="" className="service-one__home-two__shape-1" />
                <img src="assets/images/shapes/service-shape-2-2.png" alt="" className="service-one__home-two__shape-2" />
                <img src="assets/images/shapes/service-shape-2-3.png" alt="" className="service-one__home-two__shape-3" />
                <div className="container">
                    <div className="block-title text-center">
                        <p>What We’re Offering</p>
                        <h2>All Loans Services</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                            <div className="service-one__card">
                                <div className="service-one__image">
                                    <img src="assets/images/services/services-1-1.png" alt="" />
                                </div>
                                <div className="service-one__content">
                                    <h3><Link to="/service-details">Personal Loan</Link></h3>
                                    <p>There are many variations of passages of lorem ipsum available the majority have some.</p>
                                    <Link to="/service-details" className="pylon-icon-right-arrow service-one__link"></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
                            <div className="service-one__card">
                                <div className="service-one__image">
                                    <img src="assets/images/services/services-1-2.png" alt="" />
                                </div>
                                <div className="service-one__content">
                                    <h3><Link to="/service-details">Education Loan</Link></h3>
                                    <p>There are many variations of passages of lorem ipsum available the majority have some.</p>
                                    <Link to="/service-details" className="pylon-icon-right-arrow service-one__link"></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                            <div className="service-one__card">
                                <div className="service-one__image">
                                    <img src="assets/images/services/services-1-3.png" alt="" />
                                </div>
                                <div className="service-one__content">
                                    <h3><Link to="/service-details">Business Loan</Link></h3>
                                    <p>There are many variations of passages of lorem ipsum available the majority have some.</p>
                                    <Link to="/service-details" className="pylon-icon-right-arrow service-one__link"></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Offeringtwo
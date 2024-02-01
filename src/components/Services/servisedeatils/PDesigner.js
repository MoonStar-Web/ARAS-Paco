import React from "react";
import { Link } from 'react-router-dom'
import Designer from "../../Designer"

function PDesigner() {

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
                        <h3>Tüm Katagoriler</h3>
                        <ul className="list-unstyled service-sidebar__category-list">
                            <li><Link to="/service-packaging-design">Ambalaj Tasarım</Link></li>
                            <li><Link to="/service-packaging-study">Ambalaj Etüd</Link></li>
                            <li><Link to="/service-process-improvement">Proses İyileştirme</Link></li>
                            <li><Link to="/service-weeding-retouch">Ayıklama Rötüş</Link></li>

                        </ul>
                    </div>
                    <br/>
                    <div className="faq-one__box">
                        <img src="assets/images/resources/faq-box-1-1.png" className="img-fluid" alt="" />
                        <div className="main-header__info">
                            <div className="main-header__info-phone">
                                <i className="aras-icon-tech-support"></i>
                                <div className="main-header__info-phone-content">
                                    <span>İstediğiniz Zaman Arayın</span>
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
                        <h3>Ambalaj Tasarım</h3>
                        <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum
                            quia
                            quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port
                            lacus
                            quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy
                            text
                            of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text
                            ever
                            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book.</p>
                        <p>It has survived not only five centuries. Lorem Ipsum is simply dummy text of the new design</p>
                        <div className="row">
                            <div className="col-xl-6">
                            <Designer />
                            </div>
                            <div className="col-xl-6">
                            <br />
                                <h4>Loan Requirements</h4>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                                <ul className="list-unstyled about-two__list service-details__list">
                                    <li>
                                        <i className="fa fa-check-circle"></i>
                                        Refresing to get such a personal touch
                                    </li>
                                    <li>
                                        <i className="fa fa-check-circle"></i>
                                        Duis aute irure dolor in in voluptate
                                    </li>
                                    <li>
                                        <i className="fa fa-check-circle"></i>
                                        Velit esse cillum eu fugiat pariatur
                                    </li>
                                    <li>
                                        <i className="fa fa-check-circle"></i>
                                        Duis aute irure dolor in in voluptate
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

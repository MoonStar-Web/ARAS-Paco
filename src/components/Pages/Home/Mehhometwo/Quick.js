import { Link }  from 'react-router-dom'
import React from 'react'
import Shape3 from "../../../../assets/images/shapes/service-shape-1-3.png"
import Shape2 from "../../../../assets/images/shapes/service-shape-1-2.png"
import Shape1 from "../../../../assets/images/shapes/service-shape-1-1.png"




function Quick() {

    return (
        <>
            <section className="service-two">
                <img src={Shape1} className="service-two__shape-1" alt="" />
                <img src={Shape2} className="service-two__shape-2" alt="" />
                <img src={Shape3} className="service-two__shape-3" alt="" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="service-two__card">
                                <i className="pylon-icon-consumer-behavior"></i>
                                <h3><Link to="/">Endüstriyel Çözüm</Link></h3>
                                <p>Stok yönetimi, üretim ve gönderime kadar şirketinizin ihtiyaçlarını tespit ediyor ve çözüm üretiyoruz.</p>
                                </div>
                        </div>
                        <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="service-two__card">
                                <i className="pylon-icon-point-of-sale"></i>
                                <h3><Link to="">Ekolojik Gelişim</Link></h3>
                                <p>İhtiyaç duyulan malzemeleri temin ederken sadece ekonomik değil ekolojik etkilerini de değerlendiriyoruz.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="service-two__card">
                                <i className="pylon-icon-strategy"></i>
                                <h3><Link to="">Modern Teknoloji</Link></h3>
                                <p>Yenilikçi fikirler ve yüksek teknolojili üretim araçlarımızla birlikte zamanın gerekliliklerini karşılıyoruz.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Quick
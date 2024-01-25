import React from 'react'
import WhyChoose from '../../../../assets/images/resources/why-choose-1-1.png'

function Why() {
    return (
        <>
            <section className="why-choose">
                <img src="assets/images/shapes/why-choose-shape-1-1.png" className="why-choose__shape-1" alt="" />
                <img src="assets/images/shapes/why-choose-shape-1-2.png" className="why-choose__shape-2" alt="" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="why-choose__image">
                                <p><i className="pylon-icon-investment"></i>26 yıllık iş tecrübesi</p>
                                <img src={WhyChoose} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="why-choose__content">
                                <div className="block-title text-left">
                                    <p>Avantajlarımız</p>
                                    <h2>Neden Bizi Seçmelisiniz?</h2>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="why-choose__box">
                                            <h3><i className="fa fa-caret-right"></i>Profesyonel Ekip</h3>
                                            <p>Lorem ipsum dolor sit is amet, consectetur notted.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="why-choose__box">
                                            <h3><i className="fa fa-caret-right"></i>Ödeme kolaylıkları</h3>
                                            <p>Lorem ipsum dolor sit is amet, consectetur notted.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="why-choose__progress">
                                    <div className="why-choose__progress-top">
                                        <h3>Talebe yanıt</h3>
                                        <span>99%</span>
                                    </div>
                                    <div className="why-choose__progress-bar">
                                        <span style={{ width: '99%' }} className="wow slideInLeft" data-wow-duration="1500ms"></span>
                                    </div>
                                </div>
                                <div className="why-choose__progress">
                                    <div className="why-choose__progress-top">
                                        <h3>Danışmanlık</h3>
                                        <span>99%</span>
                                    </div>
                                    <div className="why-choose__progress-bar">
                                        <span style={{ width: '99%' }} className="wow slideInLeft" data-wow-duration="1500ms"></span>
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

export default Why
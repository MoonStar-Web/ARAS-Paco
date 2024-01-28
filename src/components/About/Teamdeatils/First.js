import React from 'react'
import { Link}  from 'react-router-dom'
import about from "../../../assets/images/about/about.png"
import tec from "../../../assets/images/about/tecrübe.png"
import tecin from "../../../assets/images/about/tecinf.png"

function First() {
    return (
        <>
            <section className="team-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={about} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6">
                            <div className="team-details__content">
                                <h2>Recai Taban</h2>
                                <span>Şirket Kurucusu</span>
                                <p>1998 yılında ülkemizin en büyük otomobil üretim fabrikalarından birinde başlayan çalışma hayatı serüvenimiz 2023 yılında 25 yıllık bilgi ve birikim şirketimizin temel kuruluş dayanağı olmuştur. Üretim, kalite, ambalajlama, optimizasyon ve daha bir çok bilgiyi  ve tecrübeyi biriktirirken, yıllar sonra bunları tüm sektöre yaygınlaştırma ve paylaşıma sunma heyecanı yaşadık. Nihayet 2023 yılında aynı amaca gönül vermiş çalışma arkadaşlarımızla beraber şirketimizi hayata geçirdik.
                                En başlarda çalışmalarımız kurum içinde kalsa da daha sonra yan sanayi ve diğer ana sanayi kuruşlarıyla bilgi paylaşımı ve çalışma toplantıları yapma fırsatı bulduk. 
                                Şimdilerde her türlü ambalaj tasarımından, üretimine, üretim alanlarının yerleşiminden, çevrim zamanlarının iyileştirilmesine, ayıklama ve rötuş işlemlerinden, deniş aşırı ürün gönderiminde korozyon korumasına kadar geniş bir yelpazede sektöre hizmet etme tutkusundayız. 
                                Şirketlerin ambalajlama, yerleşim ve optimizasyon gibi yan işlerle vakit kaybetmeden ana üretim faaliyetlerine odaklanmasını sağlıyoruz. Her ürün gamında sunduğumuz bir çok seçenek ile en kaliteli ürünü en ucuza ve en kısa sürede temin edilmesini sağlıyoruz. Kısacası biz yolunuzu açıyoruz siz ilerliyorsunuz.
                                </p>
                                <div className="why-choose__progress">
                                    <div className="why-choose__progress-top">
                                        <h3>Tecrübe</h3>
                                        <span>100%</span>
                                    </div>
                                    <div className="why-choose__progress-bar">
                                        <span style={{ width: '100%' }} className="wow slideInLeft" data-wow-duration="1500ms"></span>
                                    </div>
                                </div>
   
                                <div className="team-details__certificates">
                                    <img src={tec} width={75} alt="" />
                                    <img src={tecin} width={75} alt="" />
                                </div>
                                <div className="team-details__social">
                                    <Link to="#" className="fab fa-facebook-square"></Link>
                                    <Link to="#" className="fab fa-twitter"></Link>
                                    <Link to="#" className="fab fa-pinterest-p"></Link>
                                    <Link to="#" className="fab fa-instagram"></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default First
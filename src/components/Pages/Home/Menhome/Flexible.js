import React from 'react'

function Flexible() {
    const features = [
        {
            icon: "pylon-icon-assets",
            text: "Tüm Ambalajlarda Düşük Fiyatlar"
        },
        {
            icon: "pylon-icon-verification",
            text: "99.9% Başarı Oranı Garantisi"
        },
        {
            icon: "pylon-icon-finance",
            text: "Geri Ödemelerinizde Esneklik"
        }
    ];

    return (
        <>
            <section className="feature-one">
                <img src="assets/images/shapes/feature-shape-1-1.png" alt="" className="feature-one__shape-1" />
                <img src="assets/images/shapes/feature-shape-1-2.png" alt="" className="feature-one__shape-2" />
                <img src="assets/images/shapes/feature-shape-1-3.png" alt="" className="feature-one__shape-3" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="block-title text-left">
                                <p>Hakkında Bilgi Alın</p>
                                <h2>Siz ihtiyacınızı söyleyin biz yapalım!</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <p className="block-text">Ambalaj içine konulan ürünü koruyan, en temiz ve en güvenilir koşullarda size ulaşmasını sağlayan, taşınmasını ve depolanmasını kolaylaştıran değerli bir malzemedir.</p>
                        </div>
                    </div>
                    <div className="row">
                        {features.map((feature, index) => (
                            <div className="col-lg-4" key={index}>
                                <div className="feature-one__box">
                                    <i className={feature.icon}></i>
                                    <p>{feature.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Flexible

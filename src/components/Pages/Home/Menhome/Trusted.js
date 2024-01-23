import TrustBG1 from '../../../../assets/images/shapes/trust-bg-1-1.png'
import React from 'react'
import TrustPicture from '../../../../assets/images/resources/trust-1-1.png'

function Trusted() {
    
    const boxes = [
        { id: 1, text: 'Küçük işletmeler ve büyük şirketler için çözümler' },
        { id: 2, text: 'Stok yönetiminize uygun ambalaj tasarımı' },
        { id: 3, text: 'Daha fazla ihtiyaç için bizimle iletişime geçin' }
    ];

    return (
        <section className="trusted-company">
            <div className="trusted-company__bg" style={{ backgroundImage: `url(${TrustBG1})` }}></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="trusted-company__content">
                            <div className="block-title text-left">
                                <p>Güvenilir Şirket</p>
                                <h2>İnsanların Çoğu Bize Güveniyor</h2>
                            </div>
                            <div className="trusted-company__image">
                                <img src={TrustPicture} width="155" alt="" />
                                <p>There are many variations of passages of lorem ipsum available the majority have suffered alteration in some form by injected humour. Duis aute irure dolor lipsum is simply.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="trusted-company__box-wrap">
                            {boxes.map(box => (
                                <div className="trusted-company__box" key={box.id}>
                                    <span>0{box.id}</span>
                                    <p>{box.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trusted

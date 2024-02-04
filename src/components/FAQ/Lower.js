import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import faqsss from "../../assets/images/resources/faq-sss.gif"
import { useTranslation } from 'react-i18next';


function Lower() {
    const { t } = useTranslation()

    const faqList = [
        {
            title: "Ürünlerimizi neden ambalajlamalıyız?",
            content: "Ürünü korumak, taşımak ve nihai müşteride aynı kaliteyi sağmalamak için",
        },
        {
            title: "Doğru ambalaj hangisidir?",
            content: "Ürünü koruyan, kat ettiği yola dayanaklı ve ürünü en son kullanıcıya ulaştıran ambalaj doğru ambalajdır!",
        },
        {
            title: "Ambalajlar neden çeşitlidir?",
            content: "Ürünü üretildiği kalite de korumak, taşımak ve müşteriye en uygun maliyette sunmak için çeşitli materyallerle ambalajlar yapılabilir. İşlenebilirliği kolay olması için Ahşap. Yüksek taşıma kapasitesi nedeniyle Metal. Uygun fiyat altarnatifi ve hafifliği sebebiyle Karton ambalajlar tasarlanabilir. Ayrıca farklı materyaller ile ambalajın içeriği desteklenebilir.",
        },
    ];

    const [activeFaq, setActiveFaq] = useState([true, false, false]);
    const handleAccordionClick = (index) => {
        setActiveFaq(activeFaq.map((value, i) => i === index ? !value : value));
    }
    return (
        <>
            <section className="faq-one faq-one__faq-page">
                <div className="container">
                <div className='h3'>Sıkça Sorulan Sorular</div>
                
                    <div className="row">
                        <div className="col-lg-8">

        
<br/>
                        <ul id="accordion" className="mb-0 wow fadeInUp list-unstyled" data-wow-duration="1500ms">
                        {faqList.map((faq, index) => (
                            <li key={index}>
                                <h2 className={`para-title ${activeFaq[index] && "active"}`} onClick={() => handleAccordionClick(index)}>
                                    <span className="collapsed" role="button" data-toggle="collapse" data-target={`#collapse-${index}`} aria-expanded="false" aria-controls={`collapse-${index}`}>
                                        {activeFaq[index] ? <i className="far fa-minus"></i> : <i className="far fa-plus"></i>}
                                        {faq.title}
                                    </span>
                                </h2>
                                <div id={`collapse-${index}`} className={`collapse ${activeFaq[index] ? "show" : ""}`} aria-labelledby={`collapse-${index}`} data-parent="#accordion">
                                    <p>{faq.content}</p>
                                </div>
                            </li>
                        ))}
                    </ul>



                        </div>
                        <div className="col-lg-4">
                            <div className="faq-one__box">
                                <img src={faqsss} className="img-fluid" alt="Eksper Endüstriyel - Sıkça Sorular Sorular - SSS - FAQs" />
                                <div className="main-header__info">
                                    <div className="main-header__info-phone">
                                        <i className="aras-icon-tech-support"></i>
                                        <div className="main-header__info-phone-content">
                                            <span className='text-white'>{t('collanytime')}</span>
                                            <h3><Link to="tel:+905559949808">0 555 994 98 08</Link></h3>
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

export default Lower
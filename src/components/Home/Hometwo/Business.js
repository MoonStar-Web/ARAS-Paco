import TrustBG1 from '../../../assets/images/shapes/trust-bg-1-1.png'
import React, { useState } from 'react'

function Business() {
    
    const [activeFaq, setActiveFaq] = useState([true, false, false]);

    const faqList = [
        {
            title: "İlk Soru?",
            content: "There are many variations of the have suffer in some fo injected humour, or words believable. Lorem ipsum dolor sit amet, consectetur adip isicing elit.",
        },
        {
            title: "ikinci Soru?",
            content: "There are many variations of the have suffer in some fo injected humour, or words believable. Lorem ipsum dolor sit amet, consectetur adip isicing elit.",
        },
        {
            title: "Ücüncü Soru?",
            content: "There are many variations of the have suffer in some fo injected humour, or words believable. Lorem ipsum dolor sit amet, consectetur adip isicing elit.",
        },
    ];

    const handleAccordionClick = (index) => {
        setActiveFaq(activeFaq.map((value, i) => i === index ? !value : value));
    }

    return (
        <>
            <section className="faq-one">
                <div className="faq-one__bg" style={{ backgroundImage: `url(${TrustBG1})` }}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="faq-one__content">
                                <div className="block-title text-left">
                                    <p>Ne Sunuyoruz</p>
                                    <h2>Stok yönetimi için endüstriyel tasarımlar</h2>
                                </div>
                                <p>There are many variations of passages of lorem ipsum available the majority have suffered alteration in some form by injected humour. Duis aute irure dolor lipsum is simply. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
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
                    </div>
                </div>
            </section>
        </>
    )
}

export default Business

import { Link }  from 'react-router-dom'
import SSBAR1 from '../../../assets/images/services/service-sidebar-1-1.jpg'
import React from 'react'
import Designer from '../service/Designer'



function First() {
    return (
        <>
       
            <section className="service-details faq-one">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="service-sidebar">
                                <div className="service-sidebar__category">
                                    <h3>Tüm Katagoriler</h3>
                                    <ul className="list-unstyled service-sidebar__category-list">
                                        <li><Link to="#ambalajtasarim">Ambalaj Tasarım</Link></li>
                                        <li><Link to="#">Ambalaj Etüd</Link></li>
                                        <li><Link to="#">Proses iyileştirme</Link></li>
                                        <li><Link to="#">Ayıklama Rotüş</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="service-details__content">
                                <div className='ambalajtasarim'>
                                <h3>Ambalaj Tasarım</h3>
                                <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum
                                    quia
                                    quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port
                                    lacus
                                    quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy
                                    text
                                    of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text
                                    ever.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <Designer />
                <div className="service-sidebar__call">
                <div className="service-sidebar__call-bg" style={{ backgroundImage: `url(${SSBAR1})` }}></div>
                <i className="aras-icon-tech-support"></i>
                <h3><Link to="tel:+9005336189958">0 533 618 99 58</Link></h3>
                <p>Tüm İsteklerinize Yanıt veriyoruz.</p>
            
    
                <br/>
                <div className='con-accordion'>
                <div className='col-lg-'>
                <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div className="accordion-body">
                        <strong>This is the first items accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div className="accordion-body">
                        <strong>This is the second items accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div className="accordion-body">
                        <strong>This is the third items accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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

export default First
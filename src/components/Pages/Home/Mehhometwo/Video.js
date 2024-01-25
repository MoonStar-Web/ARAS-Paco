import VBG1 from '../../../../assets/images/resources/video-1-1.jpg'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'

function Video() {

    const [ytShow, setytShow] = useState(false);
    return (
        <>
            <section className="video-one">
                <div className="container">
                    <div className="video-one__box wow fadeInUp" data-wow-duration="1500ms">
                        <div className="video-one__box-bg" style={{ backgroundImage: `url(${VBG1})` }}></div>
                        <Link to="#" onClick={() => setytShow(true)} className="video-one__btn video-popup"><i className="fa fa-play"></i></Link>
                        <h3>İş için En İyi İmkanları Sunabiliriz
                        </h3>
                    </div>
                </div>
            </section>

            {ytShow &&
                <>
                    <div className="mfp-bg mfp-fade mfp-ready" style={{ height: '7617px', position: 'absolute' }}></div>
                    <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready" tabIndex="-1" style={{ top: '3300px', position: 'absolute', height: '590px', margin: 'auto' }}>
                        <div className="mfp-container mfp-s-ready mfp-iframe-holder">
                            <div className="mfp-content">
                                <div className="mfp-iframe-scaler">
                                    <button title="Close (Esc)" type="button" className="mfp-close" onClick={() => setytShow(false)}>x</button>
                                    <iframe title='myFrame' className="mfp-iframe" src="//www.youtube.com/embed/fKjTmTVqnG8?autoplay=1" frameBorder="0" allowFullScreen=""></iframe>
                                </div>
                            </div>
                            <div className="mfp-preloader">Loading...</div>
                        </div>
                    </div>
                </>}
        </>
    )
}

export default Video
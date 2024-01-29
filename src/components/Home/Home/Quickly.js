
import ActionBG1 from '../../../assets/images/backgrounds/call-to-action-bg-1-1.jpg'
import { Link }  from 'react-router-dom'
import React from 'react'

function Quickly() {
  return (
    <>
         <section className="call-to-action" style={{ backgroundImage: `url(${ActionBG1})`}}>
            <div className="container">
                <div className="left-content">
                    <p><span>Basit</span><span>Şeffaf</span><span>Güvenli</span></p>
                    <h3>Daha ne bekliyorsun?</h3>
                </div>
                <div className="right-content">
                    <Link to="#" className="thm-btn">Tasarım için tıkla!</Link>
                </div>
            </div>
        </section>
    </>
  )
}

export default Quickly
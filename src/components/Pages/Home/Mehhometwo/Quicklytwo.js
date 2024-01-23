import ActionBG1 from '../../assets/images/backgrounds/call-to-action-bg-1-1.jpg'
import { Link }  from 'react-router-dom'
import React from 'react'

function Quicklytwo() {
    return (
        <>
            <section className="call-to-action" style={{ backgroundImage: `url(${ActionBG1})` }}>
                <div className="container">
                    <div className="left-content">
                        <p><span>Simple</span><span>Transparent</span><span>Secure</span></p>
                        <h3>Get a Business Loans Quickly</h3>
                    </div>
                    <div className="right-content">
                        <Link to="#" className="thm-btn">Apply For Loan</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Quicklytwo
/* eslint-disable react/prop-types */
import { Link}  from 'react-router-dom'
import React from 'react'
import PHBG1 from '../../assets/images/backgrounds/page-header-bg-1-1.jpg'

function Main({title, subtitle, common}) {
    return (
        <>
            <section className="page-header">
                <div className="page-header__bg" style={{ backgroundImage: `url(${PHBG1})` }}></div>
                <div className="container">
                    <ul className="thm-breadcrumb list-unstyled">
                        <li><Link to="/">{title}</Link></li>
                        <li>/</li>
                        <li><span> {subtitle}</span></li>
                    </ul>
                    <h2>{common}</h2>
                </div>
            </section>
        </>
    )
}

export default Main
import React from 'react';
import svg from "../../assets/images/404/404.svg";
import { Helmet } from 'react-helmet';
import { Link }  from 'react-router-dom';

const NotFound = () => {
  return (
    
    <div className="cont-404">
    <img src={svg} alt="page not found"/>
    <button><Link to="/">Back to Home</Link></button>
    <Helmet><title>404 || Page Not Found</title>
    <meta name='description' content='Notfound'/>
    </Helmet>
    </div>

  )
}

export default NotFound
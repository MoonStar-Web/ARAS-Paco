import React from "react";
import { BrowserRouter as Router } from "react-router-dom"
import Layout from "./Layout/Layout";
import BackButton from "./components/BackButton/BackButton";
import './assets/css/animate.min.css' 
import './assets/css/bootstrap-select.min.css'
import './assets/css/fontawesome-all.min.css'
import './assets/css/magnific-popup.css'
import './assets/css/main.css'
import './assets/css/main.css.map'
import './assets/css/nouislider.min.css'
import './assets/css/nouislider.pips.css'
import './assets/css/odometer.min.css'
import './assets/css/aras-icons.css'
import './assets/css/swiper.min.css'
import './assets/css/bootstrap-5.0.2/css/bootstrap.min.css'




export default function App() {
  return (
    <Router>
     <Layout />
      <BackButton />
    </Router>
  );
}

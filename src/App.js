import React from "react";
import { BrowserRouter as Router } from "react-router-dom"
import Routing from './routes';
import './assets/css/animate.min.css' 
import './assets/css/bootstrap-select.min.css'
import './assets/css/fontawesome-all.min.css'
import './assets/css/magnific-popup.css'
import './assets/css/main.css'
import './assets/css/main.css.map'
import './assets/css/nouislider.min.css'
import './assets/css/nouislider.pips.css'
import './assets/css/odometer.min.css'
import './assets/css/pylon-icons.css'
import './assets/css/swiper.min.css'
import BackButton from "./utils/BackButton";


export default function App() {
  return (
    <Router>
      <Routing />
      <BackButton />
    </Router>
  );
}

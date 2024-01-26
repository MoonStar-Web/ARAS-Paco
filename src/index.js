import React, { Suspense } from 'react';
import { Link }  from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';
import logo from '../../assets/images/logo-dark.svg';

const loadingMarkup = (
  <div className='py-4 text-center'>
   <Link aria-label="suspense"><img src={suspense}  alt="Endüstriyel Eksper"/></Link>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={loadingMarkup}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


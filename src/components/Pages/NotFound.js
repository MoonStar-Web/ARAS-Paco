import React from 'react'
import svg from "../../assets/images/404/404.svg";
import { Helmet } from 'react-helmet';
import Bredcom from '../../components/Bradcom/Main';

const NotFound = () => {
  return (
    
    <div className="cont-404">
    <Bredcom title={"Anasayfa"} subtitle={"404"} common={"Sayfa bulunamadı!"}/>
    <img src={svg} alt="svg" />
    <Helmet>
    <title>404</title>
    <meta name='description' content='Eksper,Endüstriyel,Etüd ve Ambalaj Tasarım 404 Sayfasi'/>
    </Helmet>
</div>

  )
}

export default NotFound
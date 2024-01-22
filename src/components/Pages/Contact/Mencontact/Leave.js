import React, { useRef  } from "react";
import emailjs from "@emailjs/browser";
import { Link}  from 'react-router-dom'
//languages
//notify
import { ToastContainer,notifySuccess, notifyError } from "../../../../utils/toast";

const Leave = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();


          emailjs.sendForm('service_4ybx73t', 'template_bx4dxy4', form.current, 'zaUCJK8HWSr4qARqG')
          .then(function(response) {
             console.log('SUCCESS!', response.status, response.text);
             notifySuccess("Mesaj başarıyla gönderildi!")
          }, function(error) {
             console.log('FAILED...', error);
             notifyError("Mesaj gönderilemedi lütfen tekrar deneyiniz!")
          });

    };

  return (
    <div>
    <section className="contact-one">
    <div className="container">
        <div className="block-title text-center">
            <p>Bizimle İletişime Geçin</p>
            <h2>Mesaj Bırakın</h2>
        </div>
        <div className="row">
            <div className="col-lg-5">
                <div className="contact-one__content">
                    <p>İhtiyacınıza yönelik bir tasarım fikrimi var? Biz ulaşın destek olalım!</p>
                    <div className="contact-one__box">
                        <i className="pylon-icon-telephone"></i>
                        <div className="contact-one__box-content">
                            <h4>İstediğiniz Zaman Arayın</h4>
                            <Link to="tel:+905559949808">0 555 994 98 08</Link>
                        </div>
                    </div>
                    <div className="contact-one__box">
                        <i className="pylon-icon-email1"></i>
                        <div className="contact-one__box-content">
                            <h4>E-posta Yazın</h4>
                            <Link to="mailto:info@eksperendüstriyel">info@eksperendüstriyel.com.tr</Link>
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-lg-7">
                <form ref={form} onSubmit={sendEmail}  className="contact-one__form">
                    <div className="row low-gutters">
                        <div className="col-md-6">
                            <input type="text" placeholder="Ad" name="from_name" required />
                        </div>
                        <div className="col-md-6">
                            <input type="email" placeholder="Eposta" name="to_email" required />
                        </div>
                        <div className="col-md-6">
                            <input type="tel" placeholder="Örnek '05559949808'" pattern="[0-9]{4}[0-9]{3}[0-9]{4}" name="phone_name" />
                        </div>
                        <div className="col-md-6">
                            <input type="text" placeholder="Konu" name="message" />
                           
                        </div>
                        <div className="col-md-12">
                            <textarea name="message" placeholder="Mesaj Yaz"></textarea>
                            <button className="thm-btn" type="submit">Mesaj Gönder</button>
                            <ToastContainer/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default Leave

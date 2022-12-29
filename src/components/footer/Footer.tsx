import React from 'react';
import './footer.scss';

import footer_logo from '../../assets/img/Logo.png';
import facebook_icon from '../../assets/icons/facebookActiv.png';
import youtube_icon from '../../assets/icons/youtubeActiv.png';
import inst_icon from '../../assets/icons/instagramActiv.png';
import linked_icon from '../../assets/icons/linkedinActiv.png';

export const Footer = () => {
  return (
    <section className="footer">
        <div className="row">
            <div className="col-1-of-4">
                <h2 className="footer__header">
                    Регистрация
                </h2>
                <div className="footer__text">
                    УНП 190738186
                    Дата государственной 
                    регистрации 20.07.2006, 
                    решение №1423 Минский горисполком
                    ООО «БелХард Девелопмент»
                </div>
            </div>
            <div className="col-1-of-4">
                <h2 className="footer__header">
                    Адрес
                </h2>
                <div className="footer__text">
                    220113,
                    Республика Беларусь
                    г. Минск, пер. Ломоносова, д. 5,
                    каб.25
                    Тел./факс +375 (29) 220-84-26 info@belhard.com
                </div>
            </div>
            <div className="col-1-of-4">
                <h2 className="footer__header">
                    Компания
                </h2>
                <div className="footer__links">
                    <div className="footer__link">
                    <a href="" className="footer__link">Преподователи</a>
                    </div>
                    <div className="footer__link">
                    <a href="" className="footer__link">Курсы</a>
                    </div>
                    <div className="footer__link">
                    <a href="" className="footer__link">Вебинары</a>
                    </div>
                    <div className="footer__link">
                    <a href="" className="footer__link">Помощь</a>
                    </div>
                </div>
            </div>
            <div className="col-1-of-4">
                <div className="footer__logo">
                    <img src={footer_logo} alt="footer logo" className="logo" />
                </div>
                <div className="footer__soclinks">
                    <div className="footer__soclink">
                        <a href="">
                        <img src={facebook_icon} alt="facebook" className="link" />
                        </a>
                    </div>
                    <div className="footer__soclink">
                        <a href="">
                        <img src={youtube_icon} alt="youtube" className="link" />
                        </a>
                    </div>
                    <div className="footer__soclink">
                        <a href="">
                        <img src={inst_icon} alt="instagram" className="link" />

                        </a>
                    </div>
                    <div className="footer__soclink">
                        <a href="">
                            <img src={linked_icon} alt="linked in" className="link" />
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

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
                    REGISTRATION
                </h2>
                <div className="footer__text">
                EASY 2 STUDY LIMITED
                Company No. 14076514
                Info@easy2study.com
                </div>
            </div>
            <div className="col-1-of-4">
                <h2 className="footer__header">
                    ADDRESS
                </h2>
                <div className="footer__text">
                EASY 2 STUDY LIMITED
                1 Knightsbridge Green
                London SW1X 7NE
                United Kingdo
                </div>
            </div>
            <div className="col-1-of-4">
                <h2 className="footer__header">
                    СOMPANY
                </h2>
                <div className="footer__links">
                    <div className="footer__link">
                    <a href="" className="footer__link">Teachers</a>
                    </div>
                    <div className="footer__link">
                    <a href="" className="footer__link">Courses</a>
                    </div>
                    <div className="footer__link">
                    <a href="" className="footer__link">Webinars</a>
                    </div>
                    <div className="footer__link">
                    <a href="" className="footer__link">Help</a>
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

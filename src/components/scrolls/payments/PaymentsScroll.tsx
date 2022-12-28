import React from 'react'
import './paymentsScroll.scss';

import visa_icon from '../../../assets/icons/visaActiv.png';
import maestro_icon from '../../../assets/icons/MaestroActiv.png';
import webpay_icon from '../../../assets/icons/WebpayActiv.png';
import webmoney_icon from '../../../assets/icons/webmoneyActiv.png';
import qiwi_icon from '../../../assets/icons/qiwiActiv.png';
import belcart_icon from '../../../assets/icons/belcartActiv.png';
import yandex_icon from '../../../assets/icons/yandexActiv.png';
import mastercard_icon from '../../../assets/icons/MasterCardActiv.png';
import payPal_icon from '../../../assets/icons/paypalActiv.png';

export const PaymentsScroll = () => {
  return (
    <section className="payments">
        <div className="payments__list">
            <div className="payments__item">
                <a href="" className="payments__link">
                    <img src={visa_icon} alt="visa" className="payments__icon" />
                </a>
            </div>
            <div className="payments__item">
                <a href="" className="payments__link">
                    <img src={maestro_icon} alt="maestro" className="payments__icon" />
                </a>
            </div>
            <div className="payments__item">
                <a href="" className="payments__link">
                    <img src={webpay_icon} alt="webpay" className="payments__icon" />
                </a>
            </div>
            <div className="payments__item">
                <a href="" className="payments__link">
                    <img src={webmoney_icon} alt="webpay" className="payments__icon" />
                </a>
            </div>
            <div className="payments__item">
                <a href="" className="payments__link">
                    <img src={qiwi_icon} alt="webpay" className="payments__icon" />
                </a>
            </div>
            <div className="payments__item">
                <a href="" className="payments__link">
                    <img src={belcart_icon} alt="webpay" className="payments__icon" />
                </a>
            </div>
            <div className="payments__item">
                <a href="" className="payments__link">
                    <img src={yandex_icon} alt="webpay" className="payments__icon" />
                </a>
            </div>
            <div className="payments__item">
                <a href="" className="payments__link">
                    <img src={mastercard_icon} alt="webpay" className="payments__icon" />
                </a>
            </div>
            <div className="payments__item">
                <a href="" className="payments__link">
                    <img src={payPal_icon} alt="webpay" className="payments__icon" />
                </a>
            </div>
        </div>
    </section>
  )
}

import React from 'react';
import './questionsScroll.scss';

import name_icon from '../../../assets/icons/person_icon.png';
import email_icon from '../../../assets/icons/mail_icon.png';
import email_icon_btn from '../../../assets/icons/SVG/envelop.svg';
import ok_mark_icon from '../../../assets/icons/ok_mark_icon.png';


export const QuestionsScroll = () => {
  return (
    <section className="questions">

        <div className="questions__wrapper">
            <div className="questions__content">

                <h1 className="questions__header main-header-big">
                Остались <span className='bg__border'>Вопросы?</span>
                </h1>

                <div className="questions__form">

                    <form action="#" method='post' className="form__main">
                        <div className="form">
                            <div className={'form__group'}>
                                <img className='form__image' src={name_icon} alt="name" />
                                <input 
                                    type="text" 
                                    className="form__input" 
                                    required
                                />
                            </div>

                            <div className={'form__group'}>
                                <img className='form__image' src={email_icon} alt="email" />
                                <input 
                                    type="email" 
                                    className="form__input" 
                                    required
                                />
                            </div>

                            <div className="form__group">
                                <img className='form__image' src={email_icon} alt="text"/>
                                <input type="text" className="form__input" id="text" value="Введите ваше сообщение"/>
                            </div>
                        </div>
                        
                        <button className='form__button' type='submit'> 
                            <img className='form__button--img' src={email_icon_btn} alt="btn icon"/> 
                            <p className='form__button--text'>Отправить</p> 
                        </button>
                    </form>

                    <div className="questions__addition">
                        <div className="questions__addition--ok">
                            <img src={ok_mark_icon} alt="ok marker"/>
                        </div>
                        <p className="questions__addition--text">Ответим Вам в течении рабочего дня</p>
                    </div>
                    
                </div>
            </div>
            <div className="questions__message">
                    
            </div>
        </div>
    </section>
  )
}

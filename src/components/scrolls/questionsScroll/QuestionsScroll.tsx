import React, { useEffect, useState } from 'react';
import './questionsScroll.scss';

import name_icon from '../../../assets/icons/person_icon.png';
import email_icon from '../../../assets/icons/mail_icon.png';
// import email_white_icon from '../../../assets/icons/white_mail.png';
import email_icon_btn from '../../../assets/icons/SVG/envelop.svg';
import ok_mark_icon from '../../../assets/icons/ok_mark_icon.png';
import { Button } from '../../elements/Buttons/Button';


export const QuestionsScroll = () => {
    const [name, setName] = useState('Имя')
    const [email, setEmail] = useState('email')
    const [nameTriggered, setNameTriggered] = useState(false)
    const [emailTriggered, setEmailTriggered] = useState(false)
    const [nameError, setNameError] = useState('Укажите своё имя')
    const [emailError, setEmailError] = useState('Укажите корректный Email')
    const [formValid, setFormValid] = useState(false)
    const [formIsWritten, setFormIsWrittedn] = useState(false)


    const styleTriggered = formIsWritten ? '--written' : '';


    useEffect(() => {
        if (emailError || nameError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, nameError])


    const emailHandler = (e: any) => {
        setEmail(e.target.value)
        setFormIsWrittedn(true)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLocaleLowerCase())) {
            setEmailError('Укажите корректный Email')
        } else {
            setEmailError('')
        }
    }

    const nameHandler = (e: any) => {
        setName(e.target.value)
        setFormIsWrittedn(true)
        const rn = /^[a-zA-Z ]{2,30}$/;
        if (!rn.test(String(e.target.value).toLocaleLowerCase())) {
            // setName(nameError)
        } else {
            setName(e.target.value)
        }
    }

    const handleFocus = (e: any) => {
        e.target.value = ''
    }

    const blurHandler = (e: any) => {
        switch(e.target.name) {
            case 'email':
                setEmailTriggered(true)
                break;
            case 'name':
                setNameTriggered(true)
                break;
        }
    }
  return (
    <section className="questions">

        <div className="questions__wrapper">
            <div className="questions__content">

                <h1 className="questions__header main-header-big">
                Остались <span className='main-text-goldeffect'>Вопросы?</span>
                </h1>

                <div className="questions__form">

                    <form action="#" method='post' className="form__main">
                        <div className="form">
                            <div className={'form__group' + styleTriggered}>
                                <img className='form__image' src={name_icon} alt="name" />
                                <input 
                                    type="text" 
                                    onBlur={e => blurHandler(e)} 
                                    onFocus={handleFocus}
                                    onChange={e => nameHandler(e)} 
                                    className="form__input" 
                                    id="name" 
                                    name="name" 
                                    value={name} 
                                    required
                                />
                            </div>

                            <div className={'form__group' + styleTriggered}>
                                <img className='form__image' src={email_icon} alt="email" />
                                <input 
                                    type="email" 
                                    onBlur={e => blurHandler(e)} 
                                    onChange={e => emailHandler(e)}
                                    onFocus={handleFocus} 
                                    className="form__input" 
                                    id="email" 
                                    name="email"
                                    value={email} 
                                    required
                                />
                            </div>

                            <div className="form__group">
                                <img className='form__image' src={email_icon} alt="text"/>
                                <input type="text" onFocus={handleFocus} className="form__input" id="text" value="Введите ваше сообщение"/>
                            </div>
                        </div>
                        
                        <button className='form__button' type='submit' disabled={!formValid}> 
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

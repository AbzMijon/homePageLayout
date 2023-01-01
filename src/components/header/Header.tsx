import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

import Logo from '../../assets/img/Logo.png';
import { ImCross } from 'react-icons/im';

export const Header = () => {

    const [burger, setBurger] = useState(false);

    return (
        <header className="header">
            <div className="header__logo">
                <img className='header__logo--img' src={Logo} alt="Logo"/>
            </div>
            <div className="header__burger" onClick={() => setBurger(!burger)}>
                <span className={burger ? "burger__line burger__line--active" : "burger__line"}></span>
            </div>
            {burger &&
                <nav className="header__navigation-hidden">
                    <div className="header__burger" onClick={() => setBurger(!burger)}>
                        <ImCross className='header__cross'/>
                    </div>
                    <ul className="header__list-hidden">
                        <li className="header__item-hidden"><Link to="#" className="header__link-hidden">Сareer</Link></li>
                        <li className="header__item-hidden"><Link to="#" className="header__link-hidden">Easy School</Link></li>
                        <li className="header__item-hidden"><Link to="#" className="header__link-hidden">Easy Business </Link></li>
                    </ul>
                    <div className="header__log-hidden">
                        <div className="header__log-in--hidden">Log in</div>
                        <div className="header__sign-up--hidden">Sign up</div>
                    </div>
                </nav> 
            }
            <nav className="header__navigation">
                <ul className="header__list">
                    <li className="header__item"><Link to="#" className="header__link">Сareer</Link></li>
                    <li className="header__item"><Link to="#" className="header__link">Easy School</Link></li>
                    <li className="header__item"><Link to="#" className="header__link">Easy Business </Link></li>
                </ul>
                <div className="header__log">
                    <div className="header__log-in">Log in</div>
                    <div className="header__sign-up">Sign up</div>
                </div>
            </nav>  
        </header>
    )
}

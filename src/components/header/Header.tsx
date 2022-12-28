import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

import Logo from '../../assets/img/Logo.png';

export const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img className='header__logo--img' src={Logo} alt="Logo"/>
            </div>
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

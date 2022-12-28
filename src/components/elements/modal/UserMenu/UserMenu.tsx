import React from 'react';
import { Link } from 'react-router-dom';

import profile_icon from '../../../../assets/icons/menu_profile_icon.png';
import message_icon from '../../../../assets/icons/menu_messages_on_icon.png';
import lessons_icon from '../../../../assets/icons/menu_lessons_icon.png';
import app_icon from '../../../../assets/icons/menu_app_icon.png';
import help_icon from '../../../../assets/icons/menu_app_icon.png';
import settings_icon from '../../../../assets/icons/menu_settings_icon.png';
import logout_icon from '../../../../assets/icons/menu_logout_icon.png';



import './userMenu.scss';

type Props = {
    isActive: boolean
    setMenuActive: any
}

export const UserMenu = (props: Props) => {
    const { isActive, setMenuActive} = props;
  return (
    <div onAbort={() => setMenuActive(false)} className= {isActive ? 'user-menu active' : 'user-menu'}>
        <ul className="user-menu__list" onClick={(e) => e.stopPropagation()}>
            <li className="user-menu__item">
                <div className="user-menu__groupbox">
                <div className="user-menu__img">
                        <img src={profile_icon} alt="profile" className="user-icon" />
                    </div>
                    <Link to={'#'} className="user-menu__link"> Профиль </Link>
                </div>
            </li>
            <li className="user-menu__item">
                <div className="user-menu__groupbox">
                <div className="user-menu__img">
                        <img src={message_icon} alt="profile" className="user-icon" />
                    </div>
                    <Link to={'#'} className="user-menu__link"> Сообщения </Link>
                </div>
            </li>
            <li className="user-menu__item">
                <div className="user-menu__groupbox">
                <div className="user-menu__img">
                        <img src={lessons_icon} alt="profile" className="user-icon" />
                    </div>
                    <Link to={'#'} className="user-menu__link"> Уроки </Link>
                </div>
            </li>
            <li className="user-menu__item">
                <div className="user-menu__groupbox">
                <div className="user-menu__img">
                        <img src={app_icon} alt="profile" className="user-icon" />
                    </div>
                    <Link to={'#'} className="user-menu__link"> Приложение </Link>
                </div>
            </li>
            <li className="user-menu__item">
                <div className="user-menu__groupbox">
                <div className="user-menu__img">
                        <img src={help_icon} alt="profile" className="user-icon" />
                    </div>
                    <Link to={'#'} className="user-menu__link"> Вопросы </Link>
                </div>
            </li>
            <li className="user-menu__item">
                <div className="user-menu__groupbox">
                <div className="user-menu__img">
                        <img src={settings_icon} alt="profile" className="user-icon" />
                    </div>
                    <Link to={'#'} className="user-menu__link"> Настройки </Link>
                </div>
            </li>
            <li className="user-menu__item">
                <div className="user-menu__groupbox">
                    <div className="user-menu__img">
                        <img src={logout_icon} alt="profile" className="user-icon" />
                    </div>

                    <Link to={'#'} className="user-menu__link"> Выйти </Link>
                </div>
            </li>

        </ul>
    </div>
  )
}

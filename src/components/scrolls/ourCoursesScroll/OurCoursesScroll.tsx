import React from 'react'
import { CoursesCard } from '../../elements/coursesCard/CoursesCard';
import './ourCoursesScroll.scss';

import lectorAvatar from '../../../assets/img/avatar_lector.png';
import right_chevron from '../../../assets/icons/SVG/chevron-thin-right.svg';
import rating_icon from '../../../assets/icons/star_icon.png';


export const OurCoursesScroll = () => {
  return (
    <section className="our-courses">
        <h1 className="our-courses__header main-header-big">
            Наши <span className='bg__border'>Курсы</span>
        </h1>
        <div className="our-courses__cards">
            <ul className="list">
                <li>
                    <div className="card">
                        <CoursesCard 
                        title={'Подготовки к ОГЭ'} 
                        subject={'математика 9 класс'} 
                        timeplan={'10 уроков по 40 минут'} 
                        lectorAvatar={lectorAvatar} 
                        lector={'Ольга Малова'} 
                        rating={5} 
                        price={'129'} 
                        rating_icon={rating_icon} 
                        icon_btn={right_chevron}/>
                    </div>
                </li>
                <li>
                    <div className="card">
                        <CoursesCard 
                        title={'Подготовки к ОГЭ'} 
                        subject={'математика 9 класс'} 
                        timeplan={'10 уроков по 40 минут'} 
                        lectorAvatar={lectorAvatar} 
                        lector={'Ольга Малова'} 
                        rating={5} 
                        price={'129'} 
                        rating_icon={rating_icon} 
                        icon_btn={right_chevron}/>
                    </div>
                </li>
                <li>
                    <div className="card">
                        <CoursesCard 
                        title={'Подготовки к ОГЭ'} 
                        subject={'математика 9 класс'} 
                        timeplan={'10 уроков по 40 минут'} 
                        lectorAvatar={lectorAvatar} 
                        lector={'Ольга Малова'} 
                        rating={5} 
                        price={'129'} 
                        rating_icon={rating_icon} 
                        icon_btn={right_chevron}/>
                    </div>
                </li>                
                <li>
                    <div className="card">
                        <CoursesCard 
                        title={'Подготовки к ОГЭ'} 
                        subject={'математика 9 класс'} 
                        timeplan={'10 уроков по 40 минут'} 
                        lectorAvatar={lectorAvatar} 
                        lector={'Ольга Малова'} 
                        rating={5} 
                        price={'129'} 
                        rating_icon={rating_icon} 
                        icon_btn={right_chevron}/>
                    </div>
                </li>                
                <li>
                    <div className="card">
                        <CoursesCard 
                        title={'Подготовки к ОГЭ'} 
                        subject={'математика 9 класс'} 
                        timeplan={'10 уроков по 40 минут'} 
                        lectorAvatar={lectorAvatar} 
                        lector={'Ольга Малова'} 
                        rating={5} 
                        price={'129'} 
                        rating_icon={rating_icon} 
                        icon_btn={right_chevron}/>
                    </div>
                </li>                
                <li>
                    <div className="card">
                        <CoursesCard 
                        title={'Подготовки к ОГЭ'} 
                        subject={'математика 9 класс'} 
                        timeplan={'10 уроков по 40 минут'} 
                        lectorAvatar={lectorAvatar} 
                        lector={'Ольга Малова'} 
                        rating={5} 
                        price={'129'} 
                        rating_icon={rating_icon} 
                        icon_btn={right_chevron}/>
                    </div>
                </li>                
            </ul>
        </div> 
    </section>
  )
}

import React, { useState, useEffect } from 'react'
import { CoursesCard } from '../../elements/coursesCard/CoursesCard';
import './ourCoursesScroll.scss';

import lectorAvatar from '../../../assets/img/avatar_lector.png';
import right_chevron from '../../../assets/icons/SVG/chevron-thin-right.svg';
import rating_icon from '../../../assets/icons/star_icon.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export const OurCoursesScroll = () => {

    const [windowWidth, setWindowWidth] = useState<any>(null);
    console.log(windowWidth);
    
    useEffect(() => {
        setWindowWidth(window.innerWidth);
    }, [window.innerWidth]);

  return (
    <section className="our-courses">
        <h1 className="our-courses__header main-header-big">
            Наши <span className='bg__border'>Курсы</span>
        </h1>
        <div className="our-courses__cards">
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 45
                    },
                    540: {
                        slidesPerView: 1.5,
                        spaceBetween: 45
                    },
                    870: {
                        slidesPerView: 2.5,
                        spaceBetween: 25
                    },
                    1150: {
                        slidesPerView: 3.5,
                        spaceBetween: 35
                    },
                    1600: {
                        slidesPerView: 3.5,
                        spaceBetween: 45
                    },
                    1700: {
                        slidesPerView: 4.5,
                        spaceBetween: 45
                    },
                    1920: {
                        slidesPerView: 5.5,
                        spaceBetween: 45
                    },
                }}
            >
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
            </Swiper>
        </div> 
    </section>
  )
}

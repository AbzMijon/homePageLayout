import React, { useEffect, useRef, useState } from 'react'
import { CoursesCard } from '../../elements/coursesCard/CoursesCard';
import './ourCoursesScroll.scss';

import debounce from "lodash.debounce";
import cn from "classnames";


import lectorAvatar from '../../../assets/img/avatar_lector.png';
// import More_icon from '../../../assets/icons/More_icon.png';
import right_chevron from '../../../assets/icons/SVG/chevron-thin-right.svg';
import rating_icon from '../../../assets/icons/star_icon.png';


export const OurCoursesScroll = () => {
    const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
    const [canScrollRight, setCanScrollRight] = useState<boolean>(false);
  
    const containerRef = useRef<HTMLUListElement>(null);

    const checkForScrollPosition = () => {
        const { current } = containerRef;
        if (current) {
          const { scrollLeft, scrollWidth, clientWidth } = current;
          setCanScrollLeft(scrollLeft > 0);
          setCanScrollRight(scrollLeft !== scrollWidth - clientWidth);
        }
    };

    const debounceCheckForScrollPosition = debounce(checkForScrollPosition, 200);

    const scrollContainerBy = (distance: number) =>
    containerRef.current?.scrollBy({ left: distance, behavior: "smooth" });

    useEffect(() => {
        const { current } = containerRef;
        checkForScrollPosition();
        current?.addEventListener("scroll", debounceCheckForScrollPosition);
    
        return () => {
          current?.removeEventListener("scroll", debounceCheckForScrollPosition);
          debounceCheckForScrollPosition.cancel();
        };
      }, [debounceCheckForScrollPosition]);

  return (

    <section className="our-courses">
        <h1 className="our-courses__header main-header-big">
            Наши <span className='main-text-goldeffect'>Курсы</span>
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
            <button
                type="button"
                disabled={!canScrollLeft}
                onClick={() => scrollContainerBy(-400)}
                className={cn("button", "buttonLeft", {
                "button--hidden": !canScrollLeft
                })}
            >
                ←
            </button>
            <button
                type="button"
                disabled={!canScrollRight}
                onClick={() => scrollContainerBy(400)}
                className={cn("button", "buttonRight", {
                "button--hidden": !canScrollRight
                })}
            >
             →
            </button>
            {canScrollLeft ? (
                <div className="shadowWrapper leftShadowWrapper">
                <div className="shadow leftShadow" />
                </div>
            ) : null}
            {canScrollRight ? (
                <div className="shadowWrapper rightShadowWrapper">
                <div className="shadow rightShadow" />
                </div>
            ) : null}

            {/* <div className="card">
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
            </div> */}
        </div> 

        
    </section>
  )
}

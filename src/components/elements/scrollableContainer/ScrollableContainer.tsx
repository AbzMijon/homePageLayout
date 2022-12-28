import React, { useEffect, useRef, useState } from 'react';
import debounce from "lodash.debounce";
import cn from "classnames";

import './scrollableContainer.scss';
import { CoursesCard } from '../coursesCard/CoursesCard';
import lectorAvatar from '../../../assets/img/avatar_lector.png';
// import More_icon from '../../../assets/icons/More_icon.png';
import right_chevron from '../../../assets/icons/SVG/chevron-thin-right.svg';
import rating_icon from '../../../assets/icons/star_icon.png';

type Props = {
  element: any
}


export const ScrollableContainer = (props: Props) => {

  const {element} = props;

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
    <div className="scrollableContainer">
      <ul className="list" ref={containerRef}>
        <li className="item">1</li>
        <li className="item">2</li>
        <li className="item">3</li>
        <li className="item">4</li>
        <li className="item">5</li>
        <li className="item">6</li>
        <li className="item">7</li>


          {/* <CoursesCard 
          title={'Подготовки к ОГЭ'} 
          subject={'математика 9 класс'} 
          timeplan={'10 уроков по 40 минут'} 
          lectorAvatar={lectorAvatar} 
          lector={'Ольга Малова'} 
          rating={5} 
          price={'129'} 
          rating_icon={rating_icon} 
          icon_btn={right_chevron}/>
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
          <CoursesCard 
          title={'Подготовки к ОГЭ'} 
          subject={'математика 9 класс'} 
          timeplan={'10 уроков по 40 минут'} 
          lectorAvatar={lectorAvatar} 
          lector={'Ольга Малова'} 
          rating={5} 
          price={'129'} 
          rating_icon={rating_icon} 
          icon_btn={right_chevron}/> */}

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
    </div>
  )
}

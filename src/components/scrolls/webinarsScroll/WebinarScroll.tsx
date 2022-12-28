import React, { useEffect, useRef, useState } from 'react';
import './webinarScroll.scss';

import debounce from "lodash.debounce";
import cn from "classnames";


import { WebinarCard } from '../../elements/webinarCard/WebinarCard';
import rating_icon from '../../../assets/icons/star_icon.png';

import preview_1 from '../../../assets/img/preview-1.png';
import logged_icon_1 from '../../../assets/icons/Loged_icon_webinar.png';

import preview_2 from '../../../assets/img/preview-2.png';
import logged_icon_2 from '../../../assets/icons/Loged_icon_webinar_1.png';


import preview_3 from '../../../assets/img/preview-3.png';
import logged_icon_3 from '../../../assets/icons/Loged_icon_webinar_2.png';

export const WebinarScroll = () => {
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
    <section className="webinar">
        <h1 className="webinar__header main-header-big">
        Лучшие <span className='main-text-goldeffect'>Вебинары</span>
        </h1>
        <div className="webinar__videos">
          <ul className="list">
            <li>
              <WebinarCard 
                key={1} 
                title={'10 минут о профессии Ux/UX дизайнер'} 
                preview={preview_1} 
                rating={5} 
                timeline={'10:00'} 
                postedAt={'25'} 
                rating_icon={rating_icon} 
                lector_avatar={logged_icon_1}
              />
            </li>

            <li>
              <WebinarCard 
                key={1} 
                title={'10 минут о профессии Ux/UX дизайнер'} 
                preview={preview_1} 
                rating={5} 
                timeline={'10:00'} 
                postedAt={'25'} 
                rating_icon={rating_icon} 
                lector_avatar={logged_icon_1}
              />
            </li>

            <li>
              <WebinarCard 
                key={1} 
                title={'10 минут о профессии Ux/UX дизайнер'} 
                preview={preview_1} 
                rating={5} 
                timeline={'10:00'} 
                postedAt={'25'} 
                rating_icon={rating_icon} 
                lector_avatar={logged_icon_1}
              />
            </li>
            <li>
              <WebinarCard 
                key={1} 
                title={'10 минут о профессии Ux/UX дизайнер'} 
                preview={preview_1} 
                rating={5} 
                timeline={'10:00'} 
                postedAt={'25'} 
                rating_icon={rating_icon} 
                lector_avatar={logged_icon_1}
              />
            </li>
            <li>
              <WebinarCard 
                key={1} 
                title={'10 минут о профессии Ux/UX дизайнер'} 
                preview={preview_1} 
                rating={5} 
                timeline={'10:00'} 
                postedAt={'25'} 
                rating_icon={rating_icon} 
                lector_avatar={logged_icon_1}
              />
            </li>
            <li>
              <WebinarCard 
                key={1} 
                title={'10 минут о профессии Ux/UX дизайнер'} 
                preview={preview_1} 
                rating={5} 
                timeline={'10:00'} 
                postedAt={'25'} 
                rating_icon={rating_icon} 
                lector_avatar={logged_icon_1}
              />
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
            {/* <WebinarCard key={1} title={'10 минут о профессии Ux/UX дизайнер'} preview={preview_1} rating={5} timeline={'10:00'} postedAt={'25'} rating_icon={rating_icon} lector_avatar={logged_icon_1}/>
            <WebinarCard key={2} title={'10 минут о профессии Ux/UX дизайнер'} preview={preview_2} rating={4} timeline={'10:00'} postedAt={'30'} rating_icon={rating_icon} lector_avatar={logged_icon_2}/>
            <WebinarCard key={3} title={'10 минут о профессии Ux/UX дизайнер'} preview={preview_3} rating={3} timeline={'10:00'} postedAt={'40'} rating_icon={rating_icon} lector_avatar={logged_icon_3}/>
            <WebinarCard key={4} title={'10 минут о профессии Ux/UX дизайнер'} preview={preview_1} rating={5} timeline={'10:00'} postedAt={'25'} rating_icon={rating_icon} lector_avatar={logged_icon_1}/>
            <WebinarCard key={5} title={'10 минут о профессии Ux/UX дизайнер'} preview={preview_2} rating={4} timeline={'10:00'} postedAt={'30'} rating_icon={rating_icon} lector_avatar={logged_icon_2}/>
            <WebinarCard key={6} title={'10 минут о профессии Ux/UX дизайнер'} preview={preview_3} rating={3} timeline={'10:00'} postedAt={'40'} rating_icon={rating_icon} lector_avatar={logged_icon_3}/>
            <WebinarCard key={6} title={'10 минут о профессии Ux/UX дизайнер'} preview={preview_3} rating={3} timeline={'10:00'} postedAt={'40'} rating_icon={rating_icon} lector_avatar={logged_icon_3}/> */}
        </div>
    </section>
  )
}

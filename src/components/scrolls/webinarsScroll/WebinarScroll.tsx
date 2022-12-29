import React, { useEffect, useRef, useState } from 'react';
import './webinarScroll.scss';

import debounce from "lodash.debounce";
import cn from "classnames";
import { WebinarCard } from '../../elements/webinarCard/WebinarCard';
import rating_icon from '../../../assets/icons/star_icon.png';
import preview_1 from '../../../assets/img/preview-1.png';
import logged_icon_1 from '../../../assets/icons/Loged_icon_webinar.png';

export const WebinarScroll = () => {
  return (
    <section className="webinar">
        <h1 className="webinar__header main-header-big">
        Лучшие <span className='bg__border vebinar-border'>Вебинары</span>
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
                key={2} 
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
                key={3} 
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
                key={4} 
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
                key={5} 
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
                key={6} 
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
        </div>
    </section>
  )
}

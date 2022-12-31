import React, { useEffect, useRef, useState } from 'react';
import './webinarScroll.scss';

import { WebinarCard } from '../../elements/webinarCard/WebinarCard';
import rating_icon from '../../../assets/icons/star_icon.png';
import preview_1 from '../../../assets/img/preview-1.png';
import logged_icon_1 from '../../../assets/icons/Loged_icon_webinar.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const WebinarScroll = () => {
  return (
    <section className="webinar">
        <h1 className="webinar__header main-header-big">
        Лучшие <span className='bg__border vebinar-border'>Вебинары</span>
        </h1>
        <div className="webinar__videos">
          <Swiper
            breakpoints={{
              0: {
                  slidesPerView: 1,
                  spaceBetween: 45
              },
              585: {
                  slidesPerView: 1.5,
                  spaceBetween: 45
              },
              950: {
                  slidesPerView: 2.5,
                  spaceBetween: 25
              },
              1320: {
                  slidesPerView: 3.5,
                  spaceBetween: 35
              },
              1600: {
                  slidesPerView: 3.5,
                  spaceBetween: 45
              },
              1920: {
                  slidesPerView: 4.5,
                  spaceBetween: 45
              },
              2023: {
                slidesPerView: 5.5,
                spaceBetween: 45
              }
          }}
          >
              <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
        </Swiper>
        </div>
    </section>
  )
}

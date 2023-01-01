import React from 'react';
import { Button } from '../../elements/Buttons/Button';
import { LectorCard } from '../../elements/lectorCard/LectorCard';
import './bestLectorsScroll.scss';
import right_chevron from '../../../assets/icons/SVG/chevron-thin-right.svg';
import star_icon from '../../../assets/icons/star_icon.png';
import best_lector_1 from '../../../assets/icons/best_lector_1.png';
import best_lector_2 from '../../../assets/icons/best_lector_2.png';
import best_lector_3 from '../../../assets/icons/best_lector_3.png';

export const BestLectorsScroll = () => {
  return (
    <section className="best-lectors">
      <div className="best-lectors__wrapper">
        <div className="best-lectors__col--1">
          <h2 className="best-lectors__header main-header-big"><span className='bg__border'>Преподаватели</span> Месяца</h2>

          <div className="best-lectors__col--1__btn_and_card">
            <div className="best-lectors-btn">
              <Button icon={right_chevron} title='Подробнее'/>
            </div>
            <div className="best-lectors__col--1__firstcard best-lector__card">
              <LectorCard
                key={1} 
                lector={'Желудь Виктор Павлович'} 
                lectoravatar={best_lector_1} 
                rating={'4.9'} 
                rating_icon={star_icon} 
                subjects={['Английский', 'Итальянский', 'Французский']}
                width={'2'}
              />
            </div>
          </div>

          <div className="best-lectors__col--1__lastcard best-lector__card">
            <LectorCard 
              key={2} 
              lector={'Желудь Виктор Павлович'} 
              lectoravatar={best_lector_2} 
              rating={'4.9'} 
              rating_icon={star_icon} 
              subjects={['Английский', 'Итальянский', 'Французский']}
              width={'200'}
            />
          </div>
        </div>

        <div className="best-lectors__col--2">
          <div className="best-lectors__col--2__first best-lector__card">
            <LectorCard 
              key={3} 
              lector={'Желудь Виктор Павлович'} 
              lectoravatar={best_lector_3} 
              rating={'4.9'} 
              rating_icon={star_icon} 
              subjects={['Английский', 'Итальянский', 'Французский']}
              width={'250'}
            />
          </div>
          <div className="best-lectors__col--2__second best-lector__card">
            <LectorCard 
              key={3} 
              lector={'Желудь Виктор Павлович'} 
              lectoravatar={best_lector_3} 
              rating={'4.9'} 
              rating_icon={star_icon} 
              subjects={['Английский', 'Итальянский', 'Французский']}
              width={'381'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

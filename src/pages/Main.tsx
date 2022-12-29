import React from 'react';
import { Footer } from '../components/footer/Footer';
import { BestLectorsScroll } from '../components/scrolls/bestLectorsScroll/BestLectorsScroll';
import { OurCoursesScroll } from '../components/scrolls/ourCoursesScroll/OurCoursesScroll';
import { PaymentsScroll } from '../components/scrolls/payments/PaymentsScroll';
import { QuestionsScroll } from '../components/scrolls/questionsScroll/QuestionsScroll';
import { WebinarScroll } from '../components/scrolls/webinarsScroll/WebinarScroll';
import Map from '../components/scrolls/map/Map';

export const Main = () => {
  return (
    <div className='container'>
        <Map/>
        <BestLectorsScroll/>
        <OurCoursesScroll/>
        <WebinarScroll/>
        <QuestionsScroll/>
        <PaymentsScroll/>
        <Footer/>
    </div>
  )
}

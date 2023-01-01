import React, { ReactElement } from 'react'
import { Button } from '../Buttons/Button';
import './coursesCard.scss';

type Props = {
    title: string
    subject: string
    timeplan: string
    lectorAvatar: string
    lector: string
    rating: number
    price: string
    rating_icon: string
    icon_btn: string
}

export const CoursesCard:React.FC<Props> = ({ title, subject, timeplan, lectorAvatar, lector, rating, price, rating_icon, icon_btn }) => {
    let arrOfStars: ReactElement<React.ReactElement>[] = []

    if (rating) {
        for (let i = 1; i <= rating; i++) {
            arrOfStars.push(<img style={{height: '24px'}} src={rating_icon} alt='rating_icon'></img>);
        }
    }
    return (
        <div className="our-courses__card">
            <div className="our-courses__card--title">
                <h2 className="our-courses__card--title">{title}</h2>
                <p className="our-courses__card--subject">{subject}</p>
            </div>

            <p className="our-courses__card--timeplan">{timeplan}</p>

            <div className="our-courses__card--lector">
                <img src={lectorAvatar} alt="lector" className="our-courses__card--lectoravatar" />
                <p className="our-courses__card--lectorname">{lector}</p>
            </div>

            <div className="our-courses__card--rating">
                {arrOfStars}
            </div>

            <div className="our-courses__card--price">
                {price} Br
            </div>

            <div className="our-courses__card--button">
                <Button icon={icon_btn} title='Подробнее'/>
            </div>

        </div>
    )
}

import React, { ReactElement } from 'react'
import './webinarCard.scss';

type Props = {
    title: string
    preview: string
    rating: number
    timeline: string
    postedAt: string
    rating_icon: string
    lector_avatar: string
}

export const WebinarCard:React.FC<Props> = ({ title, preview, timeline, postedAt, rating_icon, lector_avatar,rating }) => {

    let arrOfStars: ReactElement<React.ReactElement>[] = [];
    if (rating) {
        for (let i = 1; i <= rating; i++) {
            arrOfStars.push(<img style={{height: '23px'}} src={rating_icon} alt='rating_icon'></img>);
        }
    }

    return (
        <div className="webinar-card">
            <div className="webinar-card__preview">

                <div className="webinar-card__preview--photo">
                    <img src={preview} alt="preview"/>
                </div>

                <div className="webinar-card__wrapper">
                    <div className="webinar-card__preview--rating">
                        {arrOfStars}
                    </div>

                    <div className="webinar-card__preview--timeline">
                        {timeline}
                    </div>
                    
                </div>
            </div>

            <div className="webinar-card__footer">

                <div className="webinar-card__footer--lectoravatar">
                    <img  src={lector_avatar} alt="lector avatar"/>
                </div>

                <div className="webinar-card__footer--videoname">
                    <h2 className="webinar-card__footer--header main-header-small">
                        {title}
                    </h2>
                    <div className="webinar-card__footer--postedat">
                        {postedAt} минут назад
                    </div>
                </div>

            </div>

        </div>
    )
}

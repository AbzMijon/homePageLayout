import React, { ReactElement } from 'react';
import './lectorCard.scss';

type Props = {
    lector: string
    lectoravatar: string
    rating: string
    rating_icon: string
    subjects: string[]
    width: string
}


export const LectorCard = (props: Props) => {
    const {lector, lectoravatar, rating, rating_icon, subjects, width} = props;

    const LectorArrName = lector.split(' ');


    const LectorName = LectorArrName[0];
    const LectorWithoutName = LectorArrName.slice(1, LectorArrName.length);

    const firstLetter = rating.charAt(0); 
    const anotherLetter = rating.slice(1, rating.length);

    const firstLetterToNum = parseInt(firstLetter);

    let arrOfStars: ReactElement<React.ReactElement>[] = []

    if (firstLetterToNum !== 0) {
        //Округляем вверх до целых
        for (let i = 1; i <= firstLetterToNum + 1; i++) {
            arrOfStars.push(<img style={{height: '2.4rem'}} src={rating_icon} alt='rating_icon'></img>);
        }
    }

    
  return (
    <div style={{width: width}} className="lector-card">
        <div className="lector-card__lectoravatar">
            <img src={lectoravatar} alt="lector avatar" />
        </div>

        <div className="lector-card__wrapper">
            <div className="lector-card__lectorname">
                <span className='lector-card__lectorname--firstname'>{LectorName}</span> <br/>
                <span className='lector-card__lectorname--anothername'>{LectorWithoutName}</span>
            </div>
            <div className="lector-card__mainrating">
                <span className='lector-card__mainrating--firstdigit'>{firstLetter}</span>
                <p className='lector-card__mainrating--anotherdigit'>{anotherLetter}</p>
                {arrOfStars}
            </div>
            <div className="lector-card__subjects">
                <ul className="lector-card__listofsubjects">
                    {subjects.map((sub, i) => 
                        <li id={'i'} className="lector-card__subject"><span>{sub}</span></li>
                    )
                    }
                </ul>
            </div>
        </div>

        <div className="lector-card__uprating">
            <span className='lector-card__uprating--firstdigit'>{firstLetter}</span>
            <p className='lector-card__uprating--anotherdigit'>{anotherLetter}</p>
        </div>
    </div>
  )
}

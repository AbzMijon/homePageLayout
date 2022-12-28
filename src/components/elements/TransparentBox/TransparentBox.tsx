import React from 'react';
import './transparentBox.scss';

export interface Props {
    isStar?: boolean
    title: string
    icon: string
  }

export const TransparentBox = (props: Props) => {

    const firstLetter = props.title.charAt(0); 
    const anotherLetter = props.title.slice(1, props.title.length)
    const {isStar, title, icon} = props;
    const starForRating = [];
    if (isStar) {
      for (let i = 0; i < Number(firstLetter); i++) {
        starForRating.push(<img className='icon' src={props.icon} alt="star-icon" />)
      }
    }

    const rating = isStar ? 

        <>
            <div className="transparent-card-with-star__wrapper">

              <div className="transparent-card-with-star__wrapper--text">
                <span className='transparent-card-with-star__wrapper--text__first-letter'>{firstLetter}</span> 
                <span className='transparent-card-with-star__wrapper--text__second-letter'>{anotherLetter}</span>
              </div>
              
              <div className="transparent-card-with-star__wrapper--icon">
                {starForRating}
              </div>
            </div>
            {/* <img src={props.icon} alt="star-icon" />
            <img src={props.icon} alt="star-icon" />
            <img src={props.icon} alt="star-icon" />
            <img src={props.icon} alt="star-icon" />
            <img src={props.icon} alt="star-icon" /> */}
        </>
     :
        <>
        <div className="transparent-card__wrapper">
          <img className='transparent-card__wrapper--icon' src={props.icon} alt={icon} />
          <span className="transparent-card__wrapper--text">
            {title}
          </span>
        </div>
        </>



  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a className='transparent-card' href="#">
        {rating}
    </a>
  )
}

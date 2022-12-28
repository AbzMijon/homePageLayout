import React from 'react';
import './whatIsInfoBox.scss';

type Props = {
  title: string
  text: string
  icon: string
}

export const WhatIsInfobox = (props: Props) => {
  const {title, text, icon} = props;

  return (
    <div className="infobox">
      <div className="infobox__img">
        <img  src={icon} alt="infobox" />
      </div>

      <div className="infobox__text">
        <h3 className='infobox__header main-header-small'>
          {title}
        </h3>
        <p className='infobox__paragraph'>
          {text}
        </p>
      </div>
    </div>
  )
}

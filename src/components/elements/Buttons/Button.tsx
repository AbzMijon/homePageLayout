import React from 'react';
import './button.scss';
import { HandySvg } from 'handy-svg';

export interface Props {
    title?: string
    icon: any
  }

export const Button:React.FC<Props> = ({ title, icon }) => {
  return (
    <a href='#' className="button-main">
      <HandySvg 
        src={icon}
        className='button-main__icon'
        />
        <p className="button-main__title">{title}</p>
    </a>
  )
}

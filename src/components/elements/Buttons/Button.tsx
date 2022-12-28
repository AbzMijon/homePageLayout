import React from 'react';
import './button.scss';
import { HandySvg } from 'handy-svg';
import search_icon from '../../../assets/icons/SVG/search.svg';

export interface Props {
    title?: string
    icon: any
  }

export const Button = ({title, icon}: Props) => {
  return (
    <a 
    href='#' 
    className="button-main"
    >
      {/* <SearchIcon fill='white'/> */}
      <HandySvg 
        src={icon}
        className='button-main__icon'
        />

        {/* <img className='button__icon' src={icon} alt="button icon"/> */}
        <p className="button-main__title">{title}</p>
    </a>
  )
}

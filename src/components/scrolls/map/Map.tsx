import React from 'react';
import './map.scss';
import map from '../../../assets/img/Map.png';
import { AiOutlineSearch, AiOutlineCalendar } from 'react-icons/ai';
import { BsCurrencyDollar, BsFillGeoAltFill } from 'react-icons/bs';

function Map() {
    return (
        <div className='map'>
            <img src={map} alt="" className="map__bg" />
            <div className="map__content">
                <h2 className='map__title'>Online school<br/> at your home!</h2>
                <div className="map__find">
                    <ul className='map__find-types'>
                        <li className="map__find-type map__find-type--active">Teachers</li>
                        <li className="map__find-type">Courses</li>
                        <li className="map__find-type">Webinars</li>
                    </ul>
                    <ul className="map__settings">
                        <li className='map__settings-item map__setting-search'>
                            <p className='map__settings-item-title'>Topic</p>
                            <AiOutlineSearch className='map__setting-search-icon'/>
                        </li>
                        <li className='map__settings-item map__setting-search'>
                            <p className='map__settings-item-title'>15 September</p>
                            <AiOutlineCalendar className='map__setting-search-icon'/>
                        </li>
                        <li className='map__settings-item map__setting-search'>
                            <p className='map__settings-item-title'>Price</p>
                            <BsCurrencyDollar className='map__setting-search-icon'/>
                        </li>
                        <li className='map__settings-item map__setting-search'>
                            <p className='map__settings-item-title'>Country</p>
                            <BsFillGeoAltFill className='map__setting-search-icon'/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Map;
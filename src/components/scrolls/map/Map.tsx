import React from 'react';
import './map.scss';
import map from '../../../assets/img/Map.png';
import Group from '../../../assets/img/Group.png';
import { AiOutlineSearch, AiOutlineCalendar } from 'react-icons/ai';
import { BsCurrencyDollar, BsFillGeoAltFill } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';

function Map() {
    return (
        <div className='map'>
            {/* <img src={map} alt="" className="map__bg" /> */}
            <div className="map__content">
                <div className="map__header">
                    <h2 className='map__title'>Online school<br/> at your <span className='bg__border'>home!</span></h2>
                    <img src={Group} className='map__bg-teachers' alt="" />
                </div>
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
                        <li className='map__settings-item'>
                            <p className='map__settings-item-title'>15 September</p>
                            <AiOutlineCalendar className='map__setting-search-icon'/>
                        </li>
                        <li className='map__settings-item'>
                            <p className='map__settings-item-title'>Price</p>
                            <BsCurrencyDollar className='map__setting-search-icon'/>
                        </li>
                        <li className='map__settings-item map__setting-region'>
                            <p className='map__settings-item-title'>Country</p>
                            <BsFillGeoAltFill className='map__setting-search-icon'/>
                        </li>
                    </ul>
                    <ul className="map__selects">
                        <li>
                            <ul className="map__sort">
                                <li className="map__sort-item">Sort <IoIosArrowDown className='map__sort-item-arrow'/></li>
                                <li className="map__sort-item map__sort-item--hidden">Recommended</li>
                                <li className="map__sort-item map__sort-item--hidden">Popularity</li>
                                <li className="map__sort-item map__sort-item--hidden">Price: Low to High</li>
                                <li className="map__sort-item map__sort-item--hidden">Price: High to Low</li>
                                <li className="map__sort-item map__sort-item--hidden">Rating</li>
                            </ul>
                        </li>
                        <div className="map__other-selects">
                            <li>
                                <ul className="map__sort">
                                    <li className="map__sort-item">Experience <IoIosArrowDown className='map__sort-item-arrow'/></li>
                                    <li className="map__sort-item map__sort-item--hidden">Up to 1 year</li>
                                    <li className="map__sort-item map__sort-item--hidden">1 - 5 years</li>
                                    <li className="map__sort-item map__sort-item--hidden">5 - 10 years</li>
                                    <li className="map__sort-item map__sort-item--hidden">Over 10 years</li>
                                </ul>
                            </li>
                            <li>
                                <ul className="map__sort">
                                    <li className="map__sort-item">Gender <IoIosArrowDown className='map__sort-item-arrow'/></li>
                                    <li className="map__sort-item map__sort-item--hidden">Man</li>
                                    <li className="map__sort-item map__sort-item--hidden">Woman</li>
                                </ul>
                            </li>
                            <li>
                                <ul className="map__sort">
                                    <li className="map__sort-item">Age <IoIosArrowDown className='map__sort-item-arrow'/></li>
                                    <li className="map__sort-item map__sort-item--hidden">Up tp 30 y.o.</li>
                                    <li className="map__sort-item map__sort-item--hidden">30 - 50 y.o.</li>
                                    <li className="map__sort-item map__sort-item--hidden">Over 50 y.o.</li>
                                </ul>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Map;
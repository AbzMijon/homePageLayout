import React, { useState } from 'react';
import './map.scss';
import Group from '../../../assets/img/Group.png';
import { AiOutlineSearch, AiOutlineCalendar } from 'react-icons/ai';
import { BsCurrencyDollar, BsFillGeoAltFill } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Map() {

    const [startDate, setStartDate] = useState(new Date());
    const [topic, setTopic] = useState(false);
    const [price, setPrice] = useState(false);
    const [country, setCountry] = useState(false);
    const [sort, setSort] = useState(false);
    const [experience, setExperience] = useState(false);
    const [gender, setGender] = useState(false);
    const [age, setAge] = useState(false);

    return (
        <div className='map'>
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
                        <li className={topic ? 'map__settings-item map__setting-search map__settings-item-active' : 'map__settings-item map__setting-search'} onClick={() => setTopic(!topic)} onMouseLeave={() => setTopic(false)}>
                            <p className='map__settings-item-title'>Topic</p>
                            <AiOutlineSearch className='map__setting-search-icon'/>
                            {topic &&
                                <ul className='map__hidden-list'>
                                    <li className='map__hidden-item'>Geography</li>
                                    <li className='map__hidden-item'>History</li>
                                    <li className='map__hidden-item'>Science</li>
                                    <li className='map__hidden-item'>Polish</li>
                                    <li className='map__hidden-item'>Ukrainian</li>
                                    <li className='map__hidden-item'>Italian</li>
                                    <li className='map__hidden-item'>Spanish</li>
                                    <li className='map__hidden-item'>French</li>
                                    <li className='map__hidden-item'>Mathematics</li>
                                </ul>
                            }
                        </li>
                        <li className='map__settings-item map__settings-calendar'>
                            <DatePicker className='map__calendar' selected={startDate} onChange={(date:Date) => setStartDate(date)} />
                            <AiOutlineCalendar className='map__setting-search-icon'/>
                        </li>
                        <li className={price ? 'map__settings-item map__settings-item-active' : 'map__settings-item'} onClick={() => setPrice(!price)} onMouseLeave={() => setPrice(false)}>
                            <p className='map__settings-item-title'>Price</p>
                            <BsCurrencyDollar className='map__setting-search-icon'/>
                            {price &&
                                <ul className='map__hidden-list'>
                                    <li className='map__hidden-item'>£5 - £10</li>
                                    <li className='map__hidden-item'>£10 - £25</li>
                                    <li className='map__hidden-item'>£25 - £50</li>
                                    <li className='map__hidden-item'>£50 - £100</li>
                                </ul>
                            }
                        </li>
                        <li className={country ? 'map__settings-item map__setting-region map__settings-item-active' : 'map__settings-item map__setting-region'} onClick={() => setCountry(!country)} onMouseLeave={() => setCountry(false)}>
                            <p className='map__settings-item-title'>Country</p>
                            <BsFillGeoAltFill className='map__setting-search-icon'/>
                            {country &&
                                <ul className='map__hidden-list'>
                                    <li className='map__hidden-item'>English</li>
                                    <li className='map__hidden-item'>Arab</li>
                                    <li className='map__hidden-item'>Vietnamese</li>
                                    <li className='map__hidden-item'>Spanish</li>
                                    <li className='map__hidden-item'>Russian</li>
                                </ul>
                            }
                        </li>
                    </ul>
                    <ul className="map__selects">
                        <li className='map__settings-item selects-item' onClick={() => setSort(!sort)} onMouseLeave={() => setSort(false)}>
                            Sort <IoIosArrowDown className='map__sort-item-arrow'/>
                            {sort &&
                                <ul className="map__hidden-list">
                                    <li className="map__hidden-item">Recommended</li>
                                    <li className="map__hidden-item">Popularity</li>
                                    <li className="map__hidden-item">Price: Low to High</li>
                                    <li className="map__hidden-item">Price: High to Low</li>
                                    <li className="map__hidden-item">Rating</li>
                                </ul>
                            }
                        </li>
                        <div className="map__other-selects">
                            <li className="map__settings-item selects-item" onClick={() => setExperience(!experience)} onMouseLeave={() => setExperience(false)}>
                                Experience <IoIosArrowDown className='map__sort-item-arrow'/>
                                {experience &&
                                    <ul className="map__hidden-list">
                                        <li className="map__hidden-item">Up to 1 year</li>
                                        <li className="map__hidden-item">1 - 5 years</li>
                                        <li className="map__hidden-item">5 - 10 years</li>
                                        <li className="map__hidden-item">Over 10 years</li>
                                    </ul>
                                }
                            </li>
                            <li className="map__settings-item selects-item" onClick={() => setGender(!gender)} onMouseLeave={() => setGender(false)}>
                                Gender <IoIosArrowDown className='map__sort-item-arrow'/>
                                {gender &&
                                    <ul className="map__hidden-list">
                                        <li className="map__hidden-item">Man</li>
                                        <li className="map__hidden-item">Woman</li>
                                    </ul>
                                }
                            </li>
                            <li className="map__settings-item selects-item" onClick={() => setAge(!age)} onMouseLeave={() => setAge(false)}>
                                Age <IoIosArrowDown className='map__sort-item-arrow'/>
                                {age &&
                                    <ul className="map__hidden-list">
                                        <li className="map__hidden-item">Up tp 30 y.o.</li>
                                        <li className="map__hidden-item">30 - 50 y.o.</li>
                                        <li className="map__hidden-item">Over 50 y.o.</li>
                                    </ul>
                                }
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Map;
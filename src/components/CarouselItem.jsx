import React from 'react';
import '../assets/styles/components/CarouselItem.css';
import item from '../assets/static/item.jpg';
import likeIcon from '../assets/static/like.png';
import plusIcon from '../assets/static/plus.png';

const CarouselItem = ({ title, type, year}) => (

<div className="carousel--item">
    <img className="carousel--item__img" src={item} alt="Gatitos dormido"/>
    <div className="carousel--item__details">
        <div className="carousel--item__details--icon__container">
            <img className="carousel--item__details--icon" src={likeIcon} alt=""/>
            <img className="carousel--item__details--icon" src={plusIcon} alt=""/>
        </div>
        <div>
            <p className="carousel--item__details--title">{title}</p>
            <p className="carousel--item__details--subtitle">{`${type} ${year}`}</p>
        </div>
    </div>
</div>

);

export default CarouselItem;
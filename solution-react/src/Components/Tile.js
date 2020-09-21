import React from 'react';
import Arrow from './Arrow';
import './Tile.css';

const Tile = ({title,author,date,image,alt,type,href}) => {
    return (
        <a href={href}>
            <div className="tile">
                <div className="tile__info"></div>
                <img className="tile__image" src={image} alt={alt}/>
                <span className="tile__author">{author}</span>
                <h3 className="tile__title">{title}</h3>
                <Arrow/>
            </div>
        </a> 
    )
}

export default Tile
import React from 'react';
import Arrow from '../SVG/Arrow';
import './Tile.scss';

const Tile = ({title,author,date,image,alt,type,href}) => {
    return (
        <a href={href} className="tile">
            <div>
                <div className="tile__info">
                    <span>
                        {type},{date}
                    </span>
                </div>
                <img className="tile__image" src={image} alt={alt}/>
                <span className="tile__author">{author}</span>
                <h3 className="tile__title">{title}</h3>
                <Arrow/>
            </div>
        </a> 
    )
}

export default Tile
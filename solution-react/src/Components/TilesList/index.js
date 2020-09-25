import React from 'react';
import './TilesList.scss';


const TilesList = ({children}) => {
    return (
        <section className="tiles-list-container">
            {children}
        </section>
    )
}

export default TilesList

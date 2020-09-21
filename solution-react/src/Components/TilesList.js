import React from 'react';
import './TilesList.css';


const TilesList = ({children}) => {
    return (
        <section class="tiles-list-container">
            {children}
        </section>
    )
}

export default TilesList
import React from 'react';
import Arrow from './Arrow';
import ArrowLeft from './ArrowLeft';
import './Banner.css';

const Banner = () => {
    return (
        <section>
            <div>
                <h3 className="banner__author">Pil Damgaard
                    <span className="banner_year"> 2018</span>
                </h3>
                <p>This section is actually a little extra that can be added if you feel confident while working and the time aint sprinting.</p>
                <a href="#">
                    <Arrow />
                </a>
            </div>
            <div>
            <h2 className="banner__subtitle">#extra</h2>
            <h2 className="banner__title">Red arrows</h2>
            <h2 className="banner__author">Pil Damgaard</h2>
            <a href="">
                <ArrowLeft/>
            </a>
            </div>
            
        </section>
    )
}

export default Banner

import React from 'react';
import Arrow from './Arrow';
import ArrowLeft from './ArrowLeft';
import './Banner.css';

const Banner = () => {
    return (
        <section className="banner">
            <div className="banner__box-left">
                <h3 className="banner__author">Pil Damgaard
                    <span className="banner__year"> 2018</span>
                </h3>
                <p>This section is actually a little extra that can be added if you feel confident while working and the time aint sprinting.</p>
                <a href="#">
                    <Arrow />
                </a>
            </div>
            <div className="banner__box-right">
                <h2 className="banner__subtitle">#extra</h2>
                <h2 className="banner__title">
                    Pil damgaard<br/>
                    <span>Red arrows</span>
                </h2>
                    <a href="">
                        <ArrowLeft/>
                    </a>
            </div>
            
        </section>
    )
}

export default Banner

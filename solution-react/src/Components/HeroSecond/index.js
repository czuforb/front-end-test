import React from 'react'
import Arrow from '../SVG//Arrow'
import './HeroSecond.scss';

const HeroSecond = () => {
    return (
        <section className="hero-second">
            <h2 className="hero-second__title">
            Your ch
            <span>ance</span>
            <span className="hero-second__line--1"></span>
            <span className="hero-second__line--2"></span>
            <span className="hero-second__line--3"></span>
            </h2>
            <a href="#" className="hero-second__link">Get on the skill train now<span><Arrow /></span></a>
            <p className="hero-second__text">The assignment must be delivered as a pull request to the assignment repository and we appreciate running commits so we can see how you go from our small layout to a final awesome product.</p>
        </section>
    )
}

export default HeroSecond

import React from 'react'
import ArrowRight from '../SVG//ArrowRight';
import './Hero.scss';

const Hero = () => {
    return (
        <section>
            <div className="hero">
                <h1 className="hero__title">
                    <span className="hero__line--1"></span>
                    <span>Master the <br/> front-</span>
                    <span>end </span>
                    <span>w</span>
                    <span>i</span>
                    <span>th fine</span>
                    <span>sse</span>
                    <span className="hero__line--2"></span>
                    <span className="hero__line--3"></span>
                </h1>
                <p className="hero__text">The assignment is supposed to be executed as simple as possible. Code the template in HTML/CSS and try to avoid 3. party frameworks as much as possible. Creating the page with React components will grant extra megamate bonus points.</p>
                <a className="hero__anchor">
                    <ArrowRight />
                </a>
            </div>
        </section>
    )
}

export default Hero

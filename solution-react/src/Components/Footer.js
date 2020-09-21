import React from 'react';
import ArrowRight from './ArrowRight';
import Logo from './Logo';
import './Footer.css';

const Footer = () => {
    return (
        <section>
        <footer>
        <div className="footer__upper">
            <h2>We use tools like NPM/Gulp/Webpack to preprocess files and PostCSS for some mean, lean, killing machine code and React JS is taking over WordPress one step at a time.</h2>
            <a className="footer__href" href="">
                <ArrowRight />
            </a>
            <img className="footer__image" src="" alt=""/>
        </div>
        <div className="footer__bottom">
            <div>
            <h3>Pull request</h3>
            <p>Don't be shy to commit</p>
            </div>
            <Logo/>
        </div>
        </footer>
        </section>
    )
}

export default Footer

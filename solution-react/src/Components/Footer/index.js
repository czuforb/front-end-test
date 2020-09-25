import React from 'react';
import ArrowFooterTop from '../SVG/ArrowFooterTop';
import ArrowFooterBottom from '../SVG/ArrowFooterBottom';
import Logo from '../SVG/Logo';
import './Footer.scss';

const Footer = ({src,alt}) => {
    return (
        
        <footer className="footer">
        <div className="footer__upper">
            <p>We use tools like NPM/Gulp/Webpack
                to preprocess files and PostCSS for some mean, lean, killing machine code and React JS is taking over WordPress one step at a time.</p>
            <a className="footer__href" href="">
            </a>
            <img className="footer__image" src={src} alt={alt}/>
            <ArrowFooterTop />
        </div>
        <div className="footer__bottom">
            <ArrowFooterBottom />
            <div>
            <h3>Pull request
            <span>
            Don't be shy to commit
            </span>
            </h3>
            </div>
            <Logo/>
        </div>
        </footer>
        
    )
}

export default Footer

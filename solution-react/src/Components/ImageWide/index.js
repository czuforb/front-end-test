import React from 'react'
import "./ImageWide.scss";

const ImageWide = ({src, alt}) => {
    return (
        <section className="image-wide">
            <img src={src} alt={alt} />
        </section>
    )
}

export default ImageWide

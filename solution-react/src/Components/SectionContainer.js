import React from 'react'
import './SectionContainer.css'


const SectionContainer = ({children}) => {
    return (
        <div className="container">
            {children}
        </div>
    )
}

export default SectionContainer

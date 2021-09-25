import React from 'react'

import './HeadingNames.css'

export default function Header() {
    return (
        <div className="Header">
            <p className="Heading-Information">Country</p>
            <p className="Heading-Information">Cases</p>
            <p className="Heading-Information">Deaths</p>
            <p className="Heading-Information">Recovered</p>
            
        </div>
    )
}
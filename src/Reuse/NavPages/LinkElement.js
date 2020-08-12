import React from 'react'

const LinkElement = ({ header, arrow, center, arrowMar }) => {
    return (
        <div className={center}>
            <h3 className="linkElement">{header}</h3>
            {arrow ? null : <h4 className={arrowMar}>></h4>}
        </div>
    )
}

export default LinkElement

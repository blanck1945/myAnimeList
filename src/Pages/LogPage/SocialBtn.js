import React from 'react'

const SocialBtn = ({ header, icon, iconDis }) => {

    const iconDisplay = icon
    return (
        <div className={iconDis}>
            {iconDisplay}
            <h3 className="iconHeader">{header}</h3>
        </div>
    )
}

export default SocialBtn
import React from 'react'

import "./Scss/AnimeFooterTitle.scss"

const AnimeFooterTitle = ({ header }) => {
    return (
        <div className="animeFooterBox">
            <h3 className="animeFooterTitle">{header}</h3>
            <h4 className="footerMore">More</h4>
        </div>
    )
}

export default AnimeFooterTitle

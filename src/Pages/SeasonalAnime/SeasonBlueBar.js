import React from 'react'

import "../../Css/Pages/SeasonalAnime/SeasonBlueBar.scss"

const SeasonBlueBar = () => {
    const filterMedia = "TV (news)"
    return (
        <div className="seasonBlueBar">
            <h3 className="filterMedia">{filterMedia}</h3>
        </div>
    )
}

export default SeasonBlueBar

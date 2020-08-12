import React from 'react'
import AnimeDisTemplate from './AnimeDisTemplate'

import "../../../Css/AnimeDisplay/AnimeDisplay.scss"
const AnimeDisplay = ({ header, data }) => {

    const animeTemp = data.map((anime, index) =>
        <AnimeDisTemplate key={anime.id} data={anime} index={index} />)

    return (
        <div className="animeDis">
            <div className="animeDisHeader">
                <h3>{header}</h3>
                <h5 className="animeDisMore">More</h5>
            </div>
            <div className="animeDisBody">
                {animeTemp}
            </div>
        </div>
    )
}

export default AnimeDisplay

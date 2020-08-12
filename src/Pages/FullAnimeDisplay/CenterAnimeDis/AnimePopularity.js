import React from 'react'

const AnimePopularity = ({ header, data }) => {
    return (
        <div className="animePopularity">
            <h4 className="popuTitle">{header}</h4>
            <h3 className="popuData">#{data}</h3>
        </div>
    )
}

export default AnimePopularity
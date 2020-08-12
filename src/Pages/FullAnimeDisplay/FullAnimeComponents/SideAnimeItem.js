import React from 'react'

const SideAnimeItem = ({ header, data, color }) => {
    return (
        <div className="sideAnimeItem">
            <h4 className="sideAnimeLabel">{header}:</h4>
            <h3 className={color ? "sideAnimeData color" : "sideAnimeData"} > {data}</h3>
        </div>
    )
}

export default SideAnimeItem

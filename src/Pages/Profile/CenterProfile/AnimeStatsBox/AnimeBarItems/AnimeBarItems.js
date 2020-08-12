import React from 'react'

const AnimeBarItems = ({ header, data, color }) => {
    return (
        <div className="animeBarItem">
            <div className={color}></div>
            <h4 className="barItemRef">{header}</h4>
            <h4 className="barItemData">{data}</h4>
        </div>
    )
}

export default AnimeBarItems

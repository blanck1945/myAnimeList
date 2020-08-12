import React from 'react'
import AnimeFooterTitle from '../../Reuse/AnimeFooterTitle'

const AnimeFooterDis = ({ header, data }) => {

    console.log(data)

    const rowDisplay = data.map((el, index) =>
        <div className="footerRow" key={el.id}>
            <h4 className="itemID">{index + 1}</h4>
            <h3 className="footerTitle">{el.title ? el.title : el.name}</h3>
        </div>)

    return (
        <div className="animeFooterDis">
            <AnimeFooterTitle header={header} />
            <div className="animeFooterList">
                {rowDisplay}
            </div>
        </div>
    )
}

export default AnimeFooterDis

import React from 'react'
import AddToFavLink from './AddToFavLink'

import "../../../Css/Pages/FullAnimeDisplay/SideFullAnimeDis/imgAnimeDis.scss"

const ImgComponent = ({ img }) => {
    return (
        <div className="imgAnimeDis">
            <img src={img} alt="animeImg" className="animeImage">
            </img>
            <div className="savePin">
                guardar
                </div>
            <AddToFavLink header={"Add to My List"} />
            <AddToFavLink header={"Add to Favorites"} />
        </div>
    )
}

export default ImgComponent

import React from 'react'
import AnimeTemplateSeason from './AnimeTemplateSeason'
import { useSelector } from 'react-redux'

import "../../../Css/Pages/SeasonalAnime/AnimeDisSeason.scss"
const AnimeDisSeason = () => {

    const { sesonalAnime } = useSelector(state => state.anime)
    console.log(sesonalAnime)
    const sesonalDis = sesonalAnime.map((el, index) =>
        <AnimeTemplateSeason key={index} data={el} />)

    return (
        <div className="animeDisCenter">
            {sesonalDis}
        </div>
    )
}

export default AnimeDisSeason

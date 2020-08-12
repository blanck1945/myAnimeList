import React, { useEffect } from 'react'
import TitleRowDis from './TitleRowDis'
import AnimeDisplayRow from './AnimeDisplayRow'
import { useSelector } from 'react-redux'

import "../../Css/Pages/TopSchema.scss"
const TopSchema = () => {

    const { topAnime, topAnimeImg } = useSelector(state => state.anime)

    const topAnimeSorted = topAnime.sort((ani1, ani2) => ani2.score - ani1.score)

    const display = topAnimeSorted.map((el, index) =>
        <AnimeDisplayRow key={el.id} data={el} img={topAnimeImg} rank={index + 1} />)

    return (
        <div className="topSchema">
            <TitleRowDis />
            {display}
        </div>
    )
}

export default TopSchema

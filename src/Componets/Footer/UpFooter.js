import React from 'react'
import AnimeFooterDis from './AnimeFooterDis'

import "../../Css/templates/Footer/UpFooter.scss"
import { useSelector } from 'react-redux'

const UpFooter = ({ topChara }) => {

    const { topAnime, sesonalAnime } = useSelector(state => state.anime)
    const topAnimeDis = topAnime.filter(el => el.score > 9.00)

    return (
        <div className="upFooter">
            <AnimeFooterDis header={"Top Anime"} data={topAnimeDis} />
            <AnimeFooterDis header={"Top Airing Anime"} data={sesonalAnime} />
            <AnimeFooterDis header={"Most Popular Characters"} data={[]} />
        </div>
    )
}

export default UpFooter

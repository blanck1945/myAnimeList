import React from 'react'
import SideBoxTitle from './SideBoxTitle'
import SideAnimeItem from './SideAnimeItem'

import "../../../Css/Pages/FullAnimeDisplay/SideFullAnimeDis/SideAnimeInfo.scss"

const SideStatsAnime = ({ score, members }) => {

    console.log(score)

    return (
        <div className="sideAnimeInfo">
            <SideBoxTitle header={"Statistics"} />
            <SideAnimeItem header={"Score"} data={score} />
            <SideAnimeItem header={"Ranked"} data={25} />
            <SideAnimeItem header={"Popularity"} data={341} />
            <SideAnimeItem header={"Members"} data={members} />
            <SideAnimeItem header={"Favorites"} data={34152} />
        </div>
    )
}

export default SideStatsAnime

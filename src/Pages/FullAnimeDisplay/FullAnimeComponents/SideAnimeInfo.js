import React from 'react'
import SideAnimeItem from './SideAnimeItem'
import SideBoxTitle from './SideBoxTitle'

import "../../../Css/Pages/FullAnimeDisplay/SideFullAnimeDis/SideAnimeInfo.scss"

const SideAnimeInfo = ({ type, episodes, first, last }) => {
    return (
        <div className="sideAnimeInfo">
            <SideBoxTitle header={"Information"} />
            <SideAnimeItem header={"Type"} data={type} color={true} />
            <SideAnimeItem header={"Episodes"} data={episodes} color={false} />
            <SideAnimeItem header={"Status"} data={"Finish"} color={false} />
            <SideAnimeItem header={"Aired"} data={first - last} color={false} />
            <SideAnimeItem header={"Broadcast"} data={"Tuesday at 21:30 (JST)"} color={false} />
            <SideAnimeItem header={"Producers"} data={"Aniplex"} color={true} />
            <SideAnimeItem header={"Licensors"} data={"Aniplex of America"} color={true} />
            <SideAnimeItem header={"Studios"} data={"A1 - Pictures"} color={true} />
            <SideAnimeItem header={"Source"} data={"Manga"} color={false} />
            <SideAnimeItem header={"Genre"} data={"Anime"} color={true} />
            <SideAnimeItem header={"Duration"} data={"24 min. per ep."} color={false} />
            <SideAnimeItem header={"Rating"} data={"PG-13 - Teen 13 or older"} color={false} />
        </div>
    )
}

export default SideAnimeInfo

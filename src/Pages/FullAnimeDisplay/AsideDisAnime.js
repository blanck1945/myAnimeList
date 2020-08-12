import React, { useEffect } from 'react'
import ImgComponent from './FullAnimeComponents/ImgComponent'
import SocialMediaSide from './FullAnimeComponents/SocialMediaSide'
import SideAnimeInfo from './FullAnimeComponents/SideAnimeInfo'
import SideStatsAnime from './FullAnimeComponents/SideStatsAnime'
import { useSelector } from 'react-redux'

const AsideDisAnime = () => {

    const { oneAnime } = useSelector(state => state.anime)
    const { img, type, score, first, last, members, episodes } = oneAnime

    return (
        <div className="sideAnimeDis">
            <ImgComponent img={img} />
            <SocialMediaSide />
            <SideAnimeInfo type={type} episodes={episodes} first={first} last={last} />
            <SideStatsAnime score={score} members={members} />
        </div>
    )
}

export default AsideDisAnime

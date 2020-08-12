import React from 'react'
import NavLinkFilter from '../../Reuse/NavPages/NavLinkFilter'
import LinkElements from '../../Reuse/NavPages/LinkElement'
import CenterAnimeData from './CenterAnimeDis/CenterAnimeData'
import CenterAnimeVide from './CenterAnimeDis/CenterAnimeVide'
import SinopsisAnime from './SipnosisAnimeCompo/SinopsisAnime'
import { useSelector } from 'react-redux'
import MalFaceSquare from '../../Componets/MalPublicity/MalFaceSquare'
import MalSocial from '../../Componets/Home/Aside/MalSocial'

import "../../Css/Pages/FullAnimeDisplay/CenterAnimeDis.scss"
import "../../Reuse/Scss/NavPages.scss"
import "../../Css/Aside/MalSocial.scss"

const CenterAnimeDis = () => {

    const { oneAnime } = useSelector(state => state.anime)

    const PV = false
    const { title, score, members, studio, type, year, season, sinopsis } = oneAnime
    return (
        <div className="centerAnimeDis">
            <div className="navPages">
                <div className="downNavDis">
                    <NavLinkFilter header={"details"} select={true} />
                    <NavLinkFilter header={"Videos"} select={false} />
                    <NavLinkFilter header={"Episodes"} select={false} />
                    <NavLinkFilter header={"Reviews"} select={false} />
                    <NavLinkFilter header={"Recommendations"} select={false} />
                    <NavLinkFilter header={"Stats"} select={false} />
                    <NavLinkFilter header={"Characters"} select={false} />
                    <NavLinkFilter header={"Staff"} select={false} />
                    <NavLinkFilter header={"News"} select={false} />
                    <NavLinkFilter header={"Forum"} select={false} />
                    <NavLinkFilter header={"Featured"} select={false} />
                    <NavLinkFilter header={"Clubs"} select={false} />
                    <NavLinkFilter header={"Pictures"} select={false} />
                </div>
                <div className="upNavDis">
                    <LinkElements header={"Top"} center={"linkElementBox center"} arrowMar={"arrowMar"} />
                    <LinkElements header={"Anime"} center={"linkElementBox"} arrowMar={"arrowMar"} />
                    <LinkElements header={title} center={"linkElementBox"} arrow={true} />
                </div>
                <div className="centerAnimeBody">
                    <CenterAnimeData score={score} members={members} season={season} year={year} type={type} studio={studio} />
                    <CenterAnimeVide />
                </div>
                <div className="centerSynopsisAnime">
                    <SinopsisAnime text={<h4 className="seasonTemp">{sinopsis}</h4>}
                        header={"Synopsis"} here={true} />
                    <SinopsisAnime text={<h4 className="seasonTemp">No background information has been added to this title. Help improve our database by adding background information <span className="hereSpan">here</span>.</h4>}
                        header={"Background"} here={true} />
                    {PV ? <SinopsisAnime header={"Episodes Videos"} here={false} more={true} /> : null}
                </div>
                <div className="centerSocialBox">
                    <MalFaceSquare />
                    <MalSocial classtype={"malBox"} />
                </div>
            </div>
        </div>
    )
}

export default CenterAnimeDis

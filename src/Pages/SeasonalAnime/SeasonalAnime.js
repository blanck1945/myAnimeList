import React from 'react'
import LinkElement from '../../Reuse/NavPages/LinkElement'
import NavLinkFilter from '../../Reuse/NavPages/NavLinkFilter'
import SeasonFilterBar from './SeasonFilterBar'
import AnimeDisSeason from "./SeasonalAnimeDis/AnimeDisSeason"
import SeasonBlueBar from './SeasonBlueBar'

import "../../Css/Container/container.scss"
import "../../Css/navPages/Nav.Pages.scss"
import "../../Css/Pages/SeasonalAnime/SesonalAnime.scss"

const SeasonalAnime = () => {
    return (
        <div className="container">
            <div className="navPages">
                <div className="upNavDis">
                    <LinkElement header={"Top"} center={"linkElementBox center"} arrowMar={"arrowMar"} />
                    <LinkElement header={"Anime"} center={"linkElementBox"} arrowMar={"arrowMar"} />
                    <LinkElement header={"Sesonal Anime"} center={"linkElementBox"} arrow={true} />
                </div>
                <div className="downNavDis">
                    <div className="seasonExtend">
                        <NavLinkFilter header={"..."} select={false} />
                        <NavLinkFilter header={"Winter 2020"} select={false} />
                        <NavLinkFilter header={"Spring 2020"} select={true} />
                        <NavLinkFilter header={"Summer 2020"} select={false} />
                        <NavLinkFilter header={"Fall 2020"} select={false} />
                        <NavLinkFilter header={"later"} select={false} />
                        <NavLinkFilter header={"Schedule"} select={false} />
                        <NavLinkFilter header={"Archive"} select={false} />
                        <div className="LeftArchive">
                            <h4 className="jumpToText">Jump To</h4>
                            <select name="season" id="seson" className="seasonSelect">
                                <option value="winter">Winter</option>
                                <option value="spring">Spring</option>
                                <option value="summer">Summer</option>
                                <option value="fall">Fall</option>
                            </select>
                            <input type="text" placeholder="Year" className="yearInp" />
                            <button className="goBtn">Go</button>
                        </div>
                    </div>
                </div>
            </div>
            <SeasonFilterBar />
            <SeasonBlueBar />
            <AnimeDisSeason />
        </div>
    )
}

export default SeasonalAnime

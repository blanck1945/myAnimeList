import React from 'react'
import AnimePopularity from './AnimePopularity'
import AnimeSeasonData from './AnimeSeasonData'
import AnimeDataDown from './AnimeDataDown'
import { Link } from "react-router-dom"

import "../../../Css/Pages/FullAnimeDisplay/CenterAnimeDis/CenterAnimeData.scss"
import "../../../Css/utils/Links.scss"

const CenterAnimeData = ({ score, members, studio, type, season, year }) => {

    return (
        <>
            <div className="centerAnimeData">
                <div className="animeDataUp">
                    <div className="animeScoreData">
                        <h3 className="scoreLabel">Score</h3>
                        <h2 className="animeScoreDis">{score}</h2>
                        <h3 className="animeUserDis">65,148 Users</h3>
                    </div>
                    <div className="animeScoreGeneral">
                        <div className="scoreGeneralUp">
                            <AnimePopularity header={"Ranked"} data={22} />
                            <AnimePopularity header={"Popularity"} data={379} />
                            <AnimePopularity header={"Members"} data={members} />
                        </div>
                        <div className="scoreGeneralDown">
                            <Link to="/studioSearch" className="links">
                                <AnimeSeasonData header={`${season} - ${year}`} filter={"season"} value={{ season, year }} />
                            </Link>
                            <AnimeSeasonData header={type} />
                            <Link to="/studioSearch" className="links">
                                <AnimeSeasonData header={studio} filter={"studio"} value={studio} />
                            </Link>
                        </div>
                    </div>
                </div>
                <AnimeDataDown />
                <h4 className="publicList">* Your list is public by default.</h4>
            </div>
        </>
    )
}

export default CenterAnimeData

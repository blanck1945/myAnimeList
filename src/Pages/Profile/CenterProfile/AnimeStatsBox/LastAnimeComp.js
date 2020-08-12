import React from 'react'
import BodyTitle from '../../../../Reuse/BodyTitles'

const LastAnimeComp = () => {

    const anime = {
        episodes: 13
    }

    const score = null
    const watch = 7
    const addTime = "Apr 29, 6:02 PM"

    return (
        <div className="animeStatsBar">
            <div className="lastAnimeBox">
                <BodyTitle header={"Last Anime Updates"} />
                <div className="lastAnimeTemp">
                    <div className="animeCompImg">
                        <img src="" alt="" />
                    </div>
                    <div className="animeCompData">
                        <h3 className="compDataTitle">Bang Dream! 2nd Season</h3>
                        <div className="compDataBox">
                            <div className="emptyBar"></div>
                            <h4>{addTime}</h4>
                        </div>
                        <div className="compDataFoot">
                            <h4>complete <span className="episodeStatus">{watch}</span>/{anime.episodes} -</h4>
                            <h4>Scores {score !== null ? score : "-"}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LastAnimeComp

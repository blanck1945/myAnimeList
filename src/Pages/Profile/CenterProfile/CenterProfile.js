import React from 'react'
import AnimeStatsBox from './AnimeStatsBox/AnimeStatsBox'


import "../../../Css/Pages/ProfilePage/CenterProfile.scss"
import BodyTitle from '../../../Reuse/BodyTitles'
import LastAnimeAdd from './AnimeStatsBox/LastAnimeAdd'
import BodyTitles from '../../../Reuse/BodyTitles'

const CenterProfile = () => {
    return (
        <div className="centerProfile">
            <div className="profileDesc">
                <p>Never give a score to something dropp. Never trust peoples that give scores or opinions of shows they dropp. Dropping is the art of time value.</p>

                <p>Only give 10/10 scores to anime. Everything else seems pointless.</p>

                <p>Giving scores in between 1-9 feels like someone has something to say, no to him,but to others. I prefer people that just give opinions about the enjoyment they got out from an Anime. Not a rank.</p>
            </div>
            <div className="statsHeader" >
                <BodyTitle header={"Statistics"} />
            </div>
            <div className="userAnimeStats">
                <AnimeStatsBox />
                <LastAnimeAdd />
            </div>
            <div className="statsHeader">
                <BodyTitles header={"Favorites"} />
            </div>
            <div className="favBox">

            </div>
            <div className="statsHeader">
                <BodyTitles header={"Comments"} all={true} />
            </div>
            <div className="commentAreaBox">
                <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Write a new Comment" className="commentArea"></textarea>
                <button className="submitComBtn">Submit Comment</button>
            </div>
        </div>
    )
}

export default CenterProfile

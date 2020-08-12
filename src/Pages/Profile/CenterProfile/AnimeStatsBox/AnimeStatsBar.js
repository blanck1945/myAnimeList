import React, { useState, useEffect } from 'react'
import BodyTitle from "../../../../Reuse/BodyTitles"
import AnimeBarItems from './AnimeBarItems/AnimeBarItems'
import ResumeItem from './AnimeBarItems/ResumeItem'
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { setTotalAmount } from "../../../../utils/ProfileFuncs"
import { barModel, setBarStyle } from "../../../../utils/BarModel"

import "./AnimeBarItems/colorSelecto.scss"
import "../../../../Css/utils/Links.scss"

const AnimeStatsBar = () => {

    const { topAnime } = useSelector(state => state.anime)

    const [bar, setBar] = useState(barModel)
    const { total, watchPer, completePer, onHoldPer, dropPer, planToPer, totalEpisodes } = bar

    const watchingAmount = setTotalAmount(topAnime, "watching")
    const completeAmount = setTotalAmount(topAnime, "complete")
    const onHoldAmount = setTotalAmount(topAnime, "onHold")
    const dropAmount = setTotalAmount(topAnime, "drop")
    const planToAmount = setTotalAmount(topAnime, "planTo")

    useEffect(() => {
        setBar({
            total: watchingAmount.length + completeAmount.length + onHoldAmount.length,
            watchPer: (watchingAmount.length / total) * 100,
            completePer: (completeAmount.length / total) * 100,
            onHoldPer: (onHoldAmount.length / total) * 100,
            dropPer: (dropAmount.length / total) * 100,
            planToPer: (planToAmount.length / total) * 100,
        })
    }, [total])

    const divWatchingStyle = setBarStyle(watchPer, "green")
    const divCompleteStyle = setBarStyle(completePer, "blue")
    const divOnHoldStyle = setBarStyle(onHoldPer, "goldenrod")
    const divDropStyle = setBarStyle(dropPer, "brown")
    const divPlanToStyle = setBarStyle(planToPer, "rgba(168, 168, 168, 0.794)")

    return (
        <div className="animeStatsBar">
            <div className="statsBarBox">
                <BodyTitle header={"Anime Stats"} />
                <div className="barBoxData">
                    <div className="barBoxDays">
                        <h4>Days:</h4>
                        <h4 className="daysAmount">77.4</h4>
                    </div>
                    <div className="barBoxDays">
                        <h4>Mean Score: </h4>
                        <h4 className="daysAmount">10.00</h4>
                    </div>
                </div>
                <div className="barDis">
                    <div className="blanckBar">
                        <div className="blanckBar" style={divWatchingStyle}></div>
                        <div className="blanckBar" style={divCompleteStyle}></div>
                        <div className="blanckBar" style={divOnHoldStyle}></div>
                        <div className="blanckBar" style={divDropStyle}></div>
                        <div className="blanckBar" style={divPlanToStyle}></div>
                    </div>
                </div>
                <div className="barBoxFoot">
                    <div className="barRef">
                        <Link to="/studioSearch" className="links">
                            <AnimeBarItems color={"colorSelectorGreen coSe"} header={"Watching"} data={watchingAmount.length} />
                        </Link>
                        <AnimeBarItems color={"colorSelectorBlue coSe"} header={"Completed"} data={completeAmount.length} />
                        <AnimeBarItems color={"colorSelectorYellow coSe"} header={"On-Hold"} data={onHoldAmount.length} />
                        <AnimeBarItems color={"colorSelectorRed coSe"} header={"Dropped"} data={dropAmount.length} />
                        <AnimeBarItems color={"colorSelectorGrey coSe"} header={"Plan to Watch"} data={planToAmount.length} />
                    </div>
                    <div className="barResume">
                        <ResumeItem header={"Total Entries"} data={total} />
                        <ResumeItem header={"Rewatched"} data={0} />
                        <ResumeItem header={"Episodes"} data={0} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AnimeStatsBar

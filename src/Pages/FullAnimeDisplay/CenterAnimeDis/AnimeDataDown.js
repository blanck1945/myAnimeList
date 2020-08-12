import React, { useEffect, useState } from 'react'
import { AiOutlineStar } from "react-icons/ai"
import { AiOutlinePlusSquare } from "react-icons/ai"
import { AiFillPlusCircle } from "react-icons/ai"
import { useSelector, useDispatch } from 'react-redux'
import { postAnimeToDb, setPostFunc } from '../../../Store/actions.js/AddAnimeToDbActions'
import { setOneAnimeState } from "../../../Store/actions.js/AnimeState"
import { setColor } from '../../../Store/actions.js/utilsActions'

import "../../../Css/Pages/FullAnimeDisplay/CenterAnimeDis/AnimeDataDown.scss"
import "./colorSelector.scss"

const AnimeDataDown = () => {

    const [count, setCount] = useState(0)

    const dispatch = useDispatch()
    const { oneAnime, topAnime } = useSelector(state => state.anime)
    const { logUser, isLog } = useSelector(state => state.log)
    const { color } = useSelector(state => state.utils)
    const { episodes, id, state } = oneAnime

    useEffect(() => {
        dispatch(setColor(state))
    }, [])

    const handlerAnimeState = (e, id) => {
        if (!isLog) {
            return console.log("You need to log to add Animes")
        }
        const userId = logUser[0].id
        const query = "watching"
        dispatch(postAnimeToDb(id, userId))
        dispatch(setOneAnimeState(id, oneAnime, topAnime))
        dispatch(setColor(query))
    }

    const handlerSelect = (e, id) => {
        const userId = logUser[0].id
        const query = e.target.value
        dispatch(setPostFunc(id, userId, query))
        dispatch(setOneAnimeState(id, oneAnime, topAnime, query))
        dispatch(setColor(query))
    }

    const handlerCount = () => {
        if (count === episodes) {
            return setCount(episodes)
        }
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div className="animeDataDown">
            {state === ""
                ? <button className="addToMyList" onClick={() => handlerAnimeState(id)}>
                    <AiOutlinePlusSquare />
                Add to List
            </button>
                : <select className={color} onChange={(e) => handlerSelect(e, id)}>
                    <option value="watching" selected={state === "watching"}>Watching</option>
                    <option value="complete" selected={state === "complete"}>Completed</option>
                    <option value="onHold" selected={state === "onHold"}>On-Hold</option>
                    <option value="drop" selected={state === "drop"}>Dropped</option>
                    <option value="planTo" selected={state === "planTo"}>Plan to Watch</option>
                </select>
            }
            <div className="selectRankBox">
                <AiOutlineStar className="rankStar" />
                <select name="ranking" id="rank" className="selectRank" disabled={isLog ? false : true}>
                    <option value="select">Select</option>
                    <option value="10">(10) Masterpiece</option>
                    <option value="9">(9) Great</option>
                    <option value="8">(8) Very Good</option>
                    <option value="7">(7) Good</option>
                    <option value="6">(6) Fine</option>
                    <option value="9">(5) Average</option>
                </select>
            </div>
            <div className="episodesAmount">
                <h4 className="numOfEpi" >Episodes:</h4>
                <div className="numOfEpiBox" name="episodes" id="episodes" >
                    <h4 className="num1">{count}</h4>
                    <h4 className="num2">/</h4>
                    <h4 className="num3">{episodes === "Unknown" ? "?" : episodes}</h4>
                    <AiFillPlusCircle className="circlPlus" onClick={isLog ? () => handlerCount() : null} />
                </div>
            </div>
            <button className="buyFromAma">Buy from Amazon</button>
        </div>
    )
}

export default AnimeDataDown

import React from 'react'
import { MdScreenShare } from "react-icons/md"
import { BsFillStarFill } from "react-icons/bs"
import { AiOutlinePlusSquare } from "react-icons/ai"
import { Link } from "react-router-dom"

import "../Scss/AnimeDisplayRow.scss"
import { setOneAnime } from '../../Store/actions.js/AnimeActions'
import { useDispatch } from 'react-redux'

const AnimeDisplayRow = ({ data, rank }) => {

    const dispatch = useDispatch()

    const {
        title,
        type,
        episodes,
        first,
        last,
        score,
        members,
        img
    } = data


    return (
        <div className={(rank % 2) === 0 ? "animeDisRow grey" : "animeDisRow"}>
            <h4 className="animeRank">{rank}</h4>
            <div className="animeBoxInf">
                <div className="animeBoxImg">
                    <img src={img} alt="" className="topAnimeImg" />
                </div>
                <div className="animeBoxData">
                    <div className="animeBoxDataHead">
                        <Link to="/animeDis" className="animeTopLink">
                            <h3 className="topAnimeTitle" onMouseOver={() => dispatch(setOneAnime(data))}>{title}</h3>
                        </Link>
                        <MdScreenShare className="screenIcon" />
                    </div>
                    <div className="animeTypeInfo">
                        <h4 className="animeTypeType">{type}</h4>
                        <h4 className="animeTypeEpi">({episodes} eps)</h4>
                    </div>
                    <div className="animeFirstLast">
                        <h4 className="animeFirstItem">{first} </h4>
                        <h4 className="separatorIte">-</h4>
                        <h4 className="animeFirstItem"> {last}</h4>
                    </div>
                    <h4 className="animeMemb">{members} members</h4>
                </div>
            </div>
            <div className="animeScoreBox">
                <BsFillStarFill className="starIcon" />
                <h3 className="animeScore">{score}</h3>
            </div>
            <div className="animeScoreUser">
                <BsFillStarFill className="starIcon" />
                <h3 className="animeUserScore">N/A</h3>
            </div>
            <div className="addToListBox">
                <button className="addToUserList">
                    <AiOutlinePlusSquare />
                Add to List</button>
            </div>
        </div >
    )
}

export default AnimeDisplayRow

/*
        <div className={grey ? "animeDisRow grey" : "animeDisRow"}>
*/

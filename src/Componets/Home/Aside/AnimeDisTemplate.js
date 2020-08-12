import React from 'react'
import { useDispatch } from 'react-redux'
import { setOneAnime } from '../../../Store/actions.js/AnimeActions'
import { Link } from 'react-router-dom'

import "../../../Css/utils/Links.scss"

const AnimeDisTemplate = ({ data, index }) => {

    const dispatch = useDispatch()

    const {
        id,
        title,
        type,
        score,
        episodes,
        members,
        img
    } = data

    const animeSetMove = (anime) => {
        dispatch(setOneAnime(anime))
    }


    return (
        <div className="animeTemplate">
            <h5 className="animePos">{index + 1}</h5>
            <Link to="animeDis" >
                <img src={img} alt="" className="animeImg" onClick={() => animeSetMove(data)} />
            </Link>
            <div className="animeCentralBox">
                <Link to="animeDis" className="links">
                    <h3 className="animeTitle" onClick={() => animeSetMove(data)}>{title}</h3>
                </Link>
                <div className="animeCentralData">
                    <h5>{type}, </h5>
                    <h5>{episodes} eps, </h5>
                    <h5>scored:{score}</h5>
                </div>
                <h5 className="animeMemb">{members.length} members</h5>
            </div>
            <div className="animeBtnBox">
                <button className="animeTemplateBtn">Add</button>
            </div>
        </div>
    )
}

export default AnimeDisTemplate

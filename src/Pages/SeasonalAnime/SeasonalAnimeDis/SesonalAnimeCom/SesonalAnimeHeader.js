import React from 'react'
import { RiComputerLine } from "react-icons/ri"
import { useDispatch } from 'react-redux'
import { setOneAnime } from '../../../../Store/actions.js/AnimeActions'
import { Link } from 'react-router-dom'

const SesonalAnimeHeader = ({ data }) => {

    const dispatch = useDispatch()
    const { title } = data

    const handlerHoover = id => {

    }

    return (
        <div className="sesonalAnimeHeader">
            <div className="animeHeaderBox">
                <Link to="/animeDis" className="animeHeaderLink">
                    <h2 className="animeHeaderTitle" onMouseOver={() => dispatch(setOneAnime(data))}>{title}</h2>
                </Link>
            </div>
            <div className="animeHeaderIconBox">
                <RiComputerLine className="compuIcon" />
            </div>
        </div>
    )
}

export default SesonalAnimeHeader

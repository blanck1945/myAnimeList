import React, { useEffect } from 'react'
import NewsCenter from "./NewsCenter"
import { useDispatch } from 'react-redux'
import { setNavHeader } from '../../Store/actions.js/NavBarHeaderActions'
import NewsAside from './NewsAside'

import "./NewsDisStyle/NewsDis.scss"
const NewsDisplay = () => {


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavHeader("Anime & Manga News"))
    })

    return (
        <div className="newsContainer">
            <NewsCenter />
            <NewsAside />
        </div>
    )
}

export default NewsDisplay

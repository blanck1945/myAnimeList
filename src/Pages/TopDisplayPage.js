import React, { useEffect } from 'react'
import NavPages from '../Reuse/NavPages/NavPages'
import FacebookBanner from '../Componets/Home/FacebookBanner/FacebookBanner'
import TopDisplay from '../Reuse/NavPages/TopDisplay'
import TopSchema from '../Reuse/NavPages/TopSchema'

import "../Css/Pages/TopDisplayPage.scss"
import { useDispatch } from 'react-redux'
import { setNavHeader } from '../Store/actions.js/NavBarHeaderActions'

const TopDisplayPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavHeader("Top Anime"))
    }, [])

    return (
        <div className="topDisplayPage">
            <div className="centerBox">
                <NavPages />
                <FacebookBanner banner={"faceBanner"} facebookBanner={"facebookClass"} />
                <TopDisplay />
                <TopSchema />
            </div>
        </div>
    )
}

export default TopDisplayPage

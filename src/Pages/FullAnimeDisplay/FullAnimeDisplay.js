import React, { useEffect } from 'react'
import AsideDisAnime from './AsideDisAnime'
import CenterAnimeDis from './CenterAnimeDis'

import "../../Css/Pages/FullAnimeDisplay/FullAnimeDisplay.scss"
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setNavHeader } from '../../Store/actions.js/NavBarHeaderActions'

const FullAnimeDisplay = () => {

    const { oneAnime } = useSelector(state => state.anime)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavHeader(oneAnime.title))
    })


    return (
        <>{
            oneAnime.title === undefined ? <Redirect to="/" />
                : <div className="fullAnimeDis">
                    <AsideDisAnime />
                    <CenterAnimeDis />
                </div>
        }</>
    )
}

export default FullAnimeDisplay

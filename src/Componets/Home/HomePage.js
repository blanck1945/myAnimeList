import React, { useEffect } from 'react'
import CenterPage from './CenterPage'
import Aside from './Aside'


import "../../Css/HomePage/HomePage.scss"
import "../../Css/Aside/Aside.scss"
import { useDispatch, useSelector } from 'react-redux'
import { setNavHeader } from '../../Store/actions.js/NavBarHeaderActions'

const HomePage = () => {

    const dispatch = useDispatch()
    const { navHeader } = useSelector(state => state.nav)

    useEffect(() => {
        dispatch(setNavHeader("Welcome to MyAnimeList"))
    }, [])

    return (
        <>
            <div className="homePage">
                <CenterPage />
                <Aside />
            </div>
        </>
    )
}

export default HomePage

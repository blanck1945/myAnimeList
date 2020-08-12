import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAnimesFromStudios, setAnimeFromSeason, setQueryType } from '../../Store/actions.js/StudioSearchActions'
import LinkElement from '../../Reuse/NavPages/LinkElement'
import NavLinkFilter from '../../Reuse/NavPages/NavLinkFilter'
import BigSearchBar from '../SearchAnime/BigSearchBar'
import AnimeTemplateSeason from '../SeasonalAnime/SeasonalAnimeDis/AnimeTemplateSeason'
import BodyTitles from '../../Reuse/BodyTitles'


import "../../Css/Container/container.scss"
import "../../Css/navPages/Nav.Pages.scss"
import "../../Css/Pages/SeasonalAnime/AnimeDisSeason.scss"
import "./titleHeader.scss"

const StudioSearch = () => {

    const dispatch = useDispatch()
    const { searchAnime } = useSelector(state => state.anime)
    const { searchQuery, filter, yearQuery } = useSelector(state => state.utils)

    useEffect(() => {
        if (filter === "studio") {
            dispatch(setAnimesFromStudios(searchQuery))
        }
        else {
            //dispatch(setQueryType(filter, searchQuery, yearQuery))
            dispatch(setAnimeFromSeason(searchQuery, yearQuery))
        }
    }, [])

    const animeDis = searchAnime.length === null ? [] : searchAnime.map(el =>
        <AnimeTemplateSeason key={el.id} data={el} />)

    return (
        <div className="container">
            <div className="navPages">
                <div className="upNavDis">
                    <LinkElement header={"Top"} center={"linkElementBox"} arrowMar={"arrowMar"} />
                    <LinkElement header={"Anime"} center={"linkElementBox center"} arrowMar={"arrowMar"} />
                    <LinkElement header={"Produce"} center={"linkElementBox center"} arrowMar={"arrowMar"} />
                    <LinkElement header={filter === "studio" ? searchQuery : `${searchQuery} - ${yearQuery}`} center={"linkElementBox center"} arrow={true} />
                </div>
                <div className="downNavDis">
                    <NavLinkFilter header={"UpComing"} select={false} />
                    <NavLinkFilter header={"Jus Added"} select={false} />
                </div>
            </div>
            <BigSearchBar />
            <div className="titleHeader">
                <BodyTitles header={`${searchQuery} - ${yearQuery} - (${animeDis.length})`} />
            </div>
            <div className="animeDisCenter">
                {animeDis}
            </div>
        </div >
    )
}

export default StudioSearch

//  <AnimeTemplateSeason data={searchAnime} />
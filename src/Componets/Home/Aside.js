import React, { useEffect } from 'react'
import MalSocial from './Aside/MalSocial'
import AnimeDisplay from './Aside/AnimeDisplay'
import { fetchTopAiringAnime, fetchTopUpcomingAnime } from '../../Store/actions.js/AnimeActions'
import { useDispatch, useSelector } from 'react-redux'


const Aside = () => {

    const dispatch = useDispatch()
    const { topAiringAnime, upcomingAnime, sesonalAnime } = useSelector(state => state.anime)
    const { isLog } = useSelector(state => state.log)

    useEffect(() => {
        dispatch(fetchTopAiringAnime())
        dispatch(fetchTopUpcomingAnime())
    }, [])

    return (
        <div className="aside">
            {isLog ? <>
                <MalSocial classtype={"malBox"} />
                <AnimeDisplay header={"Top Airing Anime"} data={sesonalAnime} />
                <AnimeDisplay header={"Top Upcoming Anime"} data={upcomingAnime} />
            </>
                : <>
                    <AnimeDisplay header={"Top Airing Anime"} data={sesonalAnime} />
                    <MalSocial classtype={"malBox"} />
                    <AnimeDisplay header={"Top Upcoming Anime"} data={upcomingAnime} /></>}
        </div>
    )
}

export default Aside

//data={topAiringAnime}
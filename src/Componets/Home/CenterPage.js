import React, { useEffect } from 'react'
import ForumAlerts from './ForumAlerts'
import Carrousel from './Carrousel/Carrousel'
import FacebookBanner from './FacebookBanner/FacebookBanner'
import { useDispatch, useSelector } from 'react-redux'
import MalSocial from './Aside/MalSocial'
import { videos } from "../../utils/videos"
import MalFaceSquare from '../MalPublicity/MalFaceSquare'
import ForumHome from './ForumHome/ForumHome'
import { fetchNews, fetchArticles } from '../../Store/actions.js/ArticlesActions'

import "../../Css/Aside/Aside.scss"
import { setCounterOne } from '../../Store/actions.js/AddAnimeToDbActions'
import { fetchUserAnimeList } from '../../Store/actions.js/LoginActions'
import { fetchTopAnime } from '../../Store/actions.js/AnimeActions'
import { setCounterTwo } from '../../Store/actions.js/utilsActions'


const CenterPage = () => {

    const dispatch = useDispatch()
    const { lastUpdatedEpisode, sesonalAnime } = useSelector(state => state.anime)
    const { news, articles } = useSelector(state => state.articles)
    const { isLog, logUser } = useSelector(state => state.log)
    const { counter } = useSelector(state => state.utils)

    console.log(articles)

    const sortedNews = news.sort((news1, news2) => {
        return news2.id - news1.id
    })

    useEffect(() => {
        if (counter === 1) {
            dispatch(fetchUserAnimeList(logUser))
            dispatch(setCounterOne())
            //dispatch(fetchUpdatedCarrousel())
        }
        if (counter === 0) {
            dispatch(fetchTopAnime())
            dispatch(setCounterTwo())
        }

        dispatch(fetchNews())
        dispatch(fetchArticles())
    }, [])


    return (
        <div className="centerPage">
            <div className="centerBox">
                {isLog ? <>
                    <ForumAlerts header={"MyAnimeListAnnouncements"} classType={"forumBox"} msg={"No topics to inform"} />
                    <ForumAlerts header={"My Watched Topics"} classType={"forumBox"} msg={"No watched topics found"} /> </>
                    : <FacebookBanner banner={"faceBanner"} facebookBanner={"bannerInner"} />}
                <Carrousel header={"Spring 2020 Anime"}
                    overlay={true}
                    carrousel={"carrousel"}
                    subTitle={false}
                    video={false}
                    img={"anime2020 gr"}
                    classType={"forumBox"}
                    msg={"Anime Carrousel"}
                    data={sesonalAnime} />
                <Carrousel header={"Latest Updated Episode Videos"}
                    overlay={false}
                    carrousel={"carrousel ajust"}
                    subTitle={true}
                    video={false}
                    img={"anime2020 gr min"}
                    classType={"forumBox"}
                    msg={"Anime Carrousel"}
                    data={lastUpdatedEpisode} />
                <Carrousel header={"Most Popular Promotional Videos"}
                    overlay={false}
                    subTitle={true}
                    video={true}
                    carrousel={"carrousel video"}
                    img={"anime2020 gr min"}
                    classType={"forumBox"}
                    msg={"Anime Carrousel"}
                    data={videos}
                    videoRange={true}
                />
                <div className="socialBox">
                    <MalSocial classtype={"malBox blue"} />
                    <MalFaceSquare />
                </div>
                <div className="forumSpace">
                    <ForumHome
                        data={sortedNews}
                        header={"Anime & Manga News"}
                        comment={true} />
                    <ForumHome
                        data={articles}
                        header={"Featured Articles"}
                        comment={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default CenterPage

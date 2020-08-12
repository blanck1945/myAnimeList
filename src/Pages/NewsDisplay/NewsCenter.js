import React from 'react'
import LinkElements from '../../Reuse/NavPages/LinkElement'
import NewsTitle from './NewsCenter/NewsTitle'
import BodyTitles from "../../Reuse/BodyTitles"

import "./NewsDisStyle/NewsCenter.scss"
import NewsHeader from './NewsCenter/NewsHeader'
import { useSelector } from 'react-redux'
import NewsBody from './NewsCenter/NewsBody'

const NewsCenter = () => {

    const { oneNews } = useSelector(state => state.articles)
    const { title, author, date, text, img, source } = oneNews
    return (
        <div className="newsCenter">
            <div className="navPages">
                <div className="upNavDis">
                    <LinkElements header={"Top"} center={"linkElementBox center"} arrowMar={"arrowMar"} />
                    <LinkElements header={"Anime"} center={"linkElementBox"} arrowMar={"arrowMar"} />
                </div>
                <div className="upNavDis disBor">
                    <LinkElements header={"Top"} center={"linkElementBox center"} arrowMar={"arrowMar"} />
                    <LinkElements header={"News"} center={"linkElementBox"} arrowMar={"arrowMar"} />
                    <LinkElements header={title} center={"linkElementBox"} arrow={true} />
                </div>
            </div>
            <NewsTitle header={title} />
            <NewsHeader author={author} date={date} />
            <NewsBody text={text} img={img} source={source} />
            <div className="recent">
                <BodyTitles header={"Recent Comments"} />
            </div>
        </div>
    )
}

export default NewsCenter

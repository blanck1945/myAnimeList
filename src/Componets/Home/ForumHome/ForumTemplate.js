import React from 'react'
import { Link } from "react-router-dom"

import "../../../Css/utils/Links.scss"
import { useDispatch } from 'react-redux'
import { setOneNews } from '../../../Store/actions.js/ArticlesActions'

const ForumTemplate = ({ data, comment }) => {

    const dispatch = useDispatch()

    const {
        title,
        subtitle,
        img,
        text,
        author,
        autthor,
        comments,
        views,
        spoiler,
        date
    } = data


    return (
        <div className="forumBody">
            <img src={img} alt={title} className="forumImg" />
            <div className="forumText">
                <Link to="/news" className="links">
                    <h3 className="forumTitle" onClick={() => dispatch(setOneNews(data))}>{title}</h3>
                </Link>
                <p className="forumPara">{comment ? text.substr(0, 168) : subtitle}<span className="readMore">{comment ? "Read More" : null}</span></p>
                <div className="authorBox">
                    <h4 className="forumDate">{comment ? `${date} By ` : "by "}<span className="forumUser">{author ? author : autthor}
                    </span>
                    </h4>
                    <span> | </span>
                    {spoiler ? <>
                        <span> | </span>
                        <button className="spoilerBtn">spoiler</button> </>
                        : null}
                </div>
            </div>
        </div>
    )
}

export default ForumTemplate

//<h4 className="forumComme">{comment ? `Discuss (${comments.length})` : 0 + "views"}</h4>

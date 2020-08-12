import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPostTo } from '../../Store/AdminActions/AdminMenu'
import PostNews from "./PostNews"

import "../AdminScss/PostNews/PostContent.scss"
import TitleComp from '../AdminDashBoard/AdminCenterPages/Components/TitleComp'
import PostArticle from './PostArticle'

const PostContent = () => {

    const dispatch = useDispatch()
    const { posting } = useSelector(state => state.adminMenu)

    return (
        <div className="addFormDiv">
            <div className="centerContainer">
                <TitleComp header={"Choose the type of Post"} />
                <div className="deleteMsgBox">
                    <div className="selectPost">
                        <div className="postingBtn">
                            <button className={posting === "news" ? "activeBtn" : null} onClick={() => dispatch(setPostTo("news"))}>Post News</button>
                            <button className={posting === "article" ? "activeBtn" : null} onClick={() => dispatch(setPostTo("article"))}>Post Article</button>
                        </div>
                        <div className="postingSpace">
                            {posting === "news" ? <PostNews /> : null}
                            {posting === "article" ? <PostArticle /> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostContent

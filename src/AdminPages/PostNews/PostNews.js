import React, { useState } from 'react'
import { newsModel } from "../utils/NewsModel"

import "../AdminScss/PostNews/PostNews.scss"
import { useSelector, useDispatch } from 'react-redux'
import { postNews } from '../../Store/AdminActions/PostNewsActions'

const PostNews = () => {

    const [news, setNews] = useState(newsModel)
    const dispatch = useDispatch()

    const { title, text, source, author, tags, img, link, animeRef } = news
    const { logUser } = useSelector(state => state.log)
    const { username, id } = logUser[0]
    const handlerInput = e => {
        setNews({
            ...news,
            author: username,
            [e.target.name]: e.target.value
        })
    }

    const handlerSubmit = e => {
        e.preventDefault()
        dispatch(postNews(news, id))
    }

    return (
        <div className="addFormDiv">
            <form action="submit" className="addPosting" onSubmit={(e) => handlerSubmit(e)}>
                <div className="formHeader">
                    <h3 className="formTitle">Post News</h3>
                </div>
                <div className="postingCenter">
                    <div className="postingHeader">
                        <div className="headerInputs">
                            <div className="inputSide">
                                <label htmlFor="author">Author</label>
                                <input type="text" value={username} className="generalInputs" disabled
                                    name="author" placeholder="Author" onChange={(e) => handlerInput(e)} />
                                <label htmlFor="title">Title</label>
                                <input type="text" value={title} className="generalInputs"
                                    name="title" placeholder="Title" onChange={(e) => handlerInput(e)} />
                                <label htmlFor="source">Source</label>
                                <input type="text" value={source} className="generalInputs"
                                    name="source" placeholder="Source" onChange={(e) => handlerInput(e)} />
                            </div>
                            <div className="inputSide">
                                <label htmlFor="title">Tags</label>
                                <input type="text" value={tags} className="generalInputs"
                                    name="tags" placeholder="Tags" onChange={(e) => handlerInput(e)} />
                                <label htmlFor="title">Anime Reference</label>
                                <input type="text" value={animeRef} className="generalInputs"
                                    name="animeRef" placeholder="Anime Reference" onChange={(e) => handlerInput(e)} />
                                <label htmlFor="title">Link</label>
                                <input type="text" value={link} className="generalInputs"
                                    name="link" placeholder="Link" onChange={(e) => handlerInput(e)} />
                            </div>
                        </div>
                    </div>
                    <div className="postingSide">
                        <h4>Enter Text</h4>
                        <textarea name="text" id="" cols="30" rows="10" value={text} onChange={(e) => handlerInput(e)}></textarea>
                    </div>
                    <div className="postingImg">
                        <label htmlFor="title">Img (optional)</label>
                        <input type="text" value={img} className="generalInputs"
                            name="img" placeholder="Image" onChange={(e) => handlerInput(e)} />
                    </div>
                    <button>Post News</button>
                </div>
            </form>
        </div>
    )
}

export default PostNews

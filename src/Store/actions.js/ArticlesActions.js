import { SET_NEWS, SET_ARTICLES, SET_ONE_NEWS } from "../Types"
import axios from "axios"

export const setNews = data => ({
    type: SET_NEWS,
    data
})

export const setOneNews = data => ({
    type: SET_ONE_NEWS,
    data
})

export const setArticles = data => ({
    type: SET_ARTICLES,
    data
})

export const fetchNews = () => {
    return async dispatch => {
        try {
            const res = await axios.get("http://localhost:4000/api/news")
            dispatch(setNews(res.data))
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const fetchArticles = () => {
    return async dispatch => {
        try {
            const res = await axios.get("http://localhost:4000/api/news/articles")
            dispatch(setArticles(res.data))
        }
        catch (err) {
            console.log(err)
        }
    }
}


import { ADD_NEWS, ADD_ARTICLE, ADD_ANIME } from "../adminTypes"
import Axios from "axios"


const addNews = data => ({
    type: ADD_NEWS,
    data
})

const addArticle = data => ({
    type: ADD_ARTICLE,
    data
})

const addAnime = data => ({
    type: ADD_ANIME,
    data
})

export const postNews = (data, id) => {
    const config = {
        header: {
            "Content-Type": "application/json"
        }
    }
    return async dispatch => {
        try {
            const res = await Axios.post(`http://localhost:4000/api/news/${id}`, data, config)
            dispatch(addNews(res.data))
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const postArticle = (data, id) => {
    const config = {
        header: {
            "Content-Type": "application/json"
        }
    }
    return async dispatch => {
        try {
            const res = await Axios.post(`http://localhost:4000/api/news/article/${id}`, data, config)
            dispatch(addArticle(res.data))
        }
        catch (err) {
            console.log(err)
        }
    }
}


export const postAnime = (data) => {
    const config = {
        header: {
            "Content-Type": "application/json"
        }
    }
    return async dispatch => {
        try {
            const res = await Axios.post(`http://localhost:4000/api/anime`, data, config)
            dispatch(addAnime(res.data))
        }
        catch (err) {
            console.log(err)
        }
    }
}



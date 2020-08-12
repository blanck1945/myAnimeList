import {
    GET_TOP_AIRING,
    SET_UPCOMING_ANIME,
    SET_CARROUSEL_ANIME,
    SET_LAST_UPDATED,
    SET_TOP_ANIME,
    SET_TOP_ANIME_IMG,
    SET_ONE_ANIME,
    SET_ONE_UPDATE,
    SET_SESONAL_ANIME,
    REPLACE_TOP_FOR_USER
} from "../Types"
import axios from "axios"

export const setUserList = data => ({
    type: REPLACE_TOP_FOR_USER,
    data
})

export const setOneAnime = data => ({
    type: SET_ONE_ANIME,
    data
})

export const setOneUpdate = data => ({
    type: SET_ONE_UPDATE,
    data
})

export const setTopAiringAnime = data => ({
    type: GET_TOP_AIRING,
    data
})

export const setTopUpcomingAnime = data => ({
    type: SET_UPCOMING_ANIME,
    data
})

export const setCarrouselAnime = data => ({
    type: SET_CARROUSEL_ANIME,
    data
})

export const setLastUpdatedCarrousel = data => ({
    type: SET_LAST_UPDATED,
    data
})

export const setSesonalAnime = data => ({
    type: SET_SESONAL_ANIME,
    data
})

const setTopAnime = data => ({
    type: SET_TOP_ANIME,
    data
})

const setTopAnimeImg = data => ({
    type: SET_TOP_ANIME_IMG,
    data
})
/*
export const fetchSesonalAnime = year => {
    return async dispatch => {
        try {
            const res = await axios.get(`http://localhost:4000/api/anime/season/${year}`)
            dispatch(setSesonalAnime(res.data))
        }
        catch (err) {
            console.log(err)
        }
    }
}*/

export const fetchTopAnime = () => {
    return async dispatch => {
        try {
            const res = await axios.get("http://localhost:4000/api/anime")
            console.log(res.data)
            dispatch(setTopAnime(res.data))
            dispatch(setSesonalAnime(res.data))
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const fetchTopAnimeImg = () => {
    return async dispatch => {
        try {
            const res = await axios.get("http://localhost:3004/topAnimeImg")
            dispatch(setTopAnimeImg(res.data))
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const fetchTopAiringAnime = () => {
    return async dispatch => {
        try {
            const res = await axios.get("http://localhost:3004/topAiringAnime")
            dispatch(setTopAiringAnime(res.data))
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const fetchTopUpcomingAnime = () => {
    return async dispatch => {
        try {
            const res = await axios.get("http://localhost:3004/topUpcomingAnime")
            dispatch(setTopUpcomingAnime(res.data))
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const fetchMainCarrousel = () => {
    return async dispatch => {
        try {
            const res = await axios.get("http://localhost:3004/anime2020Spring")
            dispatch(setCarrouselAnime(res.data))
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const fetchUpdatedCarrousel = () => {
    return async dispatch => {
        try {
            const res = await axios.get("http://localhost:3004/lastestUpdateEpisode")
            dispatch(setLastUpdatedCarrousel(res.data))
        }
        catch (err) {
            console.log(err)
        }
    }
}

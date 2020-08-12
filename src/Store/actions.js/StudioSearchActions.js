import { SET_ANIMES_FROM_STUDIO, SET_ANIME_FROM_SEASON } from "../Types"
import Axios from "axios"
/*
export const setQueryType = (value, filter) => {
    return async dispatch => {
        if (value === "studio") {
            dispatch(setAnimesFromStudios(filter))
        }
        if (value === "season") {
            console.log(value)
            console.log(filter)
            dispatch(setAnimeFromSeason(filter))
        }
    }
}*/

export const setAnimesFromStudios = data => ({
    type: SET_ANIMES_FROM_STUDIO,
    data
})

export const setAnimeFromSeason = (season, year) => ({
    type: SET_ANIME_FROM_SEASON,
    season, year
})
/*
export const setAnimesFromUser = data => ({
    type: SET_ANIMES_FROM_USER
})*/
/*
export const fetchAnimesFromStudio = (studio) => {
    return async dispatch => {
        try {
            const res = await Axios.get(`http://localhost:4000/api/searchQuery/${studio}`)
            dispatch(setAnimesFromStudios(res.data))
        }
        catch (err) {
            console.log(err)
        }
    }
}*/
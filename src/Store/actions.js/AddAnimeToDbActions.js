import { POST_ANIME, SET_COUNTER_ONE } from "../Types"
import axios from "axios"
import checkFunc from "../../utils/checkFunc"

const setPost = data => ({
    type: POST_ANIME,
    data
})

export const setCounterOne = () => ({
    type: SET_COUNTER_ONE
})

export const setPostFunc = (animeId, userId, value) => {
    return async dispatch => {
        const func = checkFunc(value)
        dispatch(func(animeId, userId))
    }
}

export const postAnimeToDb = (animeId, userId) => {
    const config = {
        header: {
            "Content-Type": "application/json"
        }
    }
    return async dispatch => {
        try {
            await axios.post("http://localhost:4000/api/animeList/addNew", { animeId, userId }, config)
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const setAnimeToWatching = (animeId, userId) => {
    const config = {
        header: {
            "Content-Type": "application/json"
        }
    }
    return async dispatch => {
        try {
            await axios.post("http://localhost:4000/api/animeList/addWatching", { animeId, userId }, config)
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const setAnimeToComplete = (animeId, userId) => {
    const config = {
        header: {
            "Content-Type": "application/json"
        }
    }
    return async dispatch => {
        try {
            await axios.post("http://localhost:4000/api/animeList/addComplete", { animeId, userId }, config)
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const setAnimeToOnHold = (animeId, userId) => {
    const config = {
        header: {
            "Content-Type": "application/json"
        }
    }
    return async dispatch => {
        try {
            await axios.post("http://localhost:4000/api/animeList/addOnHold", { animeId, userId }, config)
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const setAnimeToDrop = (animeId, userId) => {
    const config = {
        header: {
            "Content-Type": "application/json"
        }
    }
    return async dispatch => {
        try {
            await axios.post("http://localhost:4000/api/animeList/addDrop", { animeId, userId }, config)
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const setAnimeToPlanTo = (animeId, userId) => {
    const config = {
        header: {
            "Content-Type": "application/json"
        }
    }
    return async dispatch => {
        try {
            await axios.post("http://localhost:4000/api/animeList/addPlanTo", { animeId, userId }, config)
        }
        catch (err) {
            console.log(err)
        }
    }
}
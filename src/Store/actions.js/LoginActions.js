import { SIGN_UP, SIGN_OFF, LOG_IN, LOG_OFF, SET_ANIME_LIST } from "../Types"
import Axios from "axios"
import { setSesonalAnime } from "./AnimeActions"

export const signUp = () => ({
    type: SIGN_UP
})

export const logIn = data => ({
    type: LOG_IN,
    data
})

export const signOff = () => ({
    type: SIGN_OFF
})

export const logOff = () => ({
    type: LOG_OFF
})

export const setAnimeList = data => ({
    type: SET_ANIME_LIST,
    data
})

export const fetchUserAnimeList = (logUser) => {
    return async dispatch => {
        try {
            const userId = logUser[0].id
            const res = await Axios.get(`http://localhost:4000/api/anime/userAnimeList/${userId}`)
            console.log(res.data)
            dispatch(setAnimeList(res.data))
            dispatch(setSesonalAnime(res.data))
        }
        catch (err) {
            console.log(err)
        }
    }
}
export const postSignUp = data => {
    const config = {
        header: {
            "Content-Type": "application/json"
        }
    }
    return async dispatch => {
        try {
            const res = await Axios.post("http://localhost:4000/api/sign/signUp", data, config)
            dispatch(signUp())
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const postLogIn = data => {
    const config = {
        header: {
            "Content-Type": "application/json"
        }
    }
    return async dispatch => {
        try {
            const res = await Axios.post("http://localhost:4000/api/sign/logIn", data, config)
            console.log(res.data)
            dispatch(logIn(res.data))
        }
        catch (err) {
            console.log(err)
        }
    }
}
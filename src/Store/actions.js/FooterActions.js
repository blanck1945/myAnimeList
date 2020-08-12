import { TOP_ANIME_SHORT, TOP_CHARA_SHORT } from "../Types"
import Axios from "axios"

export const setTopAnimeShort = dataAnime => ({
    type: TOP_ANIME_SHORT,
    dataAnime
})

export const setTopCharaShort = dataChara => ({
    type: TOP_CHARA_SHORT,
    dataChara
})


export const fetchAnimeAndCharaShort = () => {
    return async dispatch => {
        try {
            const res = await Axios.get("http://localhost:3004/TopAnimeShort")
            const respo = await Axios.get("http://localhost:3004/mostPopularChara")
            dispatch(setTopAnimeShort(res.data))
            dispatch(setTopCharaShort(respo.data))
        }
        catch (err) {
            console.log(err)
        }
    }
}
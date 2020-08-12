import { SET_ANIME_WATCHING } from "../Types"
import { setOneUpdate, setSesonalAnime } from "./AnimeActions"

export const setAnimeWatching = (id, value) => ({
    type: SET_ANIME_WATCHING,
    id, value
})

export const setOneAnimeState = (id, oneAnime, topAnime, value) => {
    return async dispatch => {
        const oneAnimeUpdate = { ...oneAnime, state: value }
        const newList = topAnime.map(el => el.id === id ? { ...el, state: value } : el)
        dispatch(setOneUpdate(oneAnimeUpdate))
        dispatch(setSesonalAnime(newList))
        dispatch(setAnimeWatching(id, value))
    }
}
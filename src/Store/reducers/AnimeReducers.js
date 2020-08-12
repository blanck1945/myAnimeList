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
    REPLACE_TOP_FOR_USER,
    SET_ANIME_WATCHING,
    SET_ANIME_LIST,
    SET_ANIMES_FROM_STUDIO,
    SET_ANIME_FROM_SEASON
} from "../Types"

export const initialState = {
    topAiringAnime: [],
    upcomingAnime: [],
    searchAnime: [],
    mainCarrousel: [],
    lastUpdatedEpisode: [],
    topAnime: [],
    topAnimeImg: [],
    oneAnime: {},
    sesonalAnime: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TOP_AIRING:
            return {
                ...state,
                topAiringAnime: action.data
            }
        case SET_ANIME_LIST:
            return {
                ...state,
                topAnime: action.data
            }
        case SET_ANIME_WATCHING:
            return {
                ...state,
                topAnime: state.topAnime.map(el => el.id === action.id ? { ...el, state: action.value } : el)
            }
        case REPLACE_TOP_FOR_USER:
            return {
                ...state,
                topAnime: state.topAnime.map(el => el.id === action.data[0].id ? el.state = action.data[0] : el)
            }
        case SET_UPCOMING_ANIME:
            return {
                ...state,
                upcomingAnime: action.data
            }
        case SET_CARROUSEL_ANIME:
            return {
                ...state,
                mainCarrousel: action.data
            }
        case SET_LAST_UPDATED:
            return {
                ...state,
                lastUpdatedEpisode: action.data
            }
        case SET_TOP_ANIME:
            return {
                ...state,
                topAnime: action.data
            }
        case SET_TOP_ANIME_IMG:
            return {
                ...state,
                topAnimeImg: action.data
            }
        case SET_ONE_ANIME:
            return {
                ...state,
                oneAnime: { ...action.data }
            }
        case SET_ONE_UPDATE:
            return {
                ...state,
                oneAnime: action.data
            }
        case SET_ANIMES_FROM_STUDIO:
            return {
                ...state,
                searchAnime: state.topAnime.filter(el => el.studio.includes(action.data))
            }
        case SET_ANIME_FROM_SEASON:
            return {
                ...state,
                searchAnime: state.topAnime.filter(el => el.year === action.year && el.season === action.season)
            }
        case SET_SESONAL_ANIME:
            return {
                ...state,
                sesonalAnime: action.data.filter(el => el.year === 2020)
            }

        default:
            return state
    }
}
import { TOP_ANIME_SHORT, TOP_CHARA_SHORT } from "../Types"

const initialState = {
    topAnimeShort: [],
    topCharaShort: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TOP_ANIME_SHORT:
            return {
                ...state,
                topAnimeShort: action.dataAnime,
            }
        case TOP_CHARA_SHORT:
            return {
                ...state,
                topCharaShort: action.dataChara
            }
        default:
            return state
    }
}
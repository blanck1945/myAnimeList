import { GET_ALL_MANGAS, GET_ONE_MANGA } from "../MangaTypes"

const initialState = {
    manga: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_MANGAS:
            return {
                manga: action.data
            }
        default:
            return state
    }
}
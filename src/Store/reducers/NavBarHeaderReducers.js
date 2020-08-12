import { SET_NAV_HEADER } from "../Types"

const initialState = {
    navHeader: "Welcome to MyAnimeList",
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_NAV_HEADER:
            return { navHeader: action.header }
        default:
            return state
    }
}
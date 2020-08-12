import { SET_ADMIN_MENU, SET_POST_TO } from "../adminTypes"

const initialState = {
    menu: "base",
    posting: "news"
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ADMIN_MENU:
            return {
                ...state,
                menu: action.value
            }
        case SET_POST_TO:
            return {
                ...state,
                posting: action.value
            }
        default:
            return state
    }
}
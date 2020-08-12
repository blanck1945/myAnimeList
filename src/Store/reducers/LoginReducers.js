import { SIGN_UP, SIGN_OFF, LOG_OFF, LOG_IN, SET_ANIME_LIST } from "../Types"

const initialState = {
    isLog: false,
    isSign: false,
    logUser: [{
        id: "1",
        username: "gatica990"
    }],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            return {
                ...state,
                isSign: true
            }
        case SIGN_OFF:
            return {
                ...state,
                isSign: false
            }
        case LOG_OFF:
            return {
                ...state,
                isLog: true
            }
        case LOG_IN:
            return {
                ...state,
                isLog: true,
                logUser: action.data
            }
        default:
            return state
    }
}
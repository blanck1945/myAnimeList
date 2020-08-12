import { POST_ANIME, SET_COUNTER_ONE } from "../Types"

const initialState = {
    post: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case POST_ANIME:
            return {
                post: action.data
            }
        default:
            return state
    }
}
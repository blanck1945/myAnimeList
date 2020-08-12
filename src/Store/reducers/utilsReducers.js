import { SET_BTN_COLOR, SET_SEARCH_QUERY, SET_COUNTER_TWO, SET_COUNTER_ONE, SET_FILTER_QUERY, SET_YEAR_QUERY } from "../Types"

const initialState = {
    color: "addToMyList",
    searchQuery: "",
    filter: "",
    yearQuery: "",
    counter: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_BTN_COLOR:
            return { color: `addToMyList ${action.data}` }
        case SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.data
            }
        case SET_FILTER_QUERY:
            return {
                ...state,
                filter: action.data
            }
        case SET_YEAR_QUERY:
            return {
                ...state,
                yearQuery: action.data
            }
        case SET_COUNTER_ONE:
            return {
                ...state,
                counter: 1
            }
        case SET_COUNTER_TWO:
            return {
                ...state,
                counter: 2
            }

        default:
            return state
    }
}
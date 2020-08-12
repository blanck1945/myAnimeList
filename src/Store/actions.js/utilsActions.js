import { SET_BTN_COLOR, SET_SEARCH_QUERY, SET_COUNTER_ONE, SET_COUNTER_TWO, SET_FILTER_QUERY, SET_YEAR_QUERY } from "../Types"

export const setColor = data => ({
    type: SET_BTN_COLOR,
    data
})

export const setSearchQuery = data => ({
    type: SET_SEARCH_QUERY,
    data
})

export const setYearQuery = data => ({
    type: SET_YEAR_QUERY,
    data
})

export const setFilterQuery = data => ({
    type: SET_FILTER_QUERY,
    data
})

export const setCounterOne = () => ({
    type: SET_COUNTER_ONE
})

export const setCounterTwo = () => ({
    type: SET_COUNTER_TWO
})

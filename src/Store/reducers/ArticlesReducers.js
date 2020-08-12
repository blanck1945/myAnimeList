import { SET_NEWS, SET_ARTICLES, SET_ONE_NEWS } from "../Types"
import { ADD_NEWS, ADD_ARTICLE } from "../adminTypes"

const initialState = {
    news: [],
    articles: [],
    oneNews: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {
                ...state,
                news: action.data
            }
        case SET_ARTICLES:
            return {
                ...state,
                articles: action.data
            }
        case SET_ONE_NEWS:
            return {
                ...state,
                oneNews: action.data
            }
        case ADD_NEWS:
            return {
                ...state,
                news: [...state.news, { ...action.data }]
            }
        case ADD_ARTICLE:
            return {
                ...state,
                articles: [...state.articles, { ...action.data }]
            }
        default:
            return state
    }
}


/*
Tadahiro Miura's Yuragi-sou no Yuuna-san (Yuuna and the Haunted Hot Springs) manga ended in the 27th issue of Weekly Shounen Jump on Monday. A new manga commemorating its four-year serialization will debut in this year's Summer edition of Jump GIGA.*/
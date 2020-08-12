import { combineReducers } from "redux"
import anime from "./AnimeReducers"
import articles from "./ArticlesReducers"
import footer from "./FooterReducers"
import post from "./AddAnimeToDbReducers"
import log from "./LoginReducers"
import utils from "./utilsReducers"
import adminMenu from "./AdminReducers"
import nav from "./NavBarHeaderReducers"

//Second types of imports
import manga from "../MangaReducers/MangaReducers"

export default combineReducers({
    anime,
    articles,
    footer,
    post,
    log,
    utils,
    adminMenu,
    nav,
    manga
})
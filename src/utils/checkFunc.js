import { setAnimeToOnHold, setAnimeToComplete, setAnimeToWatching, setAnimeToDrop, setAnimeToPlanTo } from "../Store/actions.js/AddAnimeToDbActions"

export default (value) => {
    if (value === "watching") return setAnimeToWatching
    if (value === "complete") return setAnimeToComplete
    if (value === "onHold") return setAnimeToOnHold
    if (value === "drop") return setAnimeToDrop
    if (value === "planTo") return setAnimeToPlanTo
}
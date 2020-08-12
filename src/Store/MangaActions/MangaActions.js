import { GET_ALL_MANGAS, GET_ONE_MANGA } from "../MangaTypes"
import Axios from "axios"


const setAllMangas = data => ({
    type: GET_ALL_MANGAS,
    data
})

const setOneManga = data => ({
    type: GET_ONE_MANGA,
    data
})

export const fetchAllMangas = () => {
    return async dispatch => {
        try {
            const res = await Axios.get("http://localhost:8000/api/manga")
            console.log(res.data)
            dispatch(setAllMangas(res.data))
        }
        catch (err) {
            console.log(err)
        }
    }
}
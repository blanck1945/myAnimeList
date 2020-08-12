import React, { useEffect } from 'react'
import { fetchAllMangas } from '../Store/MangaActions/MangaActions'
import { useDispatch, useSelector } from "react-redux"

const Manga = () => {

    const dispatch = useDispatch()
    const manga = useSelector(state => state.manga.manga)
    console.log(manga)

    useEffect(() => {
        dispatch(fetchAllMangas())
    }, [])

    return (
        <div>
            {manga.map(el =>
                <h4 key={el.id}>{el.title}</h4>)}
        </div>
    )
}

export default Manga

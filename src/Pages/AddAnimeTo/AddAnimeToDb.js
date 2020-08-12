import React, { useState } from 'react'
import { newAnime } from "../../utils/Models"
import InputRow from './inputRow'
import { useDispatch } from "react-redux"
import { postAnimeToDb } from '../../Store/actions.js/AddAnimeToDbActions'

import "../../Css/Pages/AddToDb/AddAnimeToDb.scss"

const AddAnimeToDb = () => {

    const dispatch = useDispatch()
    const [anime, setAnime] = useState(newAnime)
    const {
        title,
        season,
        type,
        score,
        episodes,
        first,
        last,
        members
    } = anime

    const handlerChange = e => {
        setAnime({
            ...anime,
            [e.target.name]: e.target.value
        })
    }

    const handlerSubmit = e => {
        e.preventDefault()
        dispatch(postAnimeToDb(anime))
        setAnime(newAnime)
    }

    return (
        <div className="addToDb">
            <form action="submit" className="formAdd" onSubmit={(e) => handlerSubmit(e)}>
                <h3>Add Anime</h3>
                <InputRow valor={title} inputType={"text"}
                    place={"Title"} nameData={"title"}
                    change={handlerChange} />
                <InputRow valor={season} inputType={"text"}
                    place={"Season"} nameData={"season"}
                    change={handlerChange} />
                <InputRow valor={type} inputType={"text"}
                    place={"Type"} nameData={"type"}
                    change={handlerChange} />
                <InputRow valor={score} inputType={"text"}
                    place={"Score"} nameData={"score"}
                    change={handlerChange} />
                <InputRow valor={episodes} inputType={"text"}
                    place={"Episodes"} nameData={"episodes"}
                    change={handlerChange} />
                <InputRow valor={first} inputType={"text"}
                    place={"First"} nameData={"first"}
                    change={handlerChange} />
                <InputRow valor={last} inputType={"text"}
                    place={"Last"} nameData={"last"}
                    change={handlerChange} />
                <InputRow valor={members} inputType={"number"}
                    place={"Members"} nameData={"members"}
                    change={handlerChange} />
                <button>Add Anime</button>
            </form>
        </div>
    )
}

export default AddAnimeToDb

import React from 'react'
import AddAdminInput from './AddAdminInput'
import TitleComp from './Components/TitleComp'
import HeaderComp from './Components/headerComp'
import { Formik, Form, Field } from "formik"
import { anime, animeSchema } from "./AnimeSchema/AnimeSchema"
import { useDispatch } from "react-redux"
import { postAnime } from '../../../Store/AdminActions/PostNewsActions'

import "./AdminCenterPagesStyles/AddAnimeToDB.scss"
import "./AdminCenterPagesStyles/generalInputs.scss"

const AddAnimeToDB = () => {

    const dispatch = useDispatch()

    return (
        <div className="addFormDiv">
            <div className="centerContainer">
                <TitleComp header={"Add Anime to our DB"} />
                <div className="deleteMsgBox">
                    <HeaderComp upHeader={"Read carefully the Rules to avoid problems with the required fields"}
                        second={true}
                        secondHeader={"Each import has a review stage previous to be added to the DB"}
                        upHeaderColor={"addingBox"} />
                    <Formik initialValues={anime} onSubmit={values => dispatch(postAnime(values))}
                        validationSchema={animeSchema} >
                        <Form action="submit" className="addToDbForm">
                            <div className="formCenter">
                                <AddAdminInput header={"Title"} placeholder={"Title"} inputName={"title"} inputType={"text"} errorName={"title"} />
                                <AddAdminInput header={"Year"} placeholder={"Year"} inputName={"year"} inputType={"number"} errorName={"year"} />
                                <AddAdminInput header={"Seasons"} placeholder={"Season"} inputName={"season"} inputType={"text"} errorName={"season"} />
                                <AddAdminInput header={"Type"} placeholder={"Type"} inputName={"type"} inputType={"text"} errorName={"type"} />
                                <AddAdminInput header={"Score"} placeholder={"Score"} inputName={"score"} inputType={"text"} errorName={"score"} />
                                <AddAdminInput header={"Episodes"} placeholder={"Episodes"} inputName={"episodes"} inputType={"text"} errorName={"episodes"} />
                                <AddAdminInput header={"Licensor"} placeholder={"Licensor"} inputName={"licensor"} inputType={"text"} errorName={"licensor"} />
                                <AddAdminInput header={"Genres"} placeholder={"Genres"} inputName={"genres"} inputType={"text"} errorName={"genres"} />
                                <AddAdminInput header={"First"} placeholder={"First"} inputName={"first"} inputType={"text"} errorName={"first"} />
                                <AddAdminInput header={"Last"} placeholder={"Last"} inputName={"last"} inputType={"text"} errorName={"last"} />
                                <AddAdminInput header={"Studio"} placeholder={"Studio"} inputName={"studio"} inputType={"text"} errorName={"studio"} />
                                <AddAdminInput header={"Source"} placeholder={"Source"} inputName={"source"} inputType={"text"} errorName={"source"} />
                                <AddAdminInput header={"IMG - (String)"} placeholder={"Img"} inputName={"img"} inputType={"text"} errorName={"img"} />
                                <AddAdminInput header={"Adaptation"} placeholder={"Adaptation"} inputName={"adaptation"} inputType={"text"} errorName={"adaptation"} />
                                <AddAdminInput header={"Prequel"} placeholder={"prequel"} inputName={"prequel"} inputType={"text"} errorName={"prequel"} />
                                <div className="addAnimeInput">
                                    <label htmlFor="sinopsis" className="sinopsisPara">Sinopsis</label>
                                    <Field as="textarea" name="sinopsis" className="sinopsisText"></Field>
                                </div>
                            </div>
                            <button type="submit">Add Anime</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default AddAnimeToDB

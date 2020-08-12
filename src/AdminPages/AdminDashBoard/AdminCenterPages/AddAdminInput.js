import React from 'react'
import { Field, ErrorMessage } from "formik"
import ErrorDiv from '../../PostNews/ErrorDiv/ErrorDiv'

const AddAdminInput = ({ header, placeholder, inputName, inputType, errorName }) => {
    return (
        <div className="addAnimeInput">
            <label htmlFor="title">{header}</label>
            <Field type={inputType} className="generalInputs" name={inputName} placeholder={placeholder} />
            <ErrorMessage name="title" component={ErrorDiv} />
        </div>
    )
}

export default AddAdminInput

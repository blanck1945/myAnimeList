import React from 'react'

const PersonalInfoRow = ({ header, data, even }) => {


    return (
        <div className={even ? "personalInfoRow even" : "personalInfoRow"} >
            <h4 className="staticField">{header}</h4>
            <h4 className="personalData">{data ? data : ""}</h4>
        </div >
    )
}

export default PersonalInfoRow

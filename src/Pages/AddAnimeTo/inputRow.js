import React from 'react'

const InputRow = ({ inputType, place, valor, change, nameData }) => {

    return (
        <div className="addRow">
            <label htmlFor={valor}>{place}</label>
            <input onChange={(e) => change(e)} type={inputType} name={nameData} placeholder={place} value={valor} />
        </div>
    )
}

export default InputRow

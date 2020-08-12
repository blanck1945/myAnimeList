import React from 'react'

const LogBtn = ({ styleBtn, header }) => {
    return (
        <>
            <button className={styleBtn}>{header}</button>
        </>
    )
}

export default LogBtn

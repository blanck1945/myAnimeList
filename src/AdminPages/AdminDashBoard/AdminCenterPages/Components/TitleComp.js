import React from 'react'

import "../../../AdminScss/HeaderComp/HeaderComp.scss"

const TitleComp = ({ header }) => {
    return (
        <>
            <h2 className="deletingTitle">{header}</h2>
        </>
    )
}

export default TitleComp

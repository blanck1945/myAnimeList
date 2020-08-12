import React from 'react'

import "../../../AdminScss/HeaderComp/HeaderComp.scss"

const HeaderComp = ({ upHeader, upHeaderColor, second, secondHeader }) => {
    return (
        <>
            <div className={upHeaderColor}>
                <p>{upHeader}</p>
            </div>
            {second ?
                <div className={upHeaderColor}>
                    <p>{secondHeader}</p>
                </div>
                : null
            }
        </>
    )
}

export default HeaderComp

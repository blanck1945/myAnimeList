import React from 'react'

import "../AdminDashBoard/AdminCenterPages/AdminCenterPagesStyles/AddAnimeDelete.scss"
import TitleComp from '../AdminDashBoard/AdminCenterPages/Components/TitleComp'

const Rules = () => {
    return (
        <div className="addFormDiv">
            <div className="centerContainer">
                <TitleComp header={"Rules"} />
                <div className="deleteMsgBox">

                </div>
            </div>
        </div>
    )
}

export default Rules

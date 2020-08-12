import React from 'react'

import "../AdminDashBoard/AdminCenterPages/AdminCenterPagesStyles/AddAnimeDelete.scss"
import "../AdminScss/AdminDash/AdminDashCenter.scss"
import TitleComp from '../AdminDashBoard/AdminCenterPages/Components/TitleComp'
import HeaderComp from "../AdminDashBoard/AdminCenterPages/Components/headerComp"

const Credentials = () => {
    return (
        <div className="addFormDiv">
            <div className="centerContainer">
                <TitleComp header={"Setting Up Credentials"} />
                <div className="deleteMsgBox">
                    <HeaderComp upHeader={"Credentials are necesary to gain Admin permition. Each user is associate with a ASK number that give access to Admin state. (Read more in => Rules =>" + <span className='link'> ASK Numbers </span> + ")"} upHeaderColor={"credentialsBox"} />
                    <button className="refreshCredentials">Refresh Credentials</button>
                </div>
            </div>
        </div>
    )
}

export default Credentials

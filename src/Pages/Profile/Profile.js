import React from 'react'

import AsideProfile from './AsideProfile/AsideProfile'
import CenterProfile from './CenterProfile/CenterProfile'

import "../../Css/Container/container.scss"
import "./profileContainer.scss"
const Profile = () => {
    return (
        <div className="container">
            <div className="profileContainer">
                <AsideProfile />
                <CenterProfile />
            </div>
        </div>
    )
}

export default Profile

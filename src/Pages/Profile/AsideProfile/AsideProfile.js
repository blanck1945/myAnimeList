import React from 'react'
import PersonalInfo from './personalInfo/PersonalInfo'
import ActionsStats from './ActionsStats/ActionsStats'
import { TiMessage } from "react-icons/ti"
import { GoMail } from "react-icons/go"
import { FiUserPlus } from "react-icons/fi"

import "../../../Css/Pages/ProfilePage/AsideProfile.scss"
import NotificationBtn from './notificationBtn'

const AsideProfile = () => {

    const avatar = false
    const friend = false
    return (
        <div className="asideProfile">
            <div className="imgProfile">
                {avatar ?
                    <img src={avatar} alt="" className="userAvatar" />
                    : <h4 className="upload">Upload a Profile Img</h4>}
                <div className="notification">
                    <NotificationBtn header={"Comments"} icon={<TiMessage className="notiICon" />} />
                    <NotificationBtn header={"Message"} icon={<GoMail className="notiICon" />} />
                    <NotificationBtn header={"Request"} icon={<FiUserPlus className="notiICon" />} />
                </div>
            </div>
            <PersonalInfo />
            <ActionsStats />
            <div className="friendsList">
                <div className="friendsHeader">
                    <h3 className="staticFriends">Friends</h3>
                    <div className="allLink">
                        <h4 className="allpip">All</h4>
                        <h4>(0)</h4>
                    </div>
                </div>
                <h4 className="friendsMsg">{friend ? "You have x Friends" : "No friends yet"}</h4>
            </div>
        </div>
    )
}

export default AsideProfile

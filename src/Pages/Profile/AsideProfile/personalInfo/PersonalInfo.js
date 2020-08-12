import React from 'react'
import PersonalInfoRow from './PersonalInfoRow'

const PersonalInfo = () => {

    const gender = "Male"
    const birthday = "9, March"
    const location = "Cophenaguen"
    const join = "Apr 30, 2018"

    return (
        <div className="personalInfo">
            <PersonalInfoRow header={"Last Online"} data={"Now"} />
            <PersonalInfoRow header={"Gender"} data={gender} even={true} />
            <PersonalInfoRow header={"Birthday"} data={birthday} />
            <PersonalInfoRow header={"Location"} data={location} even={true} />
            <PersonalInfoRow header={"Joined"} data={join} />
            <div className="userList">
                <button className="userListBtn">Anime List</button>
                <button className="userListBtn">Manga List</button>
            </div>
        </div>
    )
}

export default PersonalInfo

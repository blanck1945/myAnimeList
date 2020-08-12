import React from 'react'
import LogBtn from './LogBtn'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'
import { IoIosArrowDropdownCircle } from "react-icons/io"
import { FaBars } from "react-icons/fa"
import { GrMail } from "react-icons/gr"
import { FaBell } from "react-icons/fa"
//import IconDisplay from './IconDisplay'

import "./UsernameBox.scss"
import "./maxuserBox.scss"

const NavbarUserSide = ({ func, open }) => {

    const { logUser, isLog } = useSelector(state => state.log)

    return (
        <div className="maxUserBox">
            <div className="userAvatar">
                <div className="hideAdd">
                    <h4>Hide Ads</h4>
                </div>
                {isLog ?
                    <div className="usernameBox">
                        <div className="iconLogUser">
                            <FaBars className="iconTopNav" />
                            <GrMail className="iconTopNav" />
                            <FaBell className="iconTopNav" />
                        </div>
                        <div className="usernameBoxNav" onClick={() => func()}>
                            <h3 className="userName">{logUser.username}</h3>
                            <IoIosArrowDropdownCircle className="dropArrow" />
                            <img src={logUser.avatar} alt="" className="userAvater" />
                        </div>
                    </div>
                    : <> <Link to="/logIn">
                        <LogBtn header={"Login"} styleBtn={"loginBtn"} />
                    </Link>
                        <Link to="/signIn">
                            <LogBtn header={"Sign Up"} styleBtn={"signBtn"} />
                        </Link> </>}
            </div>
            {open ?
                <div className="userDesMenu">
                    <Link to="/profile" className="linkProfi">
                        <h4 onClick={() =>func()}>My Profile</h4>
                    </Link>
                    <h4>AnimeList</h4>
                    <h4>Forum</h4>
                    <h4>Log Out</h4>
                </div> : null}
        </div>
    )
}

export default NavbarUserSide

/*
 <div className="iconUser">
                <IconDisplay iconStyle={"fas fa-bars ico"} />
                <IconDisplay iconStyle={"fas fa-envelope ico"} />
                <IconDisplay iconStyle={"fas fa-bell ico"} />
            </div>*/

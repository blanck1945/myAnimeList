import React, { useState } from 'react'
import NavbarUserSide from './NavbarUserSide'
import mal from "./mal.png"
import { Link } from "react-router-dom"

const NavBar = () => {

    const [openMenu, setOpenMenu] = useState(false)

    const openUserMenu = () => {
        if (!openMenu) return setOpenMenu(true)
        if (openMenu) return setOpenMenu(false)
    }

    return (
        <header>
            <nav className="navbar">
                <div className="leftSide">
                    <Link to="">
                        <img src={mal} alt="myAnimeList" className="malLogo" />
                    </Link>
                </div>
                <div className="malSupport">
                    <h3 className="supportMal">Support Mal</h3>
                </div>
                <div className="userNav">
                    <NavbarUserSide open={openMenu} func={openUserMenu} />
                </div>
            </nav>
        </header>
    )
}

export default NavBar

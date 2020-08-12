import React from 'react'

const NavLinkFilter = ({ header, select }) => {
    return (
        <div className={select ? "navLinkSelect" : "navLinkPasive"}>
            <h3 className="filterLink">{header}</h3>
        </div>
    )
}

export default NavLinkFilter

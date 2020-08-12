import React from 'react'
import LinkElements from "./LinkElement"

import "../Scss/NavPages.scss"
import NavLinkFilter from './NavLinkFilter'

const NavPages = () => {
    return (
        <div className="navPages">
            <div className="upNavDis">
                <LinkElements header={"Top"} center={"linkElementBox center"} arrowMar={"arrowMar"} />
                <LinkElements header={"Anime"} center={"linkElementBox"} arrowMar={"arrowMar"} />
                <LinkElements header={"Top Anime"} arrow={true} center={"linkElementBox"} />
            </div>
            <div className="downNavDis">
                <NavLinkFilter header={"All Anime"} select={true} />
                <NavLinkFilter header={"Top Airing"} select={false} />
                <NavLinkFilter header={"Top Upcoming"} select={false} />
                <NavLinkFilter header={"Top TV Series"} select={false} />
                <NavLinkFilter header={"Top Movies"} select={false} />
                <NavLinkFilter header={"Top OVAs"} select={false} />
                <NavLinkFilter header={"Top ONAs"} select={false} />
                <NavLinkFilter header={"Top Specials"} select={false} />
                <NavLinkFilter header={"Most Popular"} select={false} />
                <NavLinkFilter header={"Most Favorited"} select={false} />
            </div>
        </div>
    )
}

export default NavPages

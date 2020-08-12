import React from 'react'
import LinkElements from "../../Reuse/NavPages/LinkElement"
import NavLinkFilter from '../../Reuse/NavPages/NavLinkFilter'
import FacebookBanner from '../../Componets/Home/FacebookBanner/FacebookBanner'
import BigSearchBar from './BigSearchBar'
import BodyTitles from '../../Reuse/BodyTitles'
import OptionsRow from '../../Reuse/OptionsRow/OptionsRow'

import "../../Css/Container/container.scss"
import "../../Css/navPages/Nav.Pages.scss"
import "../../Css/Pages/SearchAnimePage/SearchFaceBanner.scss"
import "../../Css/Pages/SearchAnimePage/SearchOptions.scss"

const SearchAnimePage = () => {
    return (
        <div className="container">
            <div className="navPages">
                <div className="upNavDis">
                    <LinkElements header={"Top"} center={"linkElementBox center"} arrowMar={"arrowMar"} />
                    <LinkElements header={"Anime"} center={"linkElementBox"} arrowMar={"arrowMar"} />
                </div>
                <div className="downNavDis">
                    <div className="alphaMid">
                        <NavLinkFilter header={"Upcoming"} select={false} />
                        <NavLinkFilter header={"Just Added"} select={false} />
                        <NavLinkFilter header={"A"} select={false} />
                        <NavLinkFilter header={"B"} select={false} />
                        <NavLinkFilter header={"C"} select={false} />
                        <NavLinkFilter header={"D"} select={false} />
                        <NavLinkFilter header={"E"} select={false} />
                        <NavLinkFilter header={"F"} select={false} />
                        <NavLinkFilter header={"G"} select={false} />
                        <NavLinkFilter header={"H"} select={false} />
                        <NavLinkFilter header={"I"} select={false} />
                        <NavLinkFilter header={"J"} select={false} />
                        <NavLinkFilter header={"K"} select={false} />
                        <NavLinkFilter header={"L"} select={false} />
                        <NavLinkFilter header={"M"} select={false} />
                        <NavLinkFilter header={"N"} select={false} />
                        <NavLinkFilter header={"O"} select={false} />
                        <NavLinkFilter header={"P"} select={false} />
                        <NavLinkFilter header={"Q"} select={false} />
                        <NavLinkFilter header={"R"} select={false} />
                        <NavLinkFilter header={"S"} select={false} />
                        <NavLinkFilter header={"T"} select={false} />
                        <NavLinkFilter header={"U"} select={false} />
                        <NavLinkFilter header={"V"} select={false} />
                        <NavLinkFilter header={"W"} select={false} />
                        <NavLinkFilter header={"X"} select={false} />
                        <NavLinkFilter header={"Y"} select={false} />
                        <NavLinkFilter header={"Z"} select={false} />
                    </div>
                </div>
            </div>
            <BigSearchBar />
            <div className="searchFaceBanner">
                <FacebookBanner banner={"faceBanner"} facebookBanner={"bannerInner"} />
            </div>
            <div className="searchOptions">
                <BodyTitles header={"Genres"} />
                <OptionsRow header1={"Action"} header2={"Adventure"} header3={"Cars"} header4={"Comedy"} header5={"Dementia"} />
            </div>
            <div className="searchOptions">
                <BodyTitles header={"Studios"} view={true} />
                <OptionsRow header1={"Toei Animation"} header2={"Sunrise"} header3={"Production I.G"} header4={"J.C.Staff"} header5={"Madhouse"} />
            </div>
            <div className="searchOptions">
                <BodyTitles header={"Rankings"} />
                <OptionsRow header1={"All Anime"} header2={"Top Airing"} header3={"Top Upcoming"} header4={"Top TV Series"} header5={"Top Movies"} />
                <OptionsRow header1={"Top OVAs"} header2={"Top ONAs"} header3={"Top Special"} header4={"Most Popular"} row5={true} />
            </div>
            <div className="searchOptions">
                <BodyTitles header={"Anime Seasons"} view={true} />
                <OptionsRow header1={"Fall 2020"} header2={"Summer 2020"} header3={"Spring 2020"} header4={"Winter 2020"} row5={true} />
            </div>
        </div>
    )
}

export default SearchAnimePage

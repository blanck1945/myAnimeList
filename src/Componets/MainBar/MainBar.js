import React, { useState } from 'react'
import OptionBar from './OptionBar'
import { AnimeMenu, MangaMenu, Community, Industry, Watch, Read, Help } from "./../../utils/MenusOptions"
import { FaSearch } from "react-icons/fa"

import "../../Css/templates/DownBar.scss"
const MainBar = () => {

    return (
        <div className="mainBar">
            <div className="optionsBar">
                <OptionBar header={"Anime"} options={AnimeMenu} />
                <OptionBar header={"Manga"} options={MangaMenu} />
                <OptionBar header={"Community"} options={Community} max={true} />
                <OptionBar header={"Industry"} options={Industry} />
                <OptionBar header={"Watch"} options={Watch} />
                <OptionBar header={"Read"} options={Read} />
                <OptionBar header={"Help"} options={Help} />
            </div>
            <div className="searchBar">
                <select name="" id="filter" className="filterSelect">
                    <option value="all">All</option>
                    <option value="Anime">Anime</option>
                    <option value="Manga">Manga</option>
                    <option value="Characters">Characters</option>
                </select>
                <input type="text" className="searchInput" placeholder="Search Anime, Manga, and more..." />
                <FaSearch className="glass" />
            </div>
        </div>
    )
}

export default MainBar

/*
 <OptionBar header={"Manga"} options={MangaMenu} />
                <OptionBar header={"Community"} options={Community} max={true} />
                <OptionBar header={"Industry"} options={Industry} />
                <OptionBar header={"Watch"} options={Watch} />
                <OptionBar header={"Read"} options={Read} />
                <OptionBar header={"Help"} options={Help} />*/
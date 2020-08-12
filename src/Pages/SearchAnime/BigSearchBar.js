import React from 'react'
import { FaSearch } from "react-icons/fa"
import { AiOutlinePlusSquare } from "react-icons/ai"

import "../../Css/Pages/SearchAnimePage/BigSeachBar.scss"

const BigSearchBar = () => {
    return (
        <div className="bigSearchBar">
            <div className="bigSearchBox">
                <input className="bigInputSearch"
                    type="text" placeholder="Search Anime..." />
                <button className="bigGlassBtn">
                    <FaSearch />
                </button>
            </div>
            <div className="advanceSearch">
                <AiOutlinePlusSquare className="advancePLus" />
                <h4>Advanced Search</h4>
            </div>
        </div>
    )
}

export default BigSearchBar

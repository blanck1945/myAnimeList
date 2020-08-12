import React from 'react'
import { IoIosArrowForward } from "react-icons/io"

const TitleTopDIsplay = ({ header }) => {
    return (
        <>
            <div className="centerTitle">
                <h3 className="topDisplayTitle">{header}</h3>
                <div className="divUpdate">
                    <h4 className="updateTwice">Updated twice a day.</h4>
                    <h4 className="centerTitleLink">(How do we rank shows?)</h4>
                </div>
            </div>
            <button className="next50">Next 50
            <IoIosArrowForward className="arrowRight" />
            </button>
        </>
    )
}

export default TitleTopDIsplay

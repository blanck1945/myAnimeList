import React from 'react'
import { FiSquare } from "react-icons/fi"
import { AiOutlinePlus } from "react-icons/ai"
import { RiArrowDownSLine } from "react-icons/ri"

const SeasonRightBtn = ({ header, check, plus }) => {
    return (
        <div className="rightBtnFil">
            {check ? <>
                <FiSquare className="rightFilArrow" />
                <h4 className="rightFilText">{header}</h4>
                {plus ? <AiOutlinePlus className="rightFilArrow" /> : null}</>
                : <>
                    <h4 className="rightFilText">{header}</h4>
                    <RiArrowDownSLine className="rightFilArrow" /></>}
        </div>
    )
}

export default SeasonRightBtn

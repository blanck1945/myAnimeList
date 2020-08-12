import React from 'react'
import { IoIosArrowForward } from "react-icons/io"

import "./OptionRow.scss"

const OptionsRow = ({ header1, header2, header3, header4, header5, row1, row2, row3, row4, row5 }) => {
    return (
        <div className="optionRow">
            {row1 ? null : <div className="optionRowBox">
                <IoIosArrowForward className="optionRowIcon" />
                <h4 className="optionRowItem">{header1}</h4>
            </div>}
            {row2 ? null : <div className="optionRowBox">
                <IoIosArrowForward className="optionRowIcon" />
                <h4 className="optionRowItem">{header2}</h4>
            </div>}
            {row3 ? null : <div className="optionRowBox">
                <IoIosArrowForward className="optionRowIcon" />
                <h4 className="optionRowItem">{header3}</h4>
            </div>}
            {row4 ? null : <div className="optionRowBox">
                <IoIosArrowForward className="optionRowIcon" />
                <h4 className="optionRowItem">{header4}</h4>
            </div>}
            {row5 ? null : <div className="optionRowBox">
                <IoIosArrowForward className="optionRowIcon" />
                <h4 className="optionRowItem">{header5}</h4>
            </div>}
        </div>
    )
}

export default OptionsRow

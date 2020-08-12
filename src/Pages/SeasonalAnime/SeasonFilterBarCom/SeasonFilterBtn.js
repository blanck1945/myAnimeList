import React from 'react'

const SeasonFilterBtn = ({ header, select }) => {
    return (
        <div className={select ? "select seasonFilBtn" : "seasonFilBtn"}>
            <h5 className="filterBtnText">{header}</h5>
        </div>
    )
}

export default SeasonFilterBtn

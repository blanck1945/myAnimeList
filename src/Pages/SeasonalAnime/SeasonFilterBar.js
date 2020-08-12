import React from 'react'
import "../../Css/Pages/SeasonalAnime/SeasonFilterBar.scss"
import SeasonFilterBtn from './SeasonFilterBarCom/SeasonFilterBtn'
import SeasonRightBtn from './SeasonFilterBarCom/SeasonRightBtn'
import SeasonBlueBar from './SeasonBlueBar'

import "./seasonFilterBar.scss"

const SeasonFilterBar = () => {

    const dis = 5
    const total = 5

    return (
        <div className="seasonFilterBox">
            <div className="filterBarUp">
                <div className="filterBtnLeft">
                    <SeasonFilterBtn header={"All"} select={true} />
                    <SeasonFilterBtn header={"TV"} />
                    <SeasonFilterBtn header={"ONA"} />
                    <SeasonFilterBtn header={"OVA"} />
                    <SeasonFilterBtn header={"Movie"} />
                    <SeasonFilterBtn header={"Special"} />
                </div>
                <div className="filterBtnRight">
                    <SeasonRightBtn header={"Sort"} />
                    <SeasonRightBtn header={"Genres"} />
                    <SeasonRightBtn header={"Kids"} check={true} />
                    <SeasonRightBtn header={"R18"} check={true} plus={true} />
                </div>
            </div>
            <div className="filterBarDown">
                <h4 className="filterShow">showing: {dis}/{total}</h4>
            </div>
            <SeasonBlueBar />
        </div>
    )
}

export default SeasonFilterBar

/*
 <div className="filterBarUp">
                <SeasonFilterBar header={"All"} select={true} />
                <SeasonFilterBar header={"TV"} />
                <SeasonFilterBar header={"ONA"} />
                <SeasonFilterBar header={"OVA"} />
                <SeasonFilterBar header={"Movie"} />
                <SeasonFilterBar header={"Special"} />
            </div>*/
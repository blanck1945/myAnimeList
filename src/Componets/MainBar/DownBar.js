import React from 'react'
import { MdSettings } from "react-icons/md"
import { useSelector } from 'react-redux'

const DownBar = (props) => {


    const { isLog } = useSelector(state => state.log)
    const { navHeader } = useSelector(state => state.nav)
    console.log(navHeader)

    return (
        <div className="downBar">
            <div className="panel">
                <h5>{navHeader}</h5>
            </div>
            <div className="panelSet">
                {isLog ? <>
                    <MdSettings className="setIcon" />
                    <h5 className="panText">Panel Settings</h5></>
                    : null}
            </div>
        </div>

    )
}

export default DownBar

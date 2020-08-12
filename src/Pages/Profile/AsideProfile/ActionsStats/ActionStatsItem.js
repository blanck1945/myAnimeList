import React from 'react'

const ActionStatsItem = ({ header, data }) => {
    return (
        <div className="actionStatsItem">
            <h4 className="staticContent">{header}</h4>
            <h4 className="userData">{data}</h4>
        </div>
    )
}

export default ActionStatsItem

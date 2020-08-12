import React from 'react'
import ActionStatsItem from './ActionStatsItem'

const ActionsStats = () => {
    return (
        <div className="actionBox">
            <ActionStatsItem header={"Forum Post"} data={4} />
            <ActionStatsItem header={"Reviews"} data={0} />
            <ActionStatsItem header={"News"} data={0} />
        </div>
    )
}

export default ActionsStats

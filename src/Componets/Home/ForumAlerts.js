import React from 'react'
import BodyTitles from '../../Reuse/BodyTitles'

const ForumAlerts = ({ header, msg, classType }) => {

    const data = []

    return (
        <div className={classType}>
            <BodyTitles header={header} />
            <div className="forumBody">
                {data.length === 0 ? msg : data}
            </div>
        </div>
    )
}

export default ForumAlerts

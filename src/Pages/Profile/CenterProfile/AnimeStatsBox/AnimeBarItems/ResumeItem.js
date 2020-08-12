import React from 'react'

const ResumeItem = ({ header, data }) => {
    return (
        <div className="resumeItem">
            <h4>{header}</h4>
            <h4>{data}</h4>
        </div>
    )
}

export default ResumeItem

import React from 'react'

import "../Reuse/Scss/BodyTitles.scss"

const BodyTitles = ({ header, here, more, view, all }) => {
    return (
        <div className="forumHeader">
            <h3>{header}</h3>
            <h5 className="view">
                {here ? "Edit" : null}
                {view ? "View More" : null}
                {more ? "More videos" : null}
                {all ? "All Comments" : null}</h5>
        </div>
    )
}

export default BodyTitles

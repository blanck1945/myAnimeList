import React from 'react'

import "../NewsDisStyle/NewsCenter/NewsHeader.scss"

const NewsHeader = ({ author, date }) => {
    return (
        <div className="newsHeader">
            <div className="authorBox">
                <h3 className="authorBoxItem">by <span>{author}</span></h3>
                <h3 className="authorBoxItem">{date} | <span>0 Comments </span></h3>
            </div>
            <div className="socialBtn">

            </div>
        </div>
    )
}

export default NewsHeader

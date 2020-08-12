import React from 'react'

import "../NewsDisStyle/NewsCenter/NewsBody.scss"

const NewsBody = ({ text, img, source }) => {
    return (
        <div className="newsBody">
            <div className="newsText">
                <p>{text}</p>
                <h4>Source: <span>{source}</span></h4>
            </div>
            <div className="newsImg">
                <img src={img} alt="" className="imgNe" />
            </div>
        </div>
    )
}

export default NewsBody

import React from 'react'
import { BsStar } from "react-icons/bs"
import { FaUserAlt } from "react-icons/fa"

const SesonalAnimeFoot = ({ data }) => {

    const {
        type,
        score,
        members,
        first
    } = data

    return (
        <div className="animeSesonalFoot">
            <div className="typeFoot">
                <h5 className="typeItem">{type}-</h5>
                <h5 className="typeItem">{first}</h5>
            </div>
            <div className="scoreFoot">
                <BsStar className="scoreItem dis" />
                <h5 className="scoreItem big">{score}</h5>
            </div>
            <div className="memberFoot">
                <FaUserAlt className="memberItem dis" />
                <h5 className="memberItem big">{members}</h5>
            </div>
        </div>
    )
}

export default SesonalAnimeFoot

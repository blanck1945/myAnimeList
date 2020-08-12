import React from 'react'
import BodyTitles from '../../../Reuse/BodyTitles'
import ForumTemplate from './ForumTemplate'
import { useSelector } from "react-redux"

import "../../../Css/ForumHome/ForumHome.scss"

const ForumHome = ({ data, header, comment }) => {



    const dataBody = data.map(el =>
        <ForumTemplate key={el.id} data={el} comment={comment} />)

    return (
        <div className="forumHome">
            <BodyTitles header={header} />
            {dataBody}
        </div>
    )
}

export default ForumHome

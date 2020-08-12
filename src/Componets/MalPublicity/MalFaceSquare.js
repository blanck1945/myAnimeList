import React from 'react'
import { FaFacebookSquare } from "react-icons/fa"
import { RiComputerLine } from "react-icons/ri"

import "../../Css/MalPublicity/MalFaceSquare.scss"

const MalFaceSquare = () => {
    return (
        <div className="malFaceSquare">
            <FaFacebookSquare className="fbIcon" />
            <img className="malPhotoSquare malLogo"
                src="https://image4.owler.com/logo/myanimelist_owler_20160226_213523_original.png" alt="" />
            <div className="malFaceFooter">
                <h3 className="followFb">Follow us on Facebook</h3>
                <RiComputerLine className="computer" />
            </div>
        </div>
    )
}

export default MalFaceSquare

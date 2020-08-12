import React from 'react'
import { FaFacebookSquare } from "react-icons/fa"
import "../../../Css/FacebookBanner/FacebookBanner.scss"

const FacebookBanner = ({ banner, facebookBanner }) => {
    return (
        <div className={banner}>
            <div className={facebookBanner}>
                <FaFacebookSquare className="fbIcon" />
                <h3 className="followFb">Follow us on FB</h3>
                <img className="malPhotoSquare"
                    src="https://image4.owler.com/logo/myanimelist_owler_20160226_213523_original.png" alt="" />
            </div>
        </div>
    )
}

export default FacebookBanner

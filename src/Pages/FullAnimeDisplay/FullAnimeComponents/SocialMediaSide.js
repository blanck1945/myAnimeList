import React from 'react'
import { FaFacebookSquare } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa"
import { FaRedditSquare } from "react-icons/fa"
import { FaTumblrSquare } from "react-icons/fa"

import "../../../Css/Pages/FullAnimeDisplay/SideFullAnimeDis/SocialMediaSide.scss"

const SocialMediaSide = () => {
    return (
        <div className="socialMediaBox">
            <FaFacebookSquare className="socialSideIcon face" />
            <FaTwitterSquare className="socialSideIcon twi" />
            <FaRedditSquare className="socialSideIcon reddit" />
            <FaTumblrSquare className="socialSideIcon tumb" />
        </div>
    )
}

export default SocialMediaSide

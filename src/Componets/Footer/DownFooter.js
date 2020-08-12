import React from 'react'
import { FaFacebookSquare } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"

import "../../Css/templates/Footer/DownFooter.scss"
import "../../Css/templates/NavBar.css"

const DownFooter = () => {
    return (
        <div className="downFooter">
            <div className="footerNav">
                <h4>Home</h4>
                <h4>|</h4>
                <h4>About</h4>
                <h4>Press Room</h4>
                <h4>Support</h4>
                <h4>Advertising</h4>
                <h4>FAQ</h4>
                <h4>Terms</h4>
                <h4>Privacy</h4>
                <h4>Cookie</h4>
                <h4>Sitemap</h4>
                <h4>|</h4>
                <h4>Login</h4>
                <h4>Sign Up</h4>
            </div>
            <div className="malSupport">
                <h3 className="supportMal">Support Mal</h3>
            </div>
            <div className="socialBody">
                <div className="socialNet">
                    <div className="faceTwFollow">
                        <h5 className="followTitle">Follow Us</h5>
                        <div className="iconFollow">
                            <FaFacebookSquare className="facBlue" />
                            <FaTwitter className="twBlue" />
                        </div>
                    </div>
                    <div className="RecommendSites">

                    </div>
                </div>
                <div className="facebookPub">

                </div>
                <h3 className="credits">MyAnimeList.net is a property of MyAnimeList, LLC. ©2020 All Rights Reserved.</h3>
            </div>
        </div>
    )
}

export default DownFooter

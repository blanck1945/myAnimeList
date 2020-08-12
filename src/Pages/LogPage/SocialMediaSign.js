import React from 'react'
import { AiOutlineFacebook } from "react-icons/ai"
import { AiOutlineTwitter } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import SocialBtn from './SocialBtn'

import "../../Css/Pages/Login/SocialMediaSign.scss"

const SocialMediaSign = ({ sign }) => {

    return (
        <div className="socialMediaSign">
            <h3 className="socialMediaSignTitle">{sign ? "Sign Up with" : "Login With"} </h3>
            <div className="socialMediaBox">
                <SocialBtn header={"Facebook"} iconDis={"iconDis blueFac"} icon={<AiOutlineFacebook className="iconSign face" />} />
                <SocialBtn header={"Twitter"} iconDis={"iconDis blueTw"} icon={<AiOutlineTwitter className="iconSign twi" />} />
                <SocialBtn header={"Google"} iconDis={"iconDis mulGoo"} icon={<FcGoogle className="iconSign goo" />} />
            </div>
        </div>
    )
}

export default SocialMediaSign

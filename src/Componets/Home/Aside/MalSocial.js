import React from 'react'

import "../../../Css/Aside/MalSocial.scss"

const MalSocial = ({ classtype }) => {
    return (
        <div className={classtype}>
            <h4 className="supportMal">Lets Support</h4>
            <div className="malSquare">
                <img className="malPhotoSquare"
                    src="https://image4.owler.com/logo/myanimelist_owler_20160226_213523_original.png" alt="" />
            </div>
            <div className="learnMore">
                <div className="More">
                </div>
                <div className="nextPage"></div>
            </div>
        </div>
    )
}

export default MalSocial

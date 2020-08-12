import React from 'react'
import BodyTitles from '../../../Reuse/BodyTitles'

import "../../../Css/Pages/FullAnimeDisplay/CenterAnimeDis/SynopsisAnime.scss"

const SinopsisAnime = ({ text, header, more, here }) => {
    return (
        <div className="synopsisBox">
            <BodyTitles header={header} here={here} more={more} />
            {text}
        </div>
    )
}

export default SinopsisAnime

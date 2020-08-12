import React from 'react'
import SesonalAnimeHeader from './SesonalAnimeCom/SesonalAnimeHeader'
import SesonalAnimeDownHeader from './SesonalAnimeCom/SesonalAnimeDownHeader'
import SesonalAnimeFoot from './SesonalAnimeCom/SesonalAnimeFoot'

const AnimeTemplateSeason = ({ data }) => {

    const { episodes, source, studio, img, sinopsis, genres, type, first, score, members, state } = data
    const footData = {
        type,
        first,
        score,
        members
    }
    /* const genresDis = genres.map((el, index) =>
         <SesonalAnimeGenre key={index} header={el} />)   {genresDis}*/

    return (
        <div className="seasonalAnimeDis">
            <SesonalAnimeHeader data={data} />
            <SesonalAnimeDownHeader source={source} episodes={episodes} studio={studio} state={state} />
            <div className="sesonalAnimeGenre">
            </div>
            <div className="sesonalAnimeCenterBox">
                <div className="sesonalAnimeImg">
                    <img src={img} alt="" className="sesonalCenterImg" />
                </div>
                <div className="sesonalAnimeSinop">
                    <p className="animeSinopPara">{sinopsis}</p>
                </div>
            </div>
            <SesonalAnimeFoot data={footData} />
        </div>
    )
}

export default AnimeTemplateSeason 

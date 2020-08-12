import React from 'react'

const SesonalAnimeDownHeader = ({ studio, episodes, source, state }) => {

    console.log(state)

    return (
        <div className="totalBG">
            <div className="sesonalAnimeDownHeader">
                <div className="downHeaderInfo">
                    <h5 className="headInfoStu rightBar">{studio}</h5>
                    <h5 className="headInfoStu Center">{episodes} eps</h5>
                    <h5 className="headInfoStu leftBar Grey">{source}</h5>
                </div>
                <div className="animeBtnBox">
                    <button className="animeTemplateBtn">{state === "" ? "Add" : state}</button>
                </div>
            </div>
        </div>
    )
}

export default SesonalAnimeDownHeader

import React from 'react'
import BodyTitles from '../../../Reuse/BodyTitles'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { Link } from "react-router-dom"
import { setOneAnime } from '../../../Store/actions.js/AnimeActions'
import { useDispatch } from 'react-redux'
import "../../../Css/Carrousel/Carrousel.scss"


const Carrousel = ({ header, classType, data, img, subTitle, carrousel, overlay, video, videoRange }) => {

    const dispatch = useDispatch()

    const animeSetMove = (anime) => {
        dispatch(setOneAnime(anime))
    }

    const setTooth = anime => {
        console.log("a")
    }

    const imgDisplay = data.map(anime =>
        <Link to="/animeDis" key={anime.id} >
            <div className="anime2020Box" onMouseOver={() => setTooth()}
                onClick={() => animeSetMove(anime)}>
                {video ?
                    <iframe key={anime.id} src={anime.video} className="pvVideo" title="PV" />
                    :
                    <img src={anime.img} alt={anime.id} key={anime.id} className={img} />}

                {subTitle ? <h3 className={videoRange ? "subTitle mainSub" : "subTitle"}> {anime.title}</h3> : null}
            </div>
        </Link>)

    return (
        <div className="carrouselSpace">
            <div className={classType}>
                <BodyTitles header={header} />
            </div>
            <div className={carrousel}>
                {imgDisplay}
                <button className="carroBtn">
                    <IoIosArrowBack className="arrow" />
                </button>
                <button className="carroBtnLeft">
                    <IoIosArrowForward className="arrowLeft" />
                </button>
            </div>
        </div>
    )
}

export default Carrousel

/*
    {overlay ? <h4 className="anime2020Title">{anime.title}</h4>
                    : <> <h4 className="animeLastUpdated">Episodes {anime.newEpisodes}</h4>
                        <h4 className="animeLastUpdatedLast">Episodes {anime.lastEpisodes}</h4> </>}


                {subTitle ? <h3 className={videoRange ? "subTitle mainSub" : "subTitle"}> {anime.title}</h3> : null}


 <img src="https://larepublica.pe/resizer/_dI_JP4tWBJba_vFIwA4NRNu7Fw=/538x0/top/larepublica.pe/resizer/Iz6P6f-ujCc2eZHj8MPe6TNbO5g=/538x0/top/smart/arc-anglerfish-arc2-prod-gruporepublica.s3.amazonaws.com/public/NSS5R7ZEBBERJM7YT3IQPKJRQQ.png" className="anime2020 gr" alt="" />
                <img src="https://media.redadn.es/series/p/kami-no-tou_4491.jpg" className="gr kami" alt="" />
                <img src="https://s1.zerochan.net/Gleipnir.600.2886139.jpg" className="gr glepnir" alt="" />
                <img src="https://arata.lat/wp-content/uploads/2020/03/Food-Wars-The-Fifth-Plate-key-art.png" className="gr souma" alt="" />*/
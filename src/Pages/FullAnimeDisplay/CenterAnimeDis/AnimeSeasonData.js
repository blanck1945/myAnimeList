import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchQuery, setFilterQuery, setYearQuery } from '../../../Store/actions.js/utilsActions'

const AnimeSeasonData = ({ header, separator, value, filter }) => {

    const dispatch = useDispatch()

    const search = value => {
        if (filter === "season") {
            const { season, year } = value
            dispatch(setFilterQuery("season"))
            dispatch(setYearQuery(year))
            return dispatch(setSearchQuery(season))
        }

        dispatch(setSearchQuery(value))
        dispatch(setFilterQuery("studio"))
    }


    return (
        <div className="animeSeasonData">
            <h4 className="animeSeasonTitle" onClick={() => search(value)}>{header}</h4>
            {separator ? <h4 className="separator">|</h4> : null}
        </div>
    )
}

export default AnimeSeasonData

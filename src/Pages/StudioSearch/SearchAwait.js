import React from 'react'
import { useSelector } from 'react-redux'

import "../../Css/Container/container.scss"


const SearchAwait = () => {

    const { searchQuery } = useSelector(state => state.utils)

    console.log(searchQuery)
    console.log("we reache here")
    return (
        <div className="container">

        </div>
    )
}

export default SearchAwait

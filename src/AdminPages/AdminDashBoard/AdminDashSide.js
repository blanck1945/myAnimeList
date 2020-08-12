import React from 'react'
import { useDispatch } from 'react-redux'
import { setMenuTo } from '../../Store/AdminActions/AdminMenu'

const AdminDashSide = () => {

    const dispatch = useDispatch()

    return (
        <div className="adminDashSide">
            <h2 className="adminDashLabel">Admin DashBoard</h2>
            <h3 onClick={() => dispatch(setMenuTo("add"))}>Add Anime To DB</h3>
            <h3 onClick={() => dispatch(setMenuTo("update"))}>Update Anime In DB</h3>
            <h3 onClick={() => dispatch(setMenuTo("delete"))}>Delete Anime In DB</h3>
            <h3 onClick={() => dispatch(setMenuTo("postContent"))}>Post Content</h3>
            <h3 onClick={() => dispatch(setMenuTo("credentials"))}>Credentials</h3>
            <h3 onClick={() => dispatch(setMenuTo("rules"))}>Rules</h3>
            <h3 className="powerBy">Power By <span className="react">React</span>-<span className="redux">Redux</span></h3>
        </div>
    )
}

export default AdminDashSide

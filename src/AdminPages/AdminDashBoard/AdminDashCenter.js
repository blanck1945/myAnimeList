import React from 'react'
import { useSelector } from "react-redux"

import "../AdminScss/AdminDash/AdminDashCenter.scss"
import AddAnimeToDB from './AdminCenterPages/AddAnimeToDB'
import UpdateAnimeInDb from './AdminCenterPages/UpdateAnimeInDb'
import AddAdminBase from './AdminCenterPages/AddAdminBase'
import AddAdminDelete from './AdminCenterPages/AddAdminDelete'
import PostNews from '../PostNews/PostNews'
import PostContent from '../PostNews/PostContent'
import Credentials from '../Credentials/Credentials'
import Rules from '../Rules/Rules'

const AdminDashCenter = () => {

    const { menu } = useSelector(state => state.adminMenu)

    return (
        <div className="adminDashCenter">
            {menu === "base" ? <AddAdminBase /> : null}
            {menu === "add" ? <AddAnimeToDB /> : null}
            {menu === "update" ? <UpdateAnimeInDb /> : null}
            {menu === "delete" ? <AddAdminDelete /> : null}
            {menu === "postContent" ? <PostContent /> : null}
            {menu === "credentials" ? <Credentials /> : null}
            {menu === "rules" ? <Rules /> : null}
        </div>
    )
}

export default AdminDashCenter

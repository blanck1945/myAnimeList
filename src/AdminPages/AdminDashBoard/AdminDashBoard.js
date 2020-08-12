import React from 'react'
import AdminDashSide from './AdminDashSide'
import AdminDashCenter from './AdminDashCenter'

import "../AdminScss/AdminDash/AdminDash.scss"

const AdminDashBoard = () => {
    return (
        <div className="adminContainer">
            <AdminDashSide />
            <AdminDashCenter />
        </div>
    )
}

export default AdminDashBoard

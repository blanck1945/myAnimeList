import React from 'react'

const NotificationBtn = ({ icon, header }) => {
    return (
        <div className="notiBtn">
            {icon}
            <h4>{header}</h4>
        </div>
    )
}

export default NotificationBtn

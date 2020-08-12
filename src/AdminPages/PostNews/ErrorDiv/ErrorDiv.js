import React from 'react'

import "./Validate.scss"

const ErrorDiv = (props) => {
    return (
        <div className="requiredField">
            {props.children}
        </div>
    )
}

export default ErrorDiv

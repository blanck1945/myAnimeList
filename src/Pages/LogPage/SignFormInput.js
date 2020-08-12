import React from 'react'

const SignFormInput = ({ header, value, inputType, nameData, compose, func }) => {

    const passDis = e => {
        console.log(e.target.value)
    }
    return (
        <div className="signInInputBox">
            {compose ?
                <div className="passEsp"> <label className="signLabelUp" htmlFor={value}>{header}</label>
                    <div className="showPsBox">
                        <input type="checkbox" className="showPsChe" onChange={(e) => passDis(e)} />
                        <p className="showPs">Show Password</p></div>
                </div>
                : <label htmlFor={value}>{header}</label>
            }
            <input className="inputSign"
                onChange={(e) => func(e)}
                type={inputType}
                placeholder={value} name={nameData} value={value} />
        </div>
    )
}

export default SignFormInput

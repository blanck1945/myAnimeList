import React, { useState } from 'react'
import SignFormInput from './SignFormInput'
import { newUser } from "../../utils/Models"
import { AiFillExclamationCircle } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom"

import "../../Css/Pages/Login/SignForm.scss"
import { postSignUp, postLogIn } from '../../Store/actions.js/LoginActions'

const SignForm = ({ sign }) => {
    const [user, setUser] = useState(newUser)
    const dispatch = useDispatch()
    const { isSign, isLog } = useSelector(state => state.log)
    console.log(isLog)
    const {
        username,
        email,
        password,
        agree
    } = user


    const handlerInput = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        console.log(user)
    }

    const changeAgree = e => {
        if (e.target.value === "false") {
            setUser({
                ...user,
                agree: true
            })
        } else if (e.target.value === "true") {
            setUser({
                ...user,
                agree: false
            })
        }
    }

    const handlerForm = e => {
        if (sign) {
            e.preventDefault()
            console.log(user)
            dispatch(postSignUp(user))
            setUser(newUser)
        }
        else {
            e.preventDefault()
            dispatch(postLogIn(user))
            setUser(newUser)
        }
    }

    return (
        <form className="signInForm" onSubmit={(e) => handlerForm(e)}>
            {sign ? <SignFormInput header={"Username"} func={handlerInput}
                value={username}
                inputType={"text"} nameData={"username"} /> : null}
            <SignFormInput header={"Email"} value={email} func={handlerInput}
                inputType={"text"} nameData={"email"} />
            <p className="between">(Between 2 and 16 characters)</p>
            <SignFormInput header={"Password"} value={password} func={handlerInput}
                inputType={"password"} nameData={"password"} compose={true} />
            <div className="policyBox">
                {sign ? <><input type="checkbox" value={agree} onChange={(e) => changeAgree(e)} />
                    <label>I have read and agree to the <span className="blueFix">Term of Service </span> and <span className="blueFix"> Privacy Policy</span> </label> </>
                    : <> <input type="checkbox" value={agree} onChange={(e) => changeAgree(e)} checked />
                        <label>Always stay logged in?</label> </>}
            </div>
            <div className="signInBtnBox">
                <div className="alertSignIn">
                    <AiFillExclamationCircle className="exclaIcon" />
                    <p>Beware of phishing sites pretending to be MAL. Always check the domain is myanimelist.net before entering your password.</p>
                </div>
                <button className="createAcc">{sign ? "Create Account" : "Login"}</button>
                {sign ? <h4 className="jsEnable">This form requires JavaScript to be enabled.</h4>
                    : <><div className="loginBoxDif">
                        <h4>Forgot username?</h4>
                        <h4>|</h4>
                        <h4>Forgot password?</h4>
                    </div>
                        <button className="signDownBtn">Sign Up</button> </>}
            </div>
            {isSign ? <Redirect to="/logIn" /> : null}
        </form>

    )
}

export default SignForm

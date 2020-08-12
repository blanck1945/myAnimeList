import React, { useEffect, useState } from 'react'
import UpForm from './UpForm'
import SocialMediaSign from './SocialMediaSign'
import OrSeparator from './OrSeparator'
import SignForm from './SignForm'
import { useSelector, useDispatch } from 'react-redux'

import "../../Css/Pages/Login/Login.scss"
import "./logToUse.scss"
import { signOff } from '../../Store/actions.js/LoginActions'

const Login = (props) => {

    const dispatch = useDispatch()
    const { isSign } = useSelector(state => state.log)
    const [sign, setSign] = useState(false)
    const [login, setLogin] = useState(false)

    const {
        location
    } = props

    useEffect(() => {
        if (location.pathname === "/signIn") {
            setSign(true)
            setLogin(false)
            dispatch(signOff())
        }
        if (location.pathname === "/logIn") { setSign(false) }
    }, [location])

    console.log(isSign)

    return (
        <div className="loginBox">
            {isSign ? <h2 className="logToUse">Login To start Using MAL!</h2> : null}
            <div className="formBox">
                {sign ? <UpForm /> : null}
                <SocialMediaSign sign={sign} />
                <OrSeparator />
                <SignForm sign={sign} />
            </div>
        </div>
    )
}

export default Login

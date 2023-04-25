import React from "react";
import './_loginScreen.scss';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth.action";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import background1 from '../../assests/background1.mp4'
import logo from '../../assests/Playstream.png'
import googlelogo from '../../assests/googlelogo.png'

const LoginScreen = () => {

    const dispatch = useDispatch()

    const accessToken = useSelector(state => state.auth.accessToken)

    const handleLogin = () => {
        dispatch(login())
    }

    const navigate = useNavigate()


    useEffect(() => {

        if (accessToken) {
            navigate('/')
        }

    }, [accessToken, navigate])


    return (
        <div className="login">
            <video src={background1} autoPlay loop muted></video>
            <div className="login_container">

                <div className="login_container_left">
                    <img src={logo} className="logo" alt=""></img>
                    <p className="text">Sign In with</p>
                    <img src={googlelogo} className="glogo" onClick={handleLogin} />
                    <p>Don't have an account <a href="https://accounts.google.com/signup/v2/webcreateaccount?continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dcreate-account-button&flowName=GlifWebSignIn&flowEntry=SignUp" target="_blank">create account</a></p>
                </div>
                <div className="login_container_right">
                    <p>Playstream is a video sharing platform which can be used for multiple purpuses like listening music, watching movies, sports, news, tutorials, comedy and much more. Where users can view, search, comment on that video.</p>
                </div>

            </div>
        </div>
    )
}

export default LoginScreen

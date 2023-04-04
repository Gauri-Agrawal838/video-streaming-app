import React from "react";
import './_loginScreen.scss';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth.action";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

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
            <div className="login_container">
                <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt=""></img>
                <button onClick={handleLogin}>Login with Google</button>
                <p>This project is made using YouTube Data API</p>
            </div>
        </div>
    )
}

export default LoginScreen
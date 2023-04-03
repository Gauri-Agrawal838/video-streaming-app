import React from "react";
import './_loginScreen.scss';

const LoginScreen = () => {
    return (
        <div className="login">
            <div className="login_container">
                <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt=""></img>
                <button>Login with Google</button>
                <p>This project is made using YouTube Data API</p>
            </div>
        </div>
    )
}

export default LoginScreen
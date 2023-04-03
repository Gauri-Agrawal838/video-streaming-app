import React from "react";
import { Container } from "react-bootstrap";

import HomeScreen from "./screens/homeScreen/HomeScreen";
import LoginScreen from './screens/loginScreen/LoginScreen';
import Header from './components/header/Header';
import SideBar from './components/sidebar/SideBar';

import "./_app.scss";
import { useState } from "react";

const App = () => {

    const [sideBar, toggleSidebar] = useState(false);
    const handleToggleSidebar = () => toggleSidebar(value => !value)
    return (
        <>
            <Header handleToggleSidebar={handleToggleSidebar} />
            <div className="app__container border border-info">
                <SideBar sideBar={sideBar}
                    handleToggleSidebar={handleToggleSidebar}
                />
                <Container fluid className="app_main border border-warning">
                    <HomeScreen />
                </Container>
            </div>
        </>
        // <LoginScreen />
    )
}

export default App
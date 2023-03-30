import React from "react";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import Header from './components/header/Header';
import SideBar from './components/sidebar/SideBar';

const App = () => {
    return (
        <>
            <Header />
            <div className="app_container">
                <SideBar />
                <Container fluid className="app_main">
                    <HomeScreen />
                </Container>
            </div>
        </>
    )
}

export default App
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const HomeScreen = () => {
    return (
        <Container>
            <CategoriesBar>
                <Row>
                    {
                        [...new Array(20)].map(() => (
                            <Col lg={3} md={4}>
                                <Video />
                            </Col>
                        ))
                    }
                </Row>
            </CategoriesBar>
        </Container>
    )
}

export default HomeScreen
import React from "react";
import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.scss';

export default function Home() {

    return(
        <Container>
            <Row className="header-row">
                <Col>
                    <h5 className="header-title">Tom Roe's Portfolio Website</h5>
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
            </Row>
        </Container>
    )
}
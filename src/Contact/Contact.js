import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.scss';
import './Contact.scss';
import React,{ useEffect, useState } from "react";

export default function Contact() {
    return(
        <Container className="contact-container">
            <Row className="contact-header-row">
                <Col>
                <h1 className="display-3 text-center about-top-title">Want to get in touch?</h1>
                <hr/>
                </Col>
            </Row>
            <Row className="contact-body-row">
                <Col>
                    <p>If you believe we can make something great together then feel free to get in touch via any of my social media or shoot me an email!</p>
                </Col>
            </Row>
            <Row className="social-media-row">
                <Col xs={6} lg={3}>
                    <a href="https://www.instagram.com/senorsyzygy/" target="_blank"><img src="/Media/Icons/igIcon.png" alt="image link to instagram"></img></a>
                </Col>
                <Col xs={6} lg={3}>
                    <a href="https://www.linkedin.com/in/thomas-roe-0867b7226/" target="_blank"><img src="/Media/Icons/linkedinIcon.png" alt="image link to linkedin"></img></a>
                </Col>
                <Col xs={6} lg={3}>
                    <a href="https://github.com/senorsyzygy/" target="_blank"><img src="/Media/Icons/githubIcon.png" alt="image link to github"></img></a>
                </Col>
                <Col xs={6} lg={3}>
                    <a href="mailto:tomroe@tutanota.com" target="_blank"><img src="/Media/Icons/emailIcon.png" alt="image link to email"></img></a>
                </Col>
            </Row>
        </Container>
    )
}
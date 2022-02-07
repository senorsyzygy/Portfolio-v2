import React from "react";
import { Col, Row, Nav, Navbar, Container } from "react-bootstrap";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navvy() {
<>
<Navbar fixed="top" bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">
            <img
                alt="TR"
                src="./Media/Logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />
        </Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#home">About Me</Nav.Link>
            <Nav.Link href="#features">Blog</Nav.Link>
            <Nav.Link href="#pricing">Projects</Nav.Link>
        </Nav>
        </Container>
</Navbar>
</>
}
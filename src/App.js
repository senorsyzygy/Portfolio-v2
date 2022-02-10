import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Nav, Navbar, Container } from "react-bootstrap";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from './About/About';
import Home from './Home/Home';
import Blog from './Blog/Blog';
import Projects from './Projects/Projects';
import Guestbook from './Guestbook/Guestbook';

function App() {
return (
    <div className="app">
    <main>
    <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>
            <img
                alt="TR"
                src="./Media/Logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top brandImage"
            />
        </Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#home">About Me</Nav.Link>
            <Nav.Link href="#pricing">Projects</Nav.Link>
            <Nav.Link href="#features">Blog</Nav.Link>
            <Nav.Link href="#features">Contact</Nav.Link>
            <Nav.Link href="#features">Guestbook</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
    <Home />
    <Container className="contentContainer">
        <About />
        <Guestbook />
        <Blog />
        <Projects />
    </Container>
    </main>
    </div>
);
}

export default App;

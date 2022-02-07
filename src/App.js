import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Nav, Navbar, Container } from "react-bootstrap";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from './About/About';

function App() {
  return (
    <div className="app">
    <main>
      <Navbar stick="top" bg="light" variant="light">
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
      <Container className="contentContainer">
        <About />
      </Container>
    </main>
    </div>
  );
}

export default App;

import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container } from "react-bootstrap";
import About from './About/About';
import Home from './Home/Home';
import Blog from './Blog/Blog';
import Projects from './Projects/Projects';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="#features">Contact</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
    <Home />
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<About/>}/>
            <Route path="*" element={<About/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/blog" element={<Blog/>}/>
        </Routes>
    </BrowserRouter>
    </main>
    </div>
);
}

export default App;

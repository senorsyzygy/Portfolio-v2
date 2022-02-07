import React from "react";
import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default function About() {
  return (
    <Container className="aboutContainer">
      <Row>
        <Col xs={6}>
        <h5 className="about-title">Hello World!</h5>
        <p class="lead">My name is Tom Roe, I'm 27 and based in the United Kingdom</p>
        <p>I am a keen learner and always want to expand my knowledge, I've always had an interest in trying to figure out how things work and when it comes to programming how I can replicate and implement it.</p>
        <p>I like to revisit old projects I've worked on and either expand upon them with new tricks I've learned or reworking from the ground up.</p>
        <p>When not learning how to further my programming knowledge I can be found either watching shows and films, playing games, playing with my pi, reading or practicing in some of the software mentioned in this section.</p>
        </Col>
        <Col xs={6}>
        <h5 className="about-title">What I know</h5>
        <Row>
          <Col xs={6}>
            <h5>Software</h5>
            <hr />
            <ul>
              <li><Image src="/Media/Icons/photoshopIcon.png" />  Adobe Photoshop</li>
              <li><Image src="/Media/Icons/premiereIcon.png" />  Adobe Premiere</li>
              <li><Image src="/Media/Icons/vegasIcon.png" />  Sony Vegas</li>
              <li><Image src="/Media/Icons/dockerIcon.jpg" />  Docker</li>
            </ul>
          </Col>
          <Col xs={6}>
            <h5>Languages</h5>
            <hr />
            <ul>
              <li><Image src="/Media/Icons/jsIcon.png" />  Javascript</li>
              <li><Image src="/Media/Icons/htmlIcon.png" />  HTML</li>
              <li><Image src="/Media/Icons/cssIcon.png" />  CSS</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <h5>Frameworks</h5>
            <hr />
            <ul>
              <li><Image src="/Media/Icons/bootIcon.png" />  Bootstrap</li>
              <li><Image src="/Media/Icons/reactIcon.png" />  ReactJS</li>
              <li><Image src="/Media/Icons/expressIcon.png" />  ExpressJS</li>
            </ul>
          </Col>
          <Col xs={4}>
            <h5>Databases</h5>
            <hr />
            <ul>
              <li><Image src="/Media/Icons/mongoIcon.png" />  MongoDB</li>
            </ul>
          </Col>
          <Col xs={4}>
            <h5>Cloud services</h5>
            <hr />
            <ul>
              <li><Image src="/Media/Icons/awsIcon.png" />  AWS</li>
            </ul>
          </Col>
        </Row>
        </Col>
      </Row>
    </Container>
  );
}
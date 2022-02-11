import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.scss';
import './About.scss';
import React,{ useEffect, useRef } from "react";
import { init } from "ityped";

export default function About() {
  const textRef = useRef();
  //Animated text with ityped
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:90,
      strings: ["Hello World!"],
    });
  }, []);

  return (
    <Container className="aboutContainer">
      <Row>
        <Col>
          <h1 class="display-3 text-center about-top-title">About Me</h1>
          <hr/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={6}>
        <h5 className="about-title text-center"><span ref={textRef}></span></h5>
        <h2 className="about-sub-title">My name is Tom Roe, I'm 27 and based in Sheffield, England.</h2>
        <br />
        <p>I am a keen learner and always want to expand my knowledge, I've always had an interest in trying to figure out how things work and when it comes to programming how I can replicate and implement it.</p>
        <p>I like to revisit old projects I've worked on and either expand upon them with new tricks I've learned or reworking from the ground up. I also enjoy starting new projects to either further my knowledge and try out some stuff I've learnt or to learn something new.</p>
        <p>I can be found either watching shows and films, playing games, playing with my pi, reading or practicing in some of the software mentioned in this section.</p>
        </Col>
        <Col xs={12} lg={6}>
        <h5 className="about-title text-center">Technical</h5>
        <Row>
          <Col xs={12} lg={6}>
            <h4>Software</h4>
            <hr />
            <ul>
              <li><Image src="/Media/Icons/photoshopIcon.png" />  Adobe Photoshop</li>
              <li><Image src="/Media/Icons/premiereIcon.png" />  Adobe Premiere</li>
              <li><Image src="/Media/Icons/vegasIcon.png" />  Sony Vegas</li>
              <li><Image src="/Media/Icons/dockerIcon.jpg" />  Docker</li>
            </ul>
          </Col>
          <Col xs={12} lg={6}>
            <h4>Languages</h4>
            <hr />
            <ul>
              <li><Image src="/Media/Icons/jsIcon.png" />  Javascript</li>
              <li><Image src="/Media/Icons/htmlIcon.png" />  HTML</li>
              <li><Image src="/Media/Icons/cssIcon.png" />  CSS</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={4}>
            <h4>Frameworks</h4>
            <hr />
            <ul>
              <li><Image src="/Media/Icons/bootIcon.png" />  Bootstrap</li>
              <li><Image src="/Media/Icons/reactIcon.png" />  ReactJS</li>
              <li><Image src="/Media/Icons/expressIcon.png" />  ExpressJS</li>
            </ul>
          </Col>
          <Col xs={12} lg={4}>
            <h4>Databases</h4>
            <hr />
            <ul>
              <li><Image src="/Media/Icons/mongoIcon.png" />  MongoDB</li>
            </ul>
          </Col>
          <Col xs={12} lg={4}>
            <h4>Cloud services</h4>
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
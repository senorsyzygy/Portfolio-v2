import { Container, Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ useEffect, useRef, useState } from "react";
import Moment from "react-moment";

export default function GuestMaker(props) {
    const postDate = <Moment fromNow>{props.createdAt}</Moment>
    return(
        <Container fluid>
            <Row>
                <Col>
                <h1>{props.author}</h1>
                <p>{props.comment}</p>
                <p>Posted {postDate}</p>
                </Col>
            </Row>
        </Container>
    )
}
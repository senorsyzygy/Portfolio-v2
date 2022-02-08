import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './BlogMaker.scss'
import Moment from "react-moment";

import React,{ useEffect, useRef, useState } from "react";
import Card from 'react-bootstrap/Card'

export default function BlogMaker(props) {
    const postDate = <Moment fromNow>{props.createdAt}</Moment>
    return(
        <Container fluid>
            <Row>
                <Card className="cardGen">
                    <Card.Img variant="top" src={props.image1} alt="Henlo" />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{props.subTitle}</Card.Subtitle>
                        <Card.Text>{props.bulkText}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">Posted {postDate}</Card.Footer>
                </Card>
            </Row>
        </Container>
    )
}
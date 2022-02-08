import { Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import React,{ useEffect, useRef, useState } from "react";
import Card from 'react-bootstrap/Card'

export default function ProjMaker(props) {
    return(
        <>
            <Card className="cardGen">
                <Card.Img variant="top" src={props.image1} alt="Henlo" />
                <Card.Body>
                    <Card.Title>{props.projectName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.subname}</Card.Subtitle>
                    <Card.Text><hr></hr></Card.Text>
                    <Card.Text><h5>Project description:</h5><br />{props.projectdesc}</Card.Text>
                    <Card.Text><h5>What I learned:</h5><br />{props.learning}</Card.Text>
                    <Button variant="outline-primary" target="_blank" href={props.frontend}>Front end repository</Button>
                    <Button variant="outline-success" target="_blank" href={props.livesite}>Live site</Button>
                </Card.Body>
            </Card>
        </>
    )
}
import { Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProjMaker.scss'
import React,{ useEffect, useRef, useState } from "react";
import Card from 'react-bootstrap/Card'

export default function ProjMaker(props) {
    return(
        <>
            <Card className="cardGen">
                <Card.Img variant="top" src={props.image1} alt="Henlo" />
                <Card.Body>
                    <Card.Title className="card-title">{props.projectName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.subname}</Card.Subtitle>
                    <Card.Text><hr></hr></Card.Text>
                    <Card.Text><h5>Project description</h5><br />{props.projectdesc}</Card.Text>
                    <Card.Text><h5>What I learned</h5><br />{props.learning}</Card.Text>
                    {props.backend != undefined ? 
                    <> 
                    <Button className="button" variant="outline-primary" target="_blank" href={props.frontend}>UI Source</Button> 
                    <Button className="button" variant="outline-primary" target="_blank" href={props.backend}>Server Source</Button> 
                    <Button className="button" variant="outline-success" target="_blank" href={props.livesite}>Live site</Button> 
                    </> 
                    : props.livesite != ""
                    ? <> 
                    <Button className="button" variant="outline-primary" target="_blank" href={props.frontend}>Github</Button> 
                    <Button className="button" variant="outline-success" target="_blank" href={props.livesite}>Live site</Button> 
                    </> :
                    <> <Button  className="button" variant="outline-primary" target="_blank" href={props.frontend}>Github</Button> </> }
                </Card.Body>
            </Card>
        </>
    )
}
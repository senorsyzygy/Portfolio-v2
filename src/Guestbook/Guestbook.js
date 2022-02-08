import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.scss';
import React,{ useEffect, useRef, useState } from "react";
import { ApiClient } from "../apiClient";
import GuestMaker from "./components/GuestMaker";
import Add from "./components/Add";
import './Guestbook.scss'

export default function Guestbook() {
    const [guests, cGuests] = useState([]) 
    const client = new ApiClient()
    const refreshGuests = () => {
        client.fetchGuests().then((response) => cGuests(response.data))
    }

    useEffect(() => {
        refreshGuests()
    }, [])

    function buildGuests(){
        return guests.map((current) => {
            return(
                <>
                <GuestMaker author={current.author} comment={current.comment} createdAt={current.createdAt}></GuestMaker>
                </>
            )
        })
    }

    return(
        <Container>
            <Row>
                <Col>
                <h1 class="display-3 text-center guest-top-title">Guestbook</h1>
                <hr/>
                </Col>
            </Row>
            <Row>
                <Col className="guestbookAdd">
                    <Add/>
                </Col>
            </Row>
            <Row className="guestbookComments">
                <Col>
                    {buildGuests()}
                </Col>
            </Row>
        </Container>
    )
}


import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.scss';
import React,{ useEffect, useState } from "react";
import { ApiClient } from "../apiClient";
import ProjMaker from "./components/ProjMaker";

export default function Projects() {
    const [projs, cProjs] = useState([]) 
    const client = new ApiClient()
    const refreshProjs = () => {
        client.fetchProjs().then((response) => cProjs(response.data))
    }
    useEffect(() => {
        refreshProjs()
    }, [])

    function buildProjs(){
        return projs.map((current) => {
            return(
                <Col>
                <ProjMaker projectName={current.projectName} subname={current.subname} projectdesc={current.projectdesc} image1={current.image1} learning={current.learning} frontend={current.frontend} backend={current.backend} livesite={current.livesite}></ProjMaker>
                </Col>
            )
        })
    }

    return(
        <Container>
            <Row>
                <Col>
                <h1 class="display-3 text-center proj-top-title">Projects</h1>
                <hr/>
                </Col>
            </Row>
            <Row sm={1} md={2} className="card-group justify-content-center">
                {buildProjs()}
            </Row>
        </Container>
    )
}


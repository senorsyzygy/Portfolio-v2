import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.scss';
import './Blog.scss';
import React,{ useEffect, useRef, useState } from "react";
import { ApiClient } from "../apiClient";
import BlogMaker from "./components/BlogMaker";

export default function Blog() {
    const [blogs, cBlogs] = useState([]) 
    const client = new ApiClient()
    const refreshBlogs = () => {
        client.fetchBlogs().then((response) => cBlogs(response.data))
    }
    console.log(blogs)
    useEffect(() => {
        refreshBlogs()
    }, [])

    function buildBlogs(){
        return blogs.map((current) => {
            return(
                <>
                <BlogMaker title={current.title} subTitle={current.subTitle} bulkText={current.bulkText} image1={current.image1} image2={current.image2} createdAt={current.createdAt}></BlogMaker>
                </>
            )
        })
    }

    return(
        <Container className="blogContainer">
            <Row>
                <Col>
                <h1 class="display-3 text-center blog-top-title">Blog</h1>
                <hr/>
                </Col>
            </Row>
            {buildBlogs()}
        </Container>
    )
}


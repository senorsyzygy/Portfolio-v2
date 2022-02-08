import { Container, Form, Button} from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ useState } from "react";
import { ApiClient } from "../../apiClient";
import { propTypes } from "react-bootstrap/esm/Image";

export default function Add(props) {
    const client = new ApiClient()
    const [author, setAuthor] = useState('')
    const [comment, setComment] = useState('')
    const handleSubmit = e => {
        alert("You have successfully posted!")
        e.preventDefault()
        client.addGuestbookComment(author, comment)
        .catch(() => {
            alert("An error occured, please try again.")
        })
    }
    return(
        <Container>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="author">
                            <Form.Label>Your name</Form.Label>
                            <Form.Control type="text" required value={author} onChange={e => setAuthor(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group classname="mb-3" controlId="comment">
                            <Form.Label>Your comment</Form.Label>
                            <Form.Control type="text" required value={comment} onChange={e => setComment(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Button type="submit" variant="success">Submit!</Button>
            </Form>
        </Container>
    )
}
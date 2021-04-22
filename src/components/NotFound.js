import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const NotFound = () => {
    const history = useHistory();
    useEffect(() => {
        setTimeout(() => {
            history.push("/home")
        }, 8000)
    });

    return (
        <>
            <Container className="not-found-container">
                <Row>
                    <h1 className="not-found-header">The Famed 404 🎉</h1>
                    <Col md={12}>
                        <p className="not-found-text mt-2">Unfortunately, this page doesn't exist!</p>
                        <p className="not-found-text mt-2">But our Home Page sure does 😉</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default NotFound;
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';

const ContactCarouselSmall = () => {
    return (
        <Container className="d-block d-md-none">
            <Row>
                <Col xs={{ span: 12 }} md={{ span: 8, offset: 2 }}>
                    <Card className="contact-carousel contact-form-card">
                        <Card.Header>
                            <Container>
                                <Row>
                                    <h3 className="mx-auto">Hit Us Up! 🤙</h3>
                                </Row>
                            </Container>
                        </Card.Header>
                        <Card.Body>
                            <Container fluid>
                                <Row>
                                    <Carousel
                                        indicators={false}
                                        fade={true}
                                        controls={false}
                                        interval={4000}
                                    >
                                        <Carousel.Item>
                                            <Container>
                                                <Row>
                                                    <h4 className="contact-list-header mx-auto mb-3">Got any Queries? </h4>
                                                    <div className='contact-list ml-5'><strong>Jatin Bhagchandani</strong><br />(<i>Chairperson</i>):<br />+91 96194 47077</div>
                                                    <div className='contact-list ml-5'><strong>Apoorva Sudheesh</strong><br />(<i>Sr.Secretary</i>):<br />+91 83588 02335</div>
                                                    <div className='contact-list ml-5'><strong>Fayzaan Qureshi</strong><br />(<i>Co-Chairperson</i>):<br />+91 98191 86523</div>
                                                </Row>
                                            </Container>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <Row>
                                                <h4 className="contact-list-header mx-auto mb-3">Memberships Info? </h4>
                                                <div className='contact-list ml-5'><strong>Yash Diwan</strong><br />(<i>Treasurer</i>):<br />+91 98345 71848</div>
                                                <div className='contact-list ml-5'><strong>Saloni Ingle</strong><br />(<i>Jr.Treasurer</i>):<br />+91 93705 50921</div>
                                            </Row>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <Row>
                                                <h4 className="contact-list-header mx-auto mb-3">Technical Trouble? </h4>
                                                <div className='contact-list ml-5'><strong>Saurav Telge</strong><br />(<i>Operations Secretary</i>):<br />+91 98215 05562</div>
                                            </Row>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <Row>
                                                <h4 className="contact-list-header mx-auto mb-3">Anything Else? </h4>
                                                <div className='contact-list ml-5'><strong>Shreya Shah</strong><br />(<i>Managing Secretary</i>):<br />+91 93597 29644</div>
                                                <div className='contact-list ml-5'><strong>Pooja Prasad</strong><br />(<i>Public Relations Head</i>):<br />+91 86572 06488</div>
                                            </Row>
                                        </Carousel.Item>
                                    </Carousel>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactCarouselSmall;
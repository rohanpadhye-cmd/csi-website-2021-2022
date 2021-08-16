import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';

const ContactCarouselSmall = () => {
    return (
        <Container className="d-block d-md-none about-content shadow" data-aos="fade-up" data-aos-duration="1000">
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
                                        controls={false}
                                        interval={4000}
                                        className="contact-carousel"
                                    >
                                        <Carousel.Item>
                                            <Container>
                                                <Row>
                                                    <h4 className="contact-list-header mx-auto mb-3">Got any Queries? </h4>
                                                    <div className="mx-auto">
                                                        <div className='contact-list'><strong>Apoorva Sudheesh</strong> (<i>Secretary</i>):<br />+91 83588 02335</div>
                                                        <div className='contact-list'><strong>Fayzaan Qureshi</strong> (<i>Co-Chairperson</i>):<br />+91 98191 86523</div>
                                                    </div>
                                                </Row>
                                            </Container>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <Row>
                                                <h4 className="contact-list-header mx-auto mb-3">Memberships Info? </h4>
                                                <div className="mx-auto">
                                                    <div className='contact-list'><strong>Yash Diwan</strong> (<i>Sr. Treasurer</i>):<br />+91 98345 71848</div>
                                                    <div className='contact-list'><strong>Saloni Ingle</strong> (<i>Jr. Treasurer</i>):<br />+91 93705 50921</div>
                                                </div>
                                            </Row>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <Row>
                                                <h4 className="contact-list-header mx-auto mb-3">Technical Trouble? </h4>
                                                <div className="mx-auto">
                                                    <div className='contact-list'><strong>Saurav Telge</strong> (<i>Operations Secretary</i>):<br />+91 98215 05562</div>
                                                </div>
                                            </Row>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <Row>
                                                <h4 className="contact-list-header mx-auto mb-3">Anything Else? </h4>
                                                <div className="mx-auto">
                                                    <div className='contact-list'><strong>Shreya Shah</strong> (<i>Managing Secretary</i>):<br />+91 93597 29644</div>
                                                    <div className='contact-list'><strong>Pooja Prasad</strong> (<i>Public Relations Head</i>):<br />+91 86572 06488</div>
                                                </div>
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
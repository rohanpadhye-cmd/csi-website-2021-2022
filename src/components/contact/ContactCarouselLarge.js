import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';

const ContactCarouselLarge = () => {
    return (
        <Container className="d-none d-md-block" data-aos="fade-up" data-aos-duration="1000">
            <Row className="my-5 py-5">
                <Col xs={{ span: 12 }} md={{ span: 8, offset: 2 }}>
                    <Card className="my-5 contact-carousel contact-form-card">
                        <Card.Header>
                            <Row><h3 className="mx-auto">Hit Us Up! 🤙</h3></Row>
                        </Card.Header>
                        <Card.Body>
                            <Carousel
                                fade={true}
                                controls={false}
                                interval={4000}
                                className="pb-md-5"
                            >
                                <Carousel.Item>
                                    <h4 className="ml-5 contact-list-header">Got any Queries? </h4>
                                    <div className="mx-auto">
                                        <ul className='contact-list mt-4'>
                                            <li className="mb-3"><strong>Jatin Bhagchandani</strong> (<i>Chairperson </i>): +919619447077</li>
                                            <li className="my-3"><strong>Apoorva Sudheesh</strong> (<i>Sr.Secretary </i>): +918358802335</li>
                                            <li><strong>Fayzaan Qureshi</strong> (<i>Co-Chairperson </i>): +919819186523</li>
                                        </ul>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <h4 className="ml-5 contact-list-header">Memberships Info? </h4>
                                    <div className="mx-auto">
                                        <ul className='contact-list'>
                                            <li className="mt-4 mb-3"><strong>Yash Diwan</strong> (<i>Sr. Treasurer </i>): +919834571848</li>
                                            <li><strong>Saloni Ingle</strong> (<i>Jr. Treasurer </i>): +91 9370550921</li>
                                        </ul>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <h4 className="ml-5 contact-list-header">Technical Trouble? </h4>
                                    <div className="mx-auto">
                                        <ul className='contact-list mt-4 mb-3'>
                                            <li><strong>Saurav Telge</strong> (<i>Operations-Secretary </i>): +91 9821505562</li>
                                        </ul>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <h4 className="ml-5 contact-list-header">Any other Assistance? </h4>
                                    <div className="mx-auto">
                                        <ul className='contact-list'>
                                            <li className="mt-4 mb-3"><strong>Shreya Shah</strong> (<i>Managing Secretary </i>): +91 9359729644</li>
                                            <li><strong>Pooja Prasad</strong> (<i>Public Relations Head </i>): +91 8657206488</li>
                                        </ul>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactCarouselLarge;
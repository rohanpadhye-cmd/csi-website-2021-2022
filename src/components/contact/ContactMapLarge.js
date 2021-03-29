import { Container, Row, Col, Card } from 'react-bootstrap';

const ContactMapLarge = () => {
    return (
        <>
            <Card className='mt-md-2 mx-auto d-none d-md-flex' border='info' style={{ width: '90%', height: '70%' }}>
                <Card.Body className='px-0 py-0'>
                    <iframe
                        title='map'
                        width="100%"
                        height="100%"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=vivekanand%20education%20socie&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0" />
                </Card.Body>
            </Card>
            <Container fluid className='ml-md-3 mt-md-4 d-none d-md-flex'>
                <Row>
                    <Col md={{span: 5}}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-map-2"
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="#363537"
                            fill="#add8e6"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15"></polyline>
                            <line x1="9" y1="4" x2="9" y2="17"></line>
                            <line x1="15" y1="15" x2="15" y2="20"></line>
                            <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5"></path>
                            <line x1="18" y1="6" x2="18" y2="6.01"></line>
                        </svg>
                        <div className='contact-text mt-md-2'>
                            Vivekanand Education Society's Institute of Technology,
                            Collector's Colony, Chembur, Mumbai-74
                        </div>
                    </Col>
                    <Col>
                        <Container fluid className="ml-md-5">
                            <Row>
                                <Col className="mt-md-1" md={{span: 12}}>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className="icon icon-tabler icon-tabler-mail" 
                                        width="40" 
                                        height="40" 
                                        viewBox="0 0 24 24" 
                                        strokeWidth="2" 
                                        stroke="#363537" 
                                        fill="#add8e6" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                                        <polyline points="3 7 12 13 21 7"></polyline>
                                    </svg>
                                    <span className='contact-text mt-md-2 ml-md-2'>
                                        csi.vesit@ves.ac.in
                                    </span> 
                                </Col>
                                <Col className="mt-md-3" md={{span:12}}>
                                    <Row>
                                        <Col md={{ span: 2 }}>
                                            <svg 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                className="icon icon-tabler icon-tabler-phone-call" 
                                                width="40" 
                                                height="40" 
                                                viewBox="0 0 24 24" 
                                                strokeWidth="2" 
                                                stroke="#363537" 
                                                fill="#add8e6" 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                                                <path d="M15 7a2 2 0 0 1 2 2"></path>
                                                <path d="M15 3a6 6 0 0 1 6 6"></path>
                                            </svg>
                                        </Col>
                                        <Col>
                                            <div className='contact-text'>
                                                Jatin Bhagchandani:
                                            </div>
                                            <div className='contact-text'>
                                                +91 96194 47077
                                            </div>
                                            <div className='contact-text'>
                                                (Chairperson)
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ContactMapLarge;
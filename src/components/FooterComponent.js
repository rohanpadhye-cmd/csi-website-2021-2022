// import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GiHeartBattery, GiCoffeeMug } from 'react-icons/gi';
import IconBar from './icons/IconBar';

const FooterComponent = () => {
    return(
        <>
            <footer>
                <hr className="mx-4 mt-5" />
                <Container fluid className="d-none d-md-block">
                    <Row className="my-4">
                        <Col md={3}>
                            &copy; CSI - VESIT 2021
                        </Col>
                        <Col md={5} className="ml-5 pl-5">
                            madeWith = (<GiHeartBattery /> , <GiCoffeeMug />) =&gt; &#123;<span style={{"fontStyle": "italic"}}>Our CSI Team</span>&#125;
                        </Col>
                        <Col>
                            <IconBar />
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="d-md-none mb-3">
                    <Row>
                        <div className="mx-auto mt-1">
                            &copy;CSI - VESIT 2021
                        </div>
                    </Row>
                    <Row>
                        <div className="mx-auto my-3">
                            madeWith = (<GiHeartBattery /> , <GiCoffeeMug />) =&gt; &#123;<span style={{ "fontStyle": "italic" }}>The CSI Team</span>&#125;
                        </div>
                    </Row>
                    <Row>
                        <div className="mx-auto">
                            <IconBar />
                        </div>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default FooterComponent;


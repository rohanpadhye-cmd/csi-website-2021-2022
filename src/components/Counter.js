import React from 'react'
import {  Col, Row} from 'react-bootstrap';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

const Counter = () => {
    return (
        <Row className="counter">
        <Col lg={4} sm={4} className="counter-item">
          <div>
            <CountUp end={35} redraw={true}>
            {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                    <h1><span ref={countUpRef} />+</h1>
                </VisibilitySensor>
            )}
            </CountUp>
          </div>
          <h3>Workshops</h3>
        </Col>

        <Col lg={4} sm={4} className="counter-item">
          <div> <CountUp end={40} redraw={true}>
            {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                    <h1><span ref={countUpRef} />+</h1>
                </VisibilitySensor>
            )}
            </CountUp></div>
          <h3>Council</h3>
        </Col>

        <Col lg={4} sm={4} className="counter-item">
          <div> <CountUp end={30} redraw={true}>
            {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                    <h1><span ref={countUpRef} />+</h1>
                </VisibilitySensor>
            )}
            </CountUp></div>
          <h3>Years</h3>
        </Col>

      </Row>
    )
}

export default Counter

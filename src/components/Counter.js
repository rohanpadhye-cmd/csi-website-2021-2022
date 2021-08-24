import React from 'react'
import {  Col, Row} from 'react-bootstrap';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import {FaCheck} from "react-icons/fa"
import {TiGroup} from "react-icons/ti"
import {IoMdCheckboxOutline} from "react-icons/io"

const Counter = () => {
    return (
      <div data-aos="zoom-in" data-aos-duration='3000'>
        <Row className="counter">
        <Col lg={4} sm={4}>
          <div className="counter-item">
            <FaCheck size="40"/>
            <CountUp end={35} redraw={true}>
            {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                    <h1><span ref={countUpRef} />+</h1>
                </VisibilitySensor>
            )}
            </CountUp>
            <p>Workshops</p>
          </div>
          
        </Col>

        <Col lg={4} sm={4}>
          <div className="counter-item"> 
          <TiGroup size="40"/>
          <CountUp end={300} redraw={true}>
            {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                    <h1><span ref={countUpRef} />+</h1>
                </VisibilitySensor>
            )}
            </CountUp>
            <p>Members</p>
            </div>
     
        </Col>

        <Col lg={4} sm={4}>
          <div className="counter-item"> 
          <IoMdCheckboxOutline size="40"/>
          <CountUp end={30} redraw={true}>
            {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                    <h1><span ref={countUpRef} />+</h1>
                </VisibilitySensor>
            )}
            </CountUp>
            <p>Years</p>
            </div>
         
        </Col>

      </Row>
      </div>
    )
}

export default Counter

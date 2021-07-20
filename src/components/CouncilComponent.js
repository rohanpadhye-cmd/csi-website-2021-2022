import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Faculty from "./council/Faculty";
import FinalYearCouncil from "./council/FinalYearCouncil";
import ThirdYearCouncil from "./council/ThirdYearCouncil";
import SecondYearCouncil from "./council/SecondYearCouncil";

const CouncilComponent = () => {
  return (
    <Container>
      <h1 className="mb-4">Faculty Members</h1>
      <Row>
        <Col />
        <Faculty />
        <Col />
      </Row>
      <h1 className="mt-3 mb-4">BE Council Members</h1>
      <Row>
        <FinalYearCouncil />
        {/* <ThirdYearCouncil /> */}
        {/* <SecondYearCouncil /> */}
      </Row>
      <h1 className="mt-3 mb-4">TE Council Members</h1>
      <Row>
        {/* <FinalYearCouncil /> */}
        <ThirdYearCouncil />
        {/* <SecondYearCouncil /> */}
      </Row>
      <h1 className="mt-3 mb-4">SE Council Members</h1>
      <Row>
        {/* <FinalYearCouncil /> */}
        {/* <ThirdYearCouncil /> */}
        <SecondYearCouncil />
      </Row>
    </Container>
  )
}
 
export default CouncilComponent;
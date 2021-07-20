import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Faculty from "./council/Faculty";
import FinalYearCouncil from "./council/FinalYearCouncil";
import ThirdYearCouncil from "./council/ThirdYearCouncil";
import SecondYearCouncil from "./council/SecondYearCouncil";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const CouncilComponent = () => {
  const options = {
    loop: true,
    items: 3,
    autoplay: true,
    autoplayHoverPause: true,
  };
  return (
    <Container>

      <h1 className="mb-4">Faculty Members</h1>
      <Row>
        <Col />
        <Faculty />
        <Col />
      </Row>

      <h1 className="mt-3 mb-4">BE Council Members</h1>
      <OwlCarousel {...options}>
        <FinalYearCouncil />
      </OwlCarousel>

      <h1 className="mt-3 mb-4">TE Council Members</h1>
      <OwlCarousel {...options}>
        <ThirdYearCouncil />
      </OwlCarousel>

      <h1 className="mt-3 mb-4">SE Council Members</h1>
      <OwlCarousel {...options}>
        <SecondYearCouncil />
      </OwlCarousel>

      
    </Container>
  )
}
 
export default CouncilComponent;
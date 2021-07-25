import React from "react";
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import Faculty from "./council/Faculty";
import FinalYearCouncil from "./council/FinalYearCouncil";
import ThirdYearCouncil from "./council/ThirdYearCouncil";
import SecondYearCouncil from "./council/SecondYearCouncil";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import "../components/council/councilCard.css";
// import { motion } from "framer-motion";


// Side-by-side se te be owlcarousel
const CouncilComponent = () => {

  //States for buttons
const [currentCouncil, setCurrentCouncil] = React.useState("BE");;
const [isClicked,setIsClicked] = React.useState("BE");

 //This are the buttons
function Buttons(){
  return ( 
  <Row className='justify-content-center' style={{marginBottom:"50px"}} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
    <Button  id="1"  className={`ml-2 w-25 centerWorkBtn ${isClicked ==="BE" ? null : " contact-btn"}`}     onClick={whichCouncil}>
    BE Council
    </Button>
    <Button  id="2"   className={`ml-2 w-25 centerWorkBtn ${isClicked ==="TE" ? null : " contact-btn"}`}     onClick={whichCouncil}>
    TE Council
    </Button>
    <Button  id="3"   className={`ml-2 w-25 centerWorkBtn ${isClicked ==="SE" ? null : " contact-btn"}`}   onClick={whichCouncil}>
    SE Council 
    </Button>
  </Row>
  )
}

//This function sets the stste of buttons to show respective Year cards

const whichCouncil = (e) => {
  const id = e.target.id;
  e.target.setvariant = "primary";
  if (id === "1") {
  setCurrentCouncil("BE");
  setIsClicked("BE");
  }
  else if (id === "2") {
  setCurrentCouncil("TE");
  setIsClicked("TE");
  }
  else if (id === "3") {
  setCurrentCouncil("SE");
  setIsClicked("SE");
  }
}
 

 return (
   <Container>
    <h1 className="mb-4" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">Faculty Members</h1>
      <Row style={{ justifyContent: "center", display: "flex", flexWrap: "wrap" }} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
        <Faculty />
      </Row>

     <Buttons />
     <Row data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
        {currentCouncil === "BE" && (<FinalYearCouncil />)}
        {currentCouncil === "TE" && (<ThirdYearCouncil />)}
        {currentCouncil === "SE" && (<SecondYearCouncil />)}
     </Row>
   </Container>
 );
}

export default CouncilComponent;

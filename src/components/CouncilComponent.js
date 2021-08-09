import React,{useState,useRef} from "react";
import { Container, Row, Col,Carousel ,Button} from "react-bootstrap";
import Faculty from "./council/Faculty";
import FinalYearCouncil from "./council/FinalYearCouncil";
import ThirdYearCouncil from "./council/ThirdYearCouncil";
import SecondYearCouncil from "./council/SecondYearCouncil";



const CouncilComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };




  
  return (
    <Container >

      <h1 className="mb-4">Faculty Members</h1>
      <Row>
        <Col />
        <Faculty />
        <Col />
      </Row>
      

    <Row className='justify-content-center'>
    <Button 
    className={`ml-2 w-25  ${index===0?  "contact-btn " : null} `} 
    onClick={() => setIndex(0)}>
        BE
    </Button>
    <Button 
    className={`ml-2 w-25  ${index===1?  "contact-btn " : null} `} 
    onClick={() => setIndex(1)}>
      TE
    </Button>
    <Button 
    className={`ml-2 w-25  ${index===2?  "contact-btn " : null} `}
    onClick={() => setIndex(2)}>
      SE
    </Button>
    </Row>
    <Carousel activeIndex={index} onSelect={handleSelect} interval={2000} indicators={false} controls={false}>
    <Carousel.Item>
        <h1 className="mt-3 mb-4">BE Council Members</h1>
          <Row>
          <FinalYearCouncil/>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
        <h1 className="mt-3 mb-4">TE Council Members</h1>
          <Row>
          <ThirdYearCouncil/>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
        <h1 className="mt-3 mb-4">SE Council Members</h1>
          <Row>
          <SecondYearCouncil/>
          </Row>
        </Carousel.Item>
    </Carousel>
    



    
      {/* <OwlCarousel {...options}>
        
      </OwlCarousel>

      
      <OwlCarousel {...options}>
      
      </OwlCarousel>

      
      <OwlCarousel {...options}>
       
      </OwlCarousel> */}

      
    </Container>
  )
}
 
export default CouncilComponent;

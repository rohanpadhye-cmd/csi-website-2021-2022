import React from "react";
import {Card,Col} from "react-bootstrap";
import { IconContext } from 'react-icons';
import { FaGithub, FaInstagram, FaLinkedinIn} from 'react-icons/fa';

//Styled code 




function Cards(props) {

  return (

    <Col md={4} xs={6} style={{textAlignLast:"center"}}>
    <Card   className='mt-3 ' style={{backgroundColor: "#fff"}} >
    <Card.Img src={props.imageUrl} />
    <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text >{props.role}</Card.Text>
        <IconContext.Provider value={{ color: '#363537', className:'fa-icons', size:'12%' }}>
                    <a href='https://www.google.com/' className='ml-0'><FaInstagram/></a>
                    <a href='https://www.google.com/' className='ml-3'><FaGithub/></a>
                    <a href='https://www.google.com/' className='ml-3'><FaLinkedinIn/></a>
        </IconContext.Provider>
      </Card.Body>
    </Card>
    </Col>
    
  )

}

export default Cards;


/*
function Cards(props) {


  return (

    <Col md={4} xs={6} >
    <Card  className='mt-3' style={{backgroundColor: "#fff"}}  >
    <Card.Img src={props.imageUrl} />
    <Card.Body className="centerCouncilText">
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.role}</Card.Text>
        <IconContext.Provider value={{ color: '#363537', className:'fa-icons', size:'1em' }}>
                    <a href='https://www.google.com/' className='ml-2'><FaInstagram/></a>
                    <a href='https://www.google.com/' className='ml-2'><FaGithub/></a>
                    <a href='https://www.google.com/' className='ml-2'><FaLinkedinIn/></a>
                </IconContext.Provider>
      </Card.Body>
    </Card>
    </Col>
    
  )

}


*/
import React from "react";
import {Card} from "react-bootstrap";
import { IconContext } from 'react-icons';
import { FaEnvelope, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


function Cards(props) {


  return (
    <div>
    <Card style={{ width: '18rem' }} className="councilCard" >
      <Card.Img variant="top" src={props.imageUrl} style={{ height:"200px" }}/>
      <Card.Body className="councilCardText">
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.role}</Card.Text>
        <IconContext.Provider value={{ color: '#363537', className:'fa-icons', size:'2em' }}>
          <a href='https://www.google.com/' className='ml-2'><FaInstagram /></a>
          <a href='mailto:csi.vesit@ves.ac.in' className='ml-2'><FaEnvelope /></a>
          <a href='https://www.google.com/' className='ml-2'><FaLinkedinIn /></a>
        </IconContext.Provider>
      </Card.Body>
    </Card>

    </div>
  )

}

export default Cards;
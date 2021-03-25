import React from "react";
import { Card } from "react-bootstrap";
import { IconContext } from 'react-icons';
import { FaGithub, FaInstagram, FaLinkedinIn} from 'react-icons/fa';

function Cards(props) {

  return (
<<<<<<< HEAD
    <div className="card-container">
      <Card id="team" >
        <Card.Img className="cardImg" variant="top" src={props.imageUrl} />
        <Card.Body className="cardText" >
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.role}</Card.Text>
          <IconContext.Provider value={{ color: '#363537', className: 'fa-icons', size: '10%' }}>
            <a href='https://www.google.com/' className='ml-2'><FaInstagram /></a>
            <a href='mailto:csi.vesit@ves.ac.in' className='ml-2'><FaEnvelope /></a>
            <a href='https://www.google.com/' className='ml-2'><FaLinkedinIn /></a>
          </IconContext.Provider>
        </Card.Body>
      </Card>
=======
    <div>
    <Card style={{ width: '18rem' } } >
      <Card.Img variant="top" src={props.imageUrl} style={{ height:"200px" }}/>
      <Card.Body className="cardText">
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.role}</Card.Text>
        <IconContext.Provider value={{ color: '#363537', className:'fa-icons', size:'2em' }}>
                    <a href='https://www.google.com/' className='ml-2'><FaInstagram/></a>
                    <a href='https://www.google.com/' className='ml-2'><FaGithub/></a>
                    <a href='https://www.google.com/' className='ml-2'><FaLinkedinIn/></a>
                </IconContext.Provider>
      </Card.Body>
    </Card>

>>>>>>> 8bc40241e19de1f23ad906e84a861f5a50c73bd2
    </div>
  )

}

export default Cards;
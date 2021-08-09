import "./councilCard.css";
import { Col } from "react-bootstrap";
import { FaGithub, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import P1 from "../../assets/P1.jpeg"

const CouncilCard = ({ name,imageUrl }) => {
  return (
    <Col md={4} xs={6} className="mb-5">
      <div class="img-wrapper">
        <img src={imageUrl} alt="Atul Prajapati" />
        <h2>{name}</h2>
        <ul>
          <li><a href="https://www.instagram.com/atulkprajapati2000/"><FaInstagram /></a></li>
          <li><a href="https://github.com/atuljustano"><FaGithub /></a></li>
          <li><a href="https://twitter.com/atuljustano"><FaLinkedinIn /></a></li>
          <li><a href="https://twitter.com/atuljustano"><FaEnvelope /></a></li>
        </ul>
      </div>
      
    </Col>
  )
}

export default CouncilCard;

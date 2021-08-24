import "./councilCard.css";
import { Col } from "react-bootstrap";
import { FaGithub, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
const CouncilCard = (props) => {
  return (
    <Col md={4} sm={6} xs={12} className="mb-5">
      {/* <div className="card-wrapper" style={{ backgroundColor: `${props.bgcol}` }}> */}
        <div className="card">
          <div className="card-image">
            <img src={props.imageUrl} alt="Council-img" />
            <div className="social-icons">
              <ul>
                <li><a href="https://www.instagram.com/atulkprajapati2000/"><FaInstagram /></a>
                </li>
                <li><a href="https://github.com/atuljustano"><FaGithub /></a>
                </li>
                <li><a href="https://twitter.com/atuljustano"><FaLinkedinIn /></a>
                </li>
                <li><a href="https://twitter.com/atuljustano"><FaEnvelope /></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="details">
            <h4>{props.name}</h4>
            <span className="job-title">{props.role}</span>
          </div>
        </div>
    </Col>
  );
}

export default CouncilCard;

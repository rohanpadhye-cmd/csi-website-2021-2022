import "./councilCard.css";
import { Col } from "react-bootstrap";
import { FaGithub, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import temp from "./Saurav_Telge-rm-bg.png";
const CouncilCard = (props) => {
  return (
    <Col md={4} sm={6} xs={12} className="mb-5">
      {/* <div class="card-wrapper" style={{ backgroundColor: `${props.bgcol}` }}> */}
        <div class="card">
          <div class="card-image">
            <img src={temp} alt="Council-img" />
            {/* <img src={props.imageUrl} alt="Council-img" /> */}
            <div class="social-icons">
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
          <div class="details">
            <h4>{props.name}</h4>
            <span class="job-title">{props.role}</span>
          </div>
        </div>
    </Col>
  );
}

export default CouncilCard;

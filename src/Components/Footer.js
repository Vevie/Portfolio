import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import linkedin from '../assets/linkedin.svg';
import facebooksquare from '../assets/facebook-square.svg';
import instagram from '../assets/instagram.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h2>Vera</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={linkedin} alt="Icon" /></a>
              <a href="#"><img src={facebooksquare} alt="Icon" /></a>
              <a href="#"><img src={instagram} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

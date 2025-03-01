import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/leetcode3.svg";
import navIcon3 from "../assets/img/github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <div className="caftech-footer-logo">
              <span style={{ color: "#fff" }}>Mariam</span>
              <span className="tech-highlight">Elmoazen</span>  
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mariam-elmoazen-b6835a172/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://leetcode.com/u/marie2233/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/Mariam22-hub"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

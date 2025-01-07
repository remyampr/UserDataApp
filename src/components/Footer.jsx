import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../style/Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="text-center">
          <Col lg={4} sm={12} className="footer-section">
            <h5>About Us</h5>
            <p>We are dedicated to helping you track your personal data with ease.</p>
          </Col>
          <Col lg={4} sm={12} className="footer-section">
            <h5>Quick Links</h5>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/user">User</Link></li>
            </ul>
          </Col>
          <Col lg={4} sm={12} className="footer-section">
            <h5>Contact</h5>
            <p>Email: support@userdata.com</p>
            <p>Follow us on social media</p>
            <ul className="social-links">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <p>&copy; 2025 UserData. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

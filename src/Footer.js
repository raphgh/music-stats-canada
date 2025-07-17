import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebookF, FaEnvelope, FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="lego-footer">
      <Container>
        <Row className="text-center align-items-center py-4">
          <Col md={4} className="mb-3 mb-md-0 text-white">
            <h5>Music Stats Canada</h5>
            <p>Your one-stop destination for all things music in Canada.</p>
          </Col>

          <Col md={4} className="mb-3 mb-md-0">
            <div className="footer-links">
              <a href="/music-stats-canada">Home</a>
              <a href="/music-stats-canada">Analysis</a>
              <a href="/music-stats-canada">About MStatsCanada</a>
              <a href="/music-stats-canada">Survey Programs</a>
              <a href="/music-stats-canada">Contact</a>
            </div>
          </Col>

          <Col md={4}>
            <div className="footer-icons">
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="mailto:info@blossomblocks.com"><FaEnvelope /></a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text-center mt-3 small text-white">
            <p>
                © {new Date().getFullYear()} Music Stats Canada
            </p>
            <br></br>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
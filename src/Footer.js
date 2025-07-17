import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebookF, FaEnvelope, FaHeart } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="lego-footer">
      <Container>
        <Row className="text-center align-items-center py-4">
          <Col md={4} className="mb-3 mb-md-0 text-white">
            <h5>{t('main_title')}</h5>
            <p>{t('slogan')}.</p>
          </Col>

          <Col md={4} className="mb-3 mb-md-0">
            <div className="footer-links">
              <a href="/music-stats-canada">{t('home')}</a>
              <a href="/music-stats-canada">{t('analysis')}</a>
              <a href="/music-stats-canada">{t('submit_stats')}</a>
              <a href="/music-stats-canada">{t('about')}</a>
              <a href="/music-stats-canada">{t('contact')}</a>
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
                © {new Date().getFullYear()} {t('main_title')}
            </p>
            <br></br>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
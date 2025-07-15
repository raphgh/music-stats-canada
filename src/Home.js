import { Card } from 'react-bootstrap';
import './App.css';
import { useTranslation } from 'react-i18next';
import { Button, CardGroup, Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import GenreLineChart from './GenreLineChart';
import CreationImg from './images/creation.jpg';
import HomeImg from './images/mainimage.png'
import DistributionImg from './images/musicmarketing.jpg';

function Home() {
  const { t } = useTranslation();

return (
    <div className="home-page" style={{ minHeight: '100vh' }}>
        <section
            className="main-title"
            style={{
                backgroundImage: `url(${CreationImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat" 
            }}
        >
            <h1>{t('main_title')}</h1>
            <p className="lead">{t('slogan')}</p>
        </section>

        <Container>
            <Row>
                <Col md={8}>
                    <GenreLineChart />
                </Col>
                <Col md={4}>
                    {/* Right side content */}
                </Col>
            </Row>
        </Container>

        <br />
        <br />
        <br />
        <br />

        <Container>
            <section className="cards-section">
                <Row className="g-4">
                    <Col md={4}>
                        <Card className="h-100 text-center shadow">
                            <Card.Body>
                                <Card.Title>
                                    <img
                                        src={CreationImg}
                                        alt={t('creation')}
                                        className="mb-3"
                                        style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: '3px' }}
                                    />
                                    {t('creation')}
                                </Card.Title>
                                <ul className="list-unstyled">
                                    <li>{t('studio')} <strong>-3.2%</strong></li>
                                    <li>{t('musicians')} <strong>+6.5%</strong></li>
                                    <li>{t('equipment')} <strong>+2.8%</strong></li>
                                    <li>{t('software')} <strong>-1.4%</strong></li>
                                    <li>{t('producer')} <strong>+4.9%</strong></li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="h-100 text-center shadow">
                            <Card.Body>
                                <Card.Title>
                                    <img
                                        src={DistributionImg}
                                        alt={t('distribution')}
                                        className="mb-3"
                                        style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: '3px' }}
                                    />
                                    {t('distribution')}
                                </Card.Title>
                                <ul className="list-unstyled">
                                    <li>{t('video_production')} <strong>+5.1%</strong></li>
                                    <li>{t('album_art')} <strong>+2.0%</strong></li>
                                    <li>{t('marketing_cost')} <strong>+6.8%</strong></li>
                                    <li>{t('cd_printing')} <strong>-2.3%</strong></li>
                                    <li>{t('licensing_fees')} <strong>+3.7%</strong></li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="h-100 text-center shadow">
                            <Card.Body>
                                <Card.Title>
                                    <img
                                        src={DistributionImg}
                                        alt={t('platforms')}
                                        className="mb-3"
                                        style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: '3px' }}
                                    />
                                    {t('platforms')}
                                </Card.Title>
                                <ul className="list-unstyled">
                                    <li>{t('spotify_payouts')} <strong>-1.1%</strong></li>
                                    <li>{t('live_ticket_prices')} <strong>+9.4%</strong></li>
                                    <li>{t('merch_sales')} <strong>+4.2%</strong></li>
                                    <li>{t('platform_fees')} <strong>+2.5%</strong></li>
                                    <li>{t('indie_revenue')} <strong>+7.3%</strong></li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </Container>
    </div>
);
}

export default Home;

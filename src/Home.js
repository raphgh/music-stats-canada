import { Card } from 'react-bootstrap';
import './App.css';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import GenreLineChart from './GenreLineChart';
import CreationImg from './images/creation.jpg';
import HomeImg from './images/mainimage.png';
import DistributionImg from './images/musicmarketing.jpg';
import AvgStreamsBarChart from './AvgStreamsBarChart';
import Footer from './Footer';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="home-page" style={{ minHeight: '100vh' }}>
      {/* Main Title Section */}
      <section
        className="main-title"
        style={{
          backgroundColor: '#CF4D6F',
          textAlign: 'center',
          padding: '3rem 1rem',
          color: 'white',
        }}
      >
        <h1>{t('main_title')}</h1>
        <p className="lead">{t('slogan')}</p>
      </section>

      {/* Genre Popularity */}
      <Container style={{ marginTop: '4rem' }}>
        <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>📊 Genre Popularity by Age</h4>
        <Row>
          <Col md={8}>
            <GenreLineChart />
          </Col>
          <Col md={4} className="d-flex align-items-center">
            <Card className="text-black shadow-sm w-100" style={{
                backgroundColor:"#ff9a56"
            }}>
              <Card.Body>
                <Card.Title>🎧 Did You Know?</Card.Title>
                <Card.Text>
                  Over <strong>80%</strong> of Canadians now stream music as their main way of listening.
                  <br />
                  <br />
                  The most streamed Canadian artist in 2023? <strong>Drake</strong>.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {/* Industry Cards */}
      <section style={{backgroundColor: "#A2A3BB", padding: "2px"}}>
        <Container style={{ marginTop: '5rem'}}>
            <h4 style={{ textAlign: 'center', marginBottom: '2rem'}}>💼 Music Industry Breakdown</h4>
            <Row className="g-4">
            {[ 
                {
                title: t('creation'),
                image: CreationImg,
                data: [
                    [t('studio'), '-3.2%'],
                    [t('musicians'), '+6.5%'],
                    [t('equipment'), '+2.8%'],
                    [t('software'), '-1.4%'],
                    [t('producer'), '+4.9%'],
                ],
                },
                {
                title: t('distribution'),
                image: DistributionImg,
                data: [
                    [t('video_production'), '+5.1%'],
                    [t('album_art'), '+2.0%'],
                    [t('marketing_cost'), '+6.8%'],
                    [t('cd_printing'), '-2.3%'],
                    [t('licensing_fees'), '+3.7%'],
                ],
                },
                {
                title: t('platforms'),
                image: DistributionImg,
                data: [
                    [t('spotify_payouts'), '-1.1%'],
                    [t('live_ticket_prices'), '+9.4%'],
                    [t('merch_sales'), '+4.2%'],
                    [t('platform_fees'), '+2.5%'],
                    [t('indie_revenue'), '+7.3%'],
                ],
                },
            ].map((card, idx) => (
                <Col md={4} key={idx}>
                <Card className="h-100 text-center shadow">
                    <Card.Body>
                    <Card.Title>
                        <img
                        src={card.image}
                        alt={card.title}
                        className="mb-3"
                        style={{
                            width: '100%',
                            maxHeight: '200px',
                            objectFit: 'cover',
                            borderRadius: '3px',
                        }}
                        />
                        {card.title}
                    </Card.Title>
                    <ul className="list-unstyled">
                        {card.data.map(([label, value], i) => (
                        <li key={i}>
                            {label} <strong>{value}</strong>
                        </li>
                        ))}
                    </ul>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
            <br></br>
            <br></br>
            <br></br>
        </Container>
      </section>

      {/* Streams Section */}
      <Container style={{ marginTop: '5rem' }}>
        <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>🎵 Average Song Streams</h4>
        <Row>
          <Col md={4} className="d-flex align-items-center">
            <Card className="text-black shadow-sm w-100" style={{
                backgroundColor: "#CF4D6F"
            }}>
              <Card.Body>
                <Card.Title>📈 Canadian Listening Trends</Card.Title>
                <Card.Text>
                  Teens (13–17) stream over <strong>25 hours/week</strong>, mostly via TikTok and Spotify.
                  <br />
                  <br />
                  Toronto is Canada’s <strong>music capital</strong>, but Montreal has the most venues per capita!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <AvgStreamsBarChart />
          </Col>
        </Row>
      </Container>

      {/* Quick Fact Banner */}
      <section style={{ backgroundColor: '#ff9a56', padding: '2rem 1rem', marginTop: '4rem' }}>
        <Container>
          <h4 style={{ textAlign: 'center', color: 'white', marginBottom: '1rem' }}>🧠 Quick Fact</h4>
          <p style={{ textAlign: 'center', maxWidth: '700px', color: 'white', margin: '0 auto' }}>
            <strong>1 in 5 Canadians (about 7 million people)</strong> say music is essential to their mental health.
            <br />
            <em>(Source: Music Canada, 2022)</em>
          </p>
        </Container>
      </section>

      {/* Feedback */}
      <section style={{ padding: '2rem 1rem', marginTop: '3rem' }}>
        <Container>
          <h4 style={{ textAlign: 'left', marginBottom: '1rem' }}>💬 Feedback</h4>
          <p style={{ textAlign: 'left', }}>
            What do you want to see on this page? Email <a href="mailto:info@musicstats.ca">info@musicstats.ca</a> to let us know.
          </p>
        </Container>
      </section>
      <br></br>
      <br></br>

      <Footer/>
    </div>
  );
}

export default Home;

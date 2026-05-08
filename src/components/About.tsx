import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  const customStyles = `
    .about-section { background-color: #faf9f6; padding: 120px 0; min-height: 90vh; display: flex; align-items: center; }
    .section-label { font-size: 10px; text-transform: uppercase; letter-spacing: 3px; font-weight: 700; color: #928f85; margin-bottom: 20px; display: block; }
    .bio-text { font-size: 1.25rem; line-height: 1.8; color: #1a1814; font-weight: 300; }
    .accent-serif { font-family: 'serif'; font-style: italic; }
    .edu-card { border-left: 1px solid #1a1814; padding-left: 25px; margin-bottom: 40px; }
    .skill-item { font-size: 0.9rem; color: #5e5b54; margin-bottom: 10px; display: flex; align-items: center; }
    .skill-item::before { content: "—"; margin-right: 10px; color: #e5e1da; }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <section className="about-section">
        <Container>
          <Row className="gy-5 align-items-start">
            
            {/* Left Column: The Big Name/Title */}
            <Col lg={5}>
              <span className="section-label">Identity</span>
              <h1 className="display-2 mb-4" style={{ fontWeight: 300, letterSpacing: '-3px' }}>
                John Ross <br />
                <span className="accent-serif">Bulcio</span>
              </h1>
              <p className="text-muted" style={{ letterSpacing: '1px', fontSize: '0.9rem' }}>
                FUTURE APP DEVELOPER
              </p>
            </Col>

            {/* Right Column: Bio & Details */}
            <Col lg={7}>
              <Row>
                <Col md={10}>
                  <span className="section-label">Biography</span>
                  <p className="bio-text mb-4">
                    Currently pursuing a BSIT at the <span className="fw-normal">University of Baguio</span>, 
                    I focus on bridging the gap between complex technical logic and 
                    seamless user interfaces.
                  </p>
                  <p className="text-muted mb-5" style={{ lineHeight: '1.8' }}>
                    My work is driven by the challenge of turning abstract ideas into 
                    functional, scalable codebases. I specialize in Java, ensuring every project is as efficient as it is intuitive.
                  </p>

                  <Row className="mt-5">
                    {/* Education */}
                    <Col sm={6}>
                      <span className="section-label">Education</span>
                      <div className="edu-card">
                        <div className="fw-bold text-dark">BS in Information Technology</div>
                        <div className="text-muted small">University of Baguio</div>
                        <div className="text-muted small">2025 — Present</div>
                      </div>
                    </Col>

                    {/* Expertise */}
                    <Col sm={6}>
                      <span className="section-label">Expertise</span>
                      <div className="ps-0">
                        <div className="skill-item">Web Development</div>
                        <div className="skill-item">Database (SQL)</div>
                        <div className="skill-item">Java Programming</div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>

          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;

import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="min-vh-50 d-flex align-items-center bg-[#faf9f6] py-5">
      <Container>
        <Row className="align-items-center g-5">
          {/* 1. Left Side: Your Information */}
          <Col lg={7} className="order-2 order-lg-1 text-center text-lg-start">
            <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] italic text-[#1a1814] leading-[1.1] mb-6">
              John Ross Bulcio
            </h1>

            <p className="text-xl md:text-2xl text-[#5e5b54] font-light leading-relaxed mb-10 max-w-2xl">
              Future Website Developer specializing in <span className="text-[#1a1814] font-medium">Java</span> and refined digital experiences. Currently based in Baguio City.
            </p>

            <div className="d-flex flex-wrap gap-4 justify-content-center justify-content-lg-start">
              <Link to="/projects">
                <Button variant="dark" className="rounded-pill px-5 py-3 text-[12px] font-bold tracking-widest uppercase">
                  Projects
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline-dark" className="rounded-pill px-5 py-3 text-[12px] font-bold tracking-widest uppercase">
                  Hire Me
                </Button>
              </Link>
            </div>
          </Col>

          {/* 2. Right Side: The Profile Placeholder */}
          <Col lg={5} className="order-1 order-lg-2 d-flex justify-content-center">
            <div 
              className="bg-[#e5e7eb] rounded-circle d-flex align-items-center justify-content-center shadow-sm border border-white"
              style={{ width: 'clamp(200px, 30vw, 350px)', aspectRatio: '1/1' }}
            >
              {/* Default Avatar SVG */}
              <svg width="60%" height="60%" viewBox="0 0 24 24" fill="#9ca3af" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
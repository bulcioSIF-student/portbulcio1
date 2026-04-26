import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <section className="py-20 bg-[#faf9f6]">
      <Container>
        {/* Header */}
        <div className="mb-16 border-bottom border-dark pb-4">
          <h1 className="font-serif text-5xl italic text-[#1a1814]">John Ross Bulcio</h1>
        </div>

        <Row className="gy-5">
          {/* Main Bio */}
          <Col lg={7}>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#928f85] mb-4">Biography</h3>
            <p className="text-xl text-[#1a1814] leading-relaxed mb-4">
              I am to be a Future Website Developer currently pursuing a BSIT at the University of Baguio.
            </p>
            <p className="text-[#5e5b54] leading-relaxed">
              My work focuses on bridging the gap between complex backend architectures and intuitive user experiences. 
              I specialize in the Java, turning technical specifications into 
              scalable, functional codebases.
            </p>
          </Col>

          {/* Sidebar Info */}
          <Col lg={{ span: 4, offset: 1 }}>
            {/* Education Block */}
            <div className="mb-5">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#928f85] mb-3">Education</h3>
              <div className="border-start border-[#e5e1da] ps-3">
                <p className="font-medium text-[#1a1814] mb-0">BS in Information Technology</p>
                <p className="text-sm text-[#5e5b54]">University of Baguio, 2022 — Present</p>
              </div>
            </div>

            {/* Focus Block */}
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#928f85] mb-3">Core Expertise</h3>
              <ul className="list-unstyled text-sm text-[#5e5b54] space-y-2">
                <li> Web Development (HTML, CSS, JavaScript)</li>
                <li> Frontend Interface Design</li>
                <li> Database Management (SQL)</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
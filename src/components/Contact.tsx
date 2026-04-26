import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', msg: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ type: 'success', msg: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'danger', msg: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'danger', msg: 'Could not connect to the server.' });
    }
  };

  return (
    <section className="py-16 bg-[#faf9f6]">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="mb-12">
              <h1 className="font-serif text-5xl italic text-[#1a1814]">Contact</h1>
            </div>

            <Row className="g-5">
              {/* Contact Info */}
              <Col md={5}>
                <div className="pe-md-5">
                  <p className="text-[#5e5b54] mb-8 leading-relaxed">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-[11px] font-mono uppercase tracking-tighter text-[#928f85] mb-1">Email</h4>
                      <p className="text-[#1a1814] font-medium">your.email@example.com</p>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-mono uppercase tracking-tighter text-[#928f85] mb-1">Location</h4>
                      <p className="text-[#1a1814] font-medium">Baguio City, Philippines</p>
                    </div>
                  </div>
                </div>
              </Col>

              {/* Contact Form */}
              <Col md={7}>
                <div className="bg-white p-8 rounded-2xl border border-[#e5e1da] shadow-sm">
                  {status.msg && <Alert variant={status.type}>{status.msg}</Alert>}
                  
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-4">
                      <Form.Label className="text-[12px] font-medium text-[#5e5b54]">Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="Your Name" 
                        className="rounded-lg border-[#e5e1da] py-2.5 focus:shadow-none"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required 
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="text-[12px] font-medium text-[#5e5b54]">Email</Form.Label>
                      <Form.Control 
                        type="email" 
                        placeholder="email@example.com" 
                        className="rounded-lg border-[#e5e1da] py-2.5 focus:shadow-none"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required 
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="text-[12px] font-medium text-[#5e5b54]">Message</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows={4} 
                        placeholder="Tell me about your project..." 
                        className="rounded-lg border-[#e5e1da] py-2.5 focus:shadow-none"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required 
                      />
                    </Form.Group>

                    <Button variant="dark" type="submit" className="w-100 py-3 rounded-lg font-medium bg-[#1a1814]">
                      Send Message
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
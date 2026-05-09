import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', msg: '' });

  // Use only one definition for API_URL
  const API_URL = 'https://portfolioapi-production-9784.up.railway.app';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: 'info', msg: 'Sending your message...' });

    try {
      // 1. Send to MongoDB Backend
      const dbResponse = await fetch(`${API_URL}/api/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // 2. Send via EmailJS
      const emailResponse = await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
          to_name: "John Ross",
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );

      if (dbResponse.ok && emailResponse.status === 200) {
        setStatus({ type: 'success', msg: 'Success! Message saved and email sent.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        const dbStatus = dbResponse.ok ? "Saved" : `Failed (${dbResponse.status})`;
        setStatus({ type: 'warning', msg: `DB: ${dbStatus} | Email: ${emailResponse.status}` });
      }
    } catch (error: any) {
      console.error('Submission Error:', error);
      setStatus({ type: 'danger', msg: "Network Error: Could not reach the server." });
    }
  };

  const customStyles = `
    .contact-section { background-color: #faf9f6; min-height: 100vh; padding: 100px 0; }
    .contact-card { background: white; border: 1px solid #e5e1da; border-radius: 24px; padding: 3rem; box-shadow: 0 10px 30px rgba(0,0,0,0.02); }
    .minimal-input { border: none; border-bottom: 1px solid #e5e1da; border-radius: 0; padding: 10px 0; background: transparent !important; box-shadow: none !important; transition: border-color 0.3s; }
    .minimal-input:focus { border-bottom: 1px solid #1a1814; }
    .label-caps { font-size: 10px; text-transform: uppercase; letter-spacing: 2px; font-weight: 700; color: #928f85; margin-bottom: 8px; }
    .btn-dark-round { border-radius: 50px; padding: 12px 0; font-weight: 500; letter-spacing: 1px; background-color: #1a1814; border: none; transition: transform 0.2s; color: white; }
    .btn-dark-round:hover { transform: translateY(-2px); background-color: #333; }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <section className="contact-section d-flex align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Row className="gy-5">
                <Col md={5} className="pe-md-5 d-flex flex-column justify-content-center">
                  <h1 className="display-3 mb-4" style={{ fontWeight: 300, letterSpacing: '-2px' }}>
                    Let's <span style={{ fontFamily: 'serif', fontStyle: 'italic' }}>talk.</span>
                  </h1>
                  <p className="text-muted mb-5" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    Have a project in mind? Fill out the form and I'll get back to you in your inbox.
                  </p>
                  <div className="mb-4">
                    <div className="label-caps">Email</div>
                    <a href="mailto:yoruyorusaki@gmail.com" className="text-dark text-decoration-none fs-5">yoruyorusaki@gmail.com</a>
                  </div>
                </Col>

                <Col md={7}>
                  <div className="contact-card">
                    {status.msg && <Alert variant={status.type} className="border-0 rounded-4 shadow-sm">{status.msg}</Alert>}
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-4">
                        <Form.Label className="label-caps">Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          className="minimal-input"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-4">
                        <Form.Label className="label-caps">Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          className="minimal-input"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-5">
                        <Form.Label className="label-caps">Your Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          className="minimal-input"
                          style={{ resize: 'none' }}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          required
                        />
                      </Form.Group>
                      <Button type="submit" className="btn-dark-round w-100">Send Message</Button>
                    </Form>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
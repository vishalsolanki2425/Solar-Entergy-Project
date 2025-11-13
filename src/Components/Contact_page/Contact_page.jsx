import { Container, Form, Button } from "react-bootstrap";
import "./Contact_page.css";

function Contact_page() {
    return (
        <>
            <div className="Contact_page">
                <div className="Contact">
                    <Container>
                        <div className="Contact_content">
                            <h1>Contact</h1>
                        </div>
                    </Container>
                </div>
            </div>

            <Container className="form-container">
                <Form className="contact-form">
                    <Form.Group controlId="formName" className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" required />
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" required />
                    </Form.Group>

                    <Form.Group controlId="formSubject" className="mb-3">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Enter subject" />
                    </Form.Group>

                    <Form.Group controlId="formMessage" className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="Your message..." required />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="submit-btn">
                        Send Message
                    </Button>
                </Form>
            </Container>
        </>
    );
}

export default Contact_page;
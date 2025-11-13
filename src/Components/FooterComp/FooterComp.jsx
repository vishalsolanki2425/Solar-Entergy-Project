import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router';
import logo from '../../Assets/images/logo.png';
import './FooterComp.css';

function FooterComp() {
    return (
        <footer className="footer-section">
            <Container>
                <Row className="footer-content">
                    <Col lg={4} md={6} className="footer-col">
                        <div className="footer-logo">
                            <Link to={"/"}><img src={logo} alt="" /></Link>
                        </div>
                        <p className="footer-about">
                            Providing sustainable energy solutions to power your future with clean, reliable solar technology.
                        </p>
                        <div className="social-icons">
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaLinkedin /></a>
                        </div>
                    </Col>

                    <Col lg={2} md={6} className="footer-col">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/service">Services</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </Col>

                    <Col lg={2} md={6} className="footer-col">
                        <h4>Our Services</h4>
                        <ul className="footer-links">
                            <li><a href="#">Solar Panels</a></li>
                            <li><a href="#">Installation</a></li>
                            <li><a href="#">Maintenance</a></li>
                            <li><a href="#">Consultation</a></li>
                            <li><a href="#">Energy Audit</a></li>
                        </ul>
                    </Col>

                    <Col lg={4} md={6} className="footer-col">
                        <h4>Contact Us</h4>
                        <ul className="footer-contact">
                            <li>
                                <FaMapMarkerAlt className="contact-icon" />
                                <span>123 Solar Street, Energy City, 100001</span>
                            </li>
                            <li>
                                <FaPhone className="contact-icon" />
                                <span>+(234) 9134 446 061</span>
                            </li>
                            <li>
                                <FaEnvelope className="contact-icon" />
                                <span>info@solarsolutions.com</span>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <Row>
                    <Col className="text-center copyright">
                        <p>&copy; {new Date().getFullYear()} SolarSolutions. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default FooterComp;
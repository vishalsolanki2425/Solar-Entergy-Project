import { Button, Container, Row, Col } from "react-bootstrap";
import phone from "../../../assets/images/phone.png";
import energy from "../../../assets/images/energy.jpg";
import "./End_Energy.css";


function End_Energy() {
    return (
        <Container className="energy-container">
            <div className="energy-box">
                <Row className="align-items-center h-100 flex-column-reverse flex-lg-row">
                    <Col lg={8} md={12}>
                        <div className="energy-content">
                            <h2>End Energy Uncertainty: Discover Your <br className="d-none d-md-block" />Tailored Solar Power Solution.</h2>
                            <p>We're here to provide the consistent power you deserve.</p>

                            <div className="btn_contact d-flex flex-column flex-md-row align-items-center justify-content-md-start justify-content-center gap-4">
                                <div className="btn-wrapper text-center text-md-start">
                                    <Button className="interested-btn">I'm Interested</Button>
                                </div>
                                <div className="contact d-flex align-items-center gap-3 justify-content-center">
                                    <div className="contact_icon">
                                        <img src={phone} alt="phone icon" />
                                    </div>
                                    <div className="phone text-white">
                                        <p className="m-0">Phone : +(234) 9134 446 061</p>
                                        <p className="m-0">Phone : +(234) 8098 600 600</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={12} className="mb-4 mb-lg-0">
                        <div className="energy-image">
                            <img src={energy} alt="solar" />
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="energy-bottom-bar"></div>
        </Container>

    );
}

export default End_Energy;
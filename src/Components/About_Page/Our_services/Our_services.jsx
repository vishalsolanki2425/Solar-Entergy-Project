import "./Our_services.css";
import sunimg from "../../../assets/images/sun.svg";
import { Container, Row, Col } from 'react-bootstrap';
import Cardimg1 from "../../../assets/images/service-card1.png";
import Cardimg2 from "../../../assets/images/service-card2.png";
import Cardimg3 from "../../../assets/images/service-card3.png";
import Cardimg4 from "../../../assets/images/service-card4.png";
import Cardimg5 from "../../../assets/images/service-card5.png";

function Our_services() {
    return (
        <>
            <Container className="my-5">
                <div className="our_services">
                    <div className="mb-5">
                        <div className="d-flex align-items-center gap-3 mb-3">
                            <img src={sunimg} alt="Sun icon" />
                            <h5 className="mb-0 text-uppercase">Our services</h5>
                        </div>
                        <h2 className='mb-3 mt-5'>
                            The <span>Scope</span> of Our Renewable<br /> Energy Solutions
                        </h2>
                        <p className="fs-5">
                            We offer a range of services to help you take advantage of renewable energy<br />
                            and reduce your carbon footprint.
                        </p>
                    </div>

                    <Row className="g-4">
                        <Col md={4} sm={12}>
                            <div className="service-card">
                                <img src={Cardimg1} alt="Residential" className="img-fluid rounded shadow" />
                                <h5 className="service-title">Residential</h5>
                            </div>
                        </Col>
                        <Col md={4} sm={12}>
                            <div className="service-card">
                                <img src={Cardimg2} alt="Commercial" className="img-fluid rounded shadow" />
                                <h5 className="service-title">Commercial</h5>
                            </div>
                        </Col>
                        <Col md={4} sm={12}>
                            <div className="service-card">
                                <img src={Cardimg3} alt="Mini Grids" className="img-fluid rounded shadow" />
                                <h5 className="service-title">Mini Grids</h5>
                            </div>
                        </Col>
                        <Col md={6} sm={12}>
                            <div className="service-card mt-5">
                                <img src={Cardimg4} alt="Governments" className="img-fluid rounded shadow" />
                                <h5 className="service-title">Governments</h5>
                            </div>
                        </Col>
                        <Col md={6} sm={12}>
                            <div className="service-card mt-5">
                                <img src={Cardimg5} alt="Industrial" className="img-fluid rounded shadow" />
                                <h5 className="service-title">Industrial</h5>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
}

export default Our_services;

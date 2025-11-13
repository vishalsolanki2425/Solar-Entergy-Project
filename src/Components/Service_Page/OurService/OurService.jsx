import React from "react";
import './OurServices.css'
import { Col, Container, Row } from "react-bootstrap";

const OurService = () => {
    return (
        <>
            <Container className="my-5 bg-tras" >
                <div className="our_services">
                    <div className="mb-5">
                        <div className="d-flex align-items-center gap-3 mb-3">
                            {/* <img src={sunimg} alt="Sun icon" /> */}
                            <p className="mb-0 text-uppercase ourservice-title">Our services</p>
                        </div>
                        <h2 className='mb-5 mt-5' style={{ color: '#17223a' }}>
                            The <span>Services</span> We Provide At <br /> Ecity
                        </h2>
                        <p className="fs-5">
                            At Ecity, we provide renewable energy solutions tailored to meet your needs. <br />Our capacities range from <strong>3kW to 1Megawatt systems.</strong>
                        </p>
                    </div>

                    <Row className="g-4">
                        <Col md={4} sm={12}>
                            <div className="ourService-card row align-items-center">
                                <div className="col-3">    <img src="https://res.cloudinary.com/dtpusgqwv/image/upload/v1737993992/residentialServices_u72tux.svg" alt="" /></div>
                                <div className="col-9">
                                    <h3>Solar Hybrid solutions (Residential)</h3>
                                    <h5>5kw to 100kw</h5>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={12}>
                            <div className="ourService-card row align-items-center">
                                <div className="col-3">    <img src="https://res.cloudinary.com/dtpusgqwv/image/upload/v1737993971/batteryServices_kxrjqb.svg" alt="" /></div>
                                <div className="col-9">
                                    <h3>Lithium Batteries, Storage Systems</h3>
                                    <h5>Capacity varies based on solution</h5>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={12}>
                            <div className="ourService-card row align-items-center">
                                <div className="col-3">    <img src="https://res.cloudinary.com/dtpusgqwv/image/upload/v1737993985/managementServices_lbifzx.svg" alt="" /></div>
                                <div className="col-9">
                                    <h3>Energy Management Solutions</h3>
                                    <h5>Custom solutions</h5>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} sm={12}>
                            <div className="ourService-card row align-items-center">
                                <div className="col-3">    <img src="https://res.cloudinary.com/dtpusgqwv/image/upload/v1737993972/commercialServices_fddsn9.svg" alt="" /></div>
                                <div className="col-9">
                                    <h3>Commercial & Industrial Solar Hybrid Systems</h3>
                                    <h5>50kw to 1 megawatt</h5>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} sm={12}>
                            <div className="ourService-card row align-items-center">
                                <div className="col-3">    <img src="https://res.cloudinary.com/dtpusgqwv/image/upload/v1737993986/minigridServices_zmtr2n.svg" alt="" /></div>
                                <div className="col-9">
                                    <h3>Mini Grid Solutions</h3>
                                    <h5>100kw to 1 megawatt</h5>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default OurService;
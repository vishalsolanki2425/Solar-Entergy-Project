import { Container, Row, Col } from 'react-bootstrap';
import "../Banner/Banner.css";
import sunimg from "../../../assets/images/sun.svg";
import whyimg from "../../../assets/images/whyImage.png";
import historyimage from "../../../assets/images/historyimage.png";
import Banner_card from './Banner_card';
import { FaBinoculars } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";
import { BsShieldCheck } from 'react-icons/bs';
import { useState } from 'react';

function Banner() {
    const [data] = useState([
        {
            title: "Vision",
            image: <FaBinoculars />,
            description: "To develop innovations in the development of renewable energy."
        },
        {
            title: "Mission",
            image: <GiStairsGoal />,
            description: "To provide intelligent energy solutions with simplicity."
        },
        {
            title: "Core Values",
            image: <BsShieldCheck />,
            description: "Driven by sustainability, integrity, and innovation."
        },
    ]);

    return (
        <>
            <div className="about-banner">
                <div className="about-us-box">
                    <Container>
                        <div className="banner_content">
                            <h1>ABOUT US</h1>
                        </div>
                    </Container>
                </div>
            </div>

            <div className="about-us py-5">
                <Container>
                    <div className="row align-items-center mt-5 mb-5">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <div className="d-flex align-items-center gap-3 mb-3">
                                <img src={sunimg} alt="Sun icon" />
                                <h5 className='mb-0 text-uppercase fw-bold'>Who We Are</h5>
                            </div>
                            <h2 className="fw-bold">The Why!</h2>
                            <p className='about_p_text'>
                                As one of Nigeria's leading companies in clean energy supply, we provide cutting-edge, renewable, smart energy technology and solutions to bridge Nigeria's current energy deficit regardless of size or location.
                                We recognise the growing demand for energy and have proffered quality and suitable solutions to meet them. We deploy standby, on and off-grid solutions using renewable energy sources focused on solar and energy efficiency management systems.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="text-end">
                                <img src={whyimg} alt="Why Us" className="img-fluid rounded" />
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center mt-5 mb-5">
                        <div className="col-md-6">
                            <div className="text-start">
                                <img src={historyimage} alt="Why Us" className="img-fluid rounded" />
                            </div>
                        </div>
                        <div className="col-md-6 mb-4 mb-md-0">
                            <div className="d-flex align-items-center gap-3 mb-3">
                                <img src={sunimg} alt="Sun icon" />
                                <h5 className='mb-0 text-uppercase fw-bold'>Our history</h5>
                            </div>
                            <h2 className="fw-bold">Since 2011 till date...</h2>
                            <p className='history_p_text'>
                                Electric City Energy Limited, established in 2011 in Abuja, Nigeria, is an indigenous firm specializing in renewable energy solutions with over 5MW of assets deployed to date. As system integrators, we offer end-to-end services from design to maintenance, leveraging cutting-edge technology.Our mission is to address Nigeria's energy gap with innovative, data-driven solutions tailored to client needs. We provide on-and-off-grid solar photovoltaic solutions, energy storage, and efficient management systems for residential and commercial clients.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>

            <div className='card-section py-5'>
                <Container>
                    <Row className="g-4">
                        {data.map((item, index) => (
                            <Col key={index} md={6} lg={4}>
                                <Banner_card
                                    title={item.title}
                                    image={item.image}
                                    description={item.description}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Banner;

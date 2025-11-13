import "./Our_history.css"
import { Container } from 'react-bootstrap';
import sunimg from "../../../assets/images/sun.svg";
import historyimage from "../../../assets/images/historyimage.png";


function Our_history() {
    return (
        <>
            <div className="Our_history py-5">
                <Container>
                    <div className="row align-items-center mt-5 mb-5">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <div className="d-flex align-items-center gap-3 mb-3">
                                <img src={sunimg} alt="Sun icon" />
                                <h5 className='mb-0 text-uppercase fw-bold'>Our history</h5>
                            </div>
                            <h2 className="fw-bold">Since 2011 till date...</h2>
                            <p className='history_p_text'>
                                Electric City Energy Limited, established in 2011 in Abuja, Nigeria, is an indigenous firm specializing in renewable energy solutions with over 5MW of assets deployed to date. As system integrators, we offer end-to-end services from design to maintenance, leveraging cutting-edge technology.Our mission is to address Nigeria's energy gap with innovative, data-driven solutions tailored to client needs. We provide on-and-off-grid solar photovoltaic solutions, energy storage, and efficient management systems for residential and commercial clients. We also develop decentralized solar mini-grid systems in rural and peri-urban settlements across Nigeria to drive sustainable electricity provision for all.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="text-end">
                                <img src={historyimage} alt="Why Us" className="img-fluid rounded" />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Our_history;
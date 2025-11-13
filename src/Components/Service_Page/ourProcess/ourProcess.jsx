import React from "react";
import './ourProcess.css'
import OurFeatuer from "./ourFeatuer";
const OurProcess = () => {
    return (
        <>
            <div className="ourProcess">
                <div className="container">
                    <div className="ourProcess-heading">
                        <h1>Our Process</h1>
                        <p>Our simple 4 step process to getting you off the grid!</p>
                    </div>
                    <div className="ourProcess-cards row mt-5">
                        <div className="col-12 col-md-6 col-lg-3 d-flex">
                            <div className="ourProcess-card h-100 w-100">
                                <h5>01</h5>
                                <h3>Request Quote</h3>
                                <p>We listen and offer expert solution for your energy requirements with a cost that fits your budget.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 d-flex">
                            <div className="ourProcess-card h-100 w-100">
                                <h5>02</h5>
                                <h3>Audit & Customization</h3>
                                <p>Our technical team of experts will design and build a system that meets your energy needs.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 d-flex">
                            <div className="ourProcess-card h-100 w-100">
                                <h5>03</h5>
                                <h3>Payment & Setup</h3>
                                <p>With everything set and payment made, our trained installers will handle the rest (install your system and turn it on!)</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 d-flex">
                            <div className="ourProcess-card h-100 w-100">
                                <h5>04</h5>
                                <h3>Relax While We Maintain</h3>
                                <p>All that's left is for you to sit back and enjoy your power independence while we carry out timely routine maintenance</p>
                            </div>
                        </div>
                    </div>

                    <div className="ourProcess-heading mt-15">
                        <h1>Why Choose Ecity?</h1>
                        <p>Here are some of the advantages you benefit when you choose Ecity's services:</p>
                    </div>
                    <div className="col-12 row mt-5">
                        <div className="col-6 mt-3"><OurFeatuer image="https://res.cloudinary.com/dtpusgqwv/image/upload/v1737993967/affordable_nkyux8.svg" desc="24-hrs uninterrupted power supply" /></div>
                        <div className="col-6 mt-3"><OurFeatuer image="https://res.cloudinary.com/dtpusgqwv/image/upload/v1737993981/fumes_kjzxau.svg" desc="No fume, no smoke" /></div>
                        <div className="col-6 mt-3"><OurFeatuer image="https://res.cloudinary.com/dtpusgqwv/image/upload/v1737993971/clean_ehcmj1.svg " desc="Clean energy and greener lives" /></div>
                        <div className="col-6 mt-3"><OurFeatuer image="https://res.cloudinary.com/dtpusgqwv/image/upload/v1737993989/pump_u9sjtn.svg" desc="No need to buy fuel" /></div>
                        <div className="col-6 mt-3"><OurFeatuer image="https://res.cloudinary.com/dtpusgqwv/image/upload/v1737993967/affordable_nkyux8.svg" desc="Affordable power solutions" /></div>
                        <div className="col-6 mt-3"><OurFeatuer image="https://res.cloudinary.com/dtpusgqwv/image/upload/v1737993979/engr_qhrt1j.svg" desc="Experienced engineers to give top quality services" /></div>
                        <div className="col-6 mt-3"><OurFeatuer image="https://res.cloudinary.com/dtpusgqwv/image/upload/v1737993998/support_drq7sn.svg" desc="Superior after sales services" /></div>
                        <div className="col-6 mt-3"><OurFeatuer image="https://res.cloudinary.com/dtpusgqwv/image/upload/v1737993984/maintain_chfh9e.svg" desc="No need for continuous services and maintenance." /></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OurProcess;
import React from "react";
import "./ourFeatuer.css"
const OurFeatuer = ({ image, desc }) => {
    return (
        <>
            <div className="our-featuers">
                <div className="d-flex align-items-center ">
                    <img src={image} alt="" className="img-fluid" style={{ width: '60px', height: '60px' }} />
                    <h4 className="ps-3" style={{ color: 'var(--secondary-color)' }}>{desc}</h4>
                </div>
            </div>
        </>
    )
}
export default OurFeatuer;
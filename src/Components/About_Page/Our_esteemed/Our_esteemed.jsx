import "../Our_esteemed/Our_esteemed.css";
import { Container } from "react-bootstrap";
import Esteemed1 from "../../../assets/images/Esteemed1.png"
import Esteemed2 from "../../../assets/images/Esteemed2.png"
import Esteemed3 from "../../../assets/images/Esteemed3.png"
import Esteemed4 from "../../../assets/images/Esteemed4.png"
import Esteemed5 from "../../../assets/images/Esteemed5.png"
import Esteemed6 from "../../../assets/images/Esteemed6.png"
import Esteemed7 from "../../../assets/images/Esteemed7.png"
import Esteemed8 from "../../../assets/images/Esteemed8.png"
import Esteemed9 from "../../../assets/images/Esteemed9.png"
import Esteemed10 from "../../../assets/images/Esteemed10.png"
import Esteemed11 from "../../../assets/images/Esteemed11.png"
import Esteemed12 from "../../../assets/images/Esteemed12.png"
import Esteemed14 from "../../../assets/images/Esteemed14.png"
import Esteemed15 from "../../../assets/images/Esteemed15.png"
import Esteemed16 from "../../../assets/images/Esteemed16.png"
import Esteemed17 from "../../../assets/images/Esteemed17.png"
import Esteemed18 from "../../../assets/images/Esteemed18.png"
import Esteemed19 from "../../../assets/images/Esteemed19.png"
import Esteemed20 from "../../../assets/images/Esteemed20.png"

const logos = [
    Esteemed1, Esteemed2, Esteemed3, Esteemed4, Esteemed5, Esteemed6, Esteemed7,
    Esteemed8, Esteemed9, Esteemed10, Esteemed11, Esteemed12,
    Esteemed14, Esteemed15, Esteemed16, Esteemed17, Esteemed18, Esteemed19, Esteemed20
];

function Our_esteemed() {
    return (
        <Container>
            <div className="Our_esteemed">
                <h1>
                    Our <span>Esteemed Clients and Partners</span><br />
                    through the Years.
                </h1>

                <div className="logo-slider">
                    <div className="logo-track">
                        {[...logos, ...logos].map((logo, index) => (
                            <div className="logo-item" key={index}>
                                <img src={logo} alt={`Esteemed ${index}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Our_esteemed;
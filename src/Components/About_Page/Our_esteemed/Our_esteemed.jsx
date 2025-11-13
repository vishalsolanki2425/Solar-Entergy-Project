import "../Our_esteemed/Our_esteemed.css";
import { Container } from "react-bootstrap";
import Esteemed1 from "../../../Assets/images/Esteemed1.png"
import Esteemed2 from "../../../Assets/images/Esteemed2.png"
import Esteemed3 from "../../../Assets/images/Esteemed3.png"
import Esteemed4 from "../../../Assets/images/Esteemed4.png"
import Esteemed5 from "../../../Assets/images/Esteemed5.png"
import Esteemed6 from "../../../Assets/images/Esteemed6.png"
import Esteemed7 from "../../../Assets/images/Esteemed7.png"
import Esteemed8 from "../../../Assets/images/Esteemed8.png"
import Esteemed9 from "../../../Assets/images/Esteemed9.png"
import Esteemed10 from "../../../Assets/images/Esteemed10.png"
import Esteemed11 from "../../../Assets/images/Esteemed11.png"
import Esteemed12 from "../../../Assets/images/Esteemed12.png"
import Esteemed14 from "../../../Assets/images/Esteemed14.png"
import Esteemed15 from "../../../Assets/images/Esteemed15.png"
import Esteemed16 from "../../../Assets/images/Esteemed16.png"
import Esteemed17 from "../../../Assets/images/Esteemed17.png"
import Esteemed18 from "../../../Assets/images/Esteemed18.png"
import Esteemed19 from "../../../Assets/images/Esteemed19.png"
import Esteemed20 from "../../../Assets/images/Esteemed20.png"

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
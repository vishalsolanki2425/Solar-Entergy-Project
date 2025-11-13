import { useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Our_clients.css";

const clients = [
    {
        rating: 5,
        text: `Was processing a thought today about what it might cost me to go off-grid, with this tarrif increase wahala, and I thought about EcityEnergy, my current alternative energy SP to handle my installations. Early this year when power was erratic, my battery water levels were super low, just months after a refill.... I called a representative of EcityEnergy to complain, and he confirmed that the erratic power supply was causing my inverter to even more, so the water level was getting used up. To my surprise, he said alot of EcityEnergy clients had complained too, and they were going to handle it. EcityEnergy bore 100% of a refill, as they had decided to for all clients. It was middle of the month then and it was a mega relief for me that they did that. My friend was also offered a great repayment plan for his installation.`,
        name: "Mr Kolo",
        title: "Ecity Client",
    },
    {
        rating: 5,
        text: `Was processing a thought today about what it might cost me to go off-grid, with this tarrif increase wahala, and I thought about EcityEnergy, my current alternative energy SP to handle my installations. Early this year when power was erratic, my battery water levels were super low, just months after a refill.... I called a representative of EcityEnergy to complain, and he confirmed that the erratic power supply was causing my inverter to even more, so the water level was getting used up. To my surprise, he said alot of EcityEnergy clients had complained too, and they were going to handle it. EcityEnergy bore 100% of a refill, as they had decided to for all clients. It was middle of the month then and it was a mega relief for me that they did that. My friend was also offered a great repayment plan for his installation.`,
        name: "Mrs Sumbo",
        title: "Ecity Client",
    },
    {
        rating: 4,
        text: `Electric Energy. First interaction was to get an idea for idea of the capacity of inverter I would require. The discussion went further to them, sending me a quote and offering to come look at the location even though I had not committed to getting one yet. The advice, knowledge, and commitment displayed was impressive. I made a part cash commitment pending when I would be able to full value. Without hesitation, solar panels were deployed and installed, i was thinking the rest (batteries and inverters) would be deployed on full payment, but they were brought in and installed immediately. The whole house was powered. The installers from the company were very professional and dedicated. Everyone who has seen the unit always commends them on their knowledge and neat installation. The units used (solar panels, inverters , batteries and other accessories ) were top of the line. They are still in touch with me on how to optimally enjoy the unit. Thank you, Electric City Energy.`,
        name: "Mrs Sumbo",
        title: "Ecity Client",
    },
    {
        rating: 5,
        text: `I'm really grateful it was EcityEnergy that did my installation. Clean and neat. A friend of mine who's an engineer who also carries out installation saw it and was like who did this neat installation. Before I installed my inverter, the idea I had was that, inverters are expensive and there's no guarantee. When I met EcityEnergy, I got a tailored quotation that met my needs. They came at the time they scheduled, and the installation was neatly done. It's been months now, no complaints. All my fears about installing inverter are gone. I have already recommended EcityEnergy to my neighbors and colleagues. They are the best so far that I've known.`,
        name: "Mr Nazir",
        title: "Ecity Client",
    },
    {
        rating: 5,
        text: `I want to say a big thank you to Electric city for making life easier with their power solution. They delivered top notch service and all of that with ease of payment. Electric city has put a smile on my mum's face and I didn't have to break the bank, that's an awesome combo. The after sales service is both proactive and very responsive, all with the customer's satisfaction at heart. I would happily do business with them any day. Absolutely no regrets using their service and would recommend them in a heartbeat.`,
        name: "Mr Zugwai",
        title: "Ecity Client",
    },
];

function OurClients() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? clients.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex === clients.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <Container className="clients-wrapper">
            <h1 className="clients-heading">
                <span className="highlight-underline">What</span> Our Clients Say
            </h1>

            <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                controls={false}
                indicators={true}
                interval={3000}
                pause={false}
            >
                {clients.map((item, idx) => (
                    <Carousel.Item key={idx}>
                        <div className="clients-card">
                            <div className="stars">
                                {Array.from({ length: item.rating }).map((_, i) => (
                                    <span key={i}><FaStar /></span>
                                ))}
                            </div>
                            <p className="clients-text">“{item.text}”</p>
                            <hr />
                            <div className="client-data d-flex justify-content-between align-items-center">
                                <div className="clients-detail">
                                    <p className="client-name">{item.name}</p>
                                    <p className="client-title">{item.title}</p>
                                </div>
                                <div className="custom-nav-buttons">
                                    <button onClick={prevSlide}><FaChevronLeft /></button>
                                    <button onClick={nextSlide}><FaChevronRight /></button>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>

            <div className="clients-controls">
                <div className="carousel-dots">
                    <div className="carousel-indicators-wrapper">
                        {clients.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                className={`dot ${i === index ? "active" : ""}`}
                                onClick={() => setIndex(i)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default OurClients;
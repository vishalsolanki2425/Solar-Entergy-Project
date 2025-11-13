import "./HomeWhyChoose.css";
import { FaSolarPanel, FaLeaf, FaUsersCog, FaTools, FaShieldAlt, FaHandshake } from "react-icons/fa";

const HomeWhyChoose = () => {
    const features = [
        {
            icon: <FaSolarPanel />,
            title: "Advanced Technology",
            description: "We use the latest solar technology to ensure maximum efficiency and durability for your energy needs.",
            color: "var(--solar-orange)"
        },
        {
            icon: <FaLeaf />,
            title: "Eco-Friendly",
            description: "Reduce your carbon footprint and contribute to a cleaner, greener planet with renewable energy.",
            color: "var(--eco-green)"
        },
        {
            icon: <FaUsersCog />,
            title: "Expert Team",
            description: "Our skilled professionals ensure the best solar installation experience with years of expertise.",
            color: "var(--sky-blue)"
        },
        {
            icon: <FaTools />,
            title: "Maintenance Support",
            description: "We provide ongoing maintenance and system monitoring for optimal performance and longevity.",
            color: "var(--solar-yellow)"
        },
        {
            icon: <FaShieldAlt />,
            title: "Quality Assurance",
            description: "All our installations come with comprehensive warranties and quality guarantees.",
            color: "var(--sun-red)"
        },
        {
            icon: <FaHandshake />,
            title: "Customer First",
            description: "Your satisfaction is our priority. We provide personalized solutions and excellent support.",
            color: "var(--dark-blue)"
        }
    ];

    return (
        <section className="home-why-choose">
            <div className="container">
                <div className="why-choose-header">
                    <span className="section-subtitle">Why Choose Us</span>
                    <h2 className="section-title">Reasons to Switch to Solar</h2>
                    <p className="section-description">
                        Discover why thousands of homeowners and businesses trust us for their solar energy solutions.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon-wrapper">
                                <div 
                                    className="feature-icon" 
                                    style={{ background: feature.color }}
                                >
                                    {feature.icon}
                                </div>
                                <div className="icon-bg" style={{ borderColor: feature.color }}></div>
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeWhyChoose;
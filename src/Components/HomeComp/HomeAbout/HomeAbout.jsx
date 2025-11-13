import "./HomeAbout.css";
import aboutImg from "../../../assets/images/banner_image.jpg";

const HomeAbout = () => {
    return (
        <section className="home-about">
            <div className="container">
                <div className="about-wrapper">
                    <div className="about-image-section">
                        <img src={aboutImg} alt="About Solar Energy" className="about-image" />
                        <div className="image-overlay"></div>
                    </div>
                    <div className="about-content">
                        <span className="section-subtitle">About Us</span>
                        <h2 className="section-title">Empowering a Greener Tomorrow</h2>
                        <p className="about-description">
                            At Solar Energy, we are dedicated to providing innovative and sustainable solar
                            solutions to help homes and businesses harness the power of the sun.
                            Our mission is to make renewable energy accessible, affordable, and reliable for everyone.
                        </p>
                        <div className="about-features">
                            <div className="feature-item">
                                <div className="feature-icon" style={{background: 'var(--solar-orange)'}}>☀️</div>
                                <span>Solar Expertise</span>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon" style={{background: 'var(--eco-green)'}}>🌱</div>
                                <span>Eco-Friendly</span>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon" style={{background: 'var(--sky-blue)'}}>⚡</div>
                                <span>Energy Efficient</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAbout;
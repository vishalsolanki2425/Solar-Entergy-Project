import "./HomeBanner.css"

const HomeBanner = () => {
    return (
        <>
            <div className="home-banner">
                <div className="solar-glow"></div>
                <div className="container">
                    <div className="banner-content">
                        <span className="banner-subtitle">Powering Your Future</span>
                        <div className="banner-title">
                            <h1>Bright</h1>
                            <span className="highlight-text">Sustainable</span>
                            <h1>Energy</h1>
                        </div>
                        <p className="banner-description">
                            Harness the power of the sun with our cutting-edge solar solutions.
                            Sustainable, efficient, and affordable energy for your home and business.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBanner;
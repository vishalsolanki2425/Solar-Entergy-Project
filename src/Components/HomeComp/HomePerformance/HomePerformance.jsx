import HomeTitle from "../HomeTitle";
import "./HomePerformance.css";
import founder from "../../../Assets/images/founder.jpg";
import rating from "../../../Assets/images/rating-img.jpg";
import { useEffect } from "react";

const HomePerf = () => {
  useEffect(() => {
    const circles = document.querySelectorAll(".circle");
    circles.forEach((circle) => {
      const value = circle.style.getPropertyValue("--value");
      circle.style.setProperty("--value", 0);
      setTimeout(() => {
        circle.style.setProperty("--value", value);
      }, 200);
    });
  }, []);

  return (
    <section className="home-performance">
      <div className="performance-overlay"></div>
      <div className="container">
        <div className="performance-wrapper">
          <div className="performance-content">
            <HomeTitle 
              title={"Our Performance"} 
              heading={"Solar Powering Your Sustainable Scene"}
              light={true}
            />
            
            <div className="performance-grid">
              <div className="founder-section">
                <div className="founder-profile">
                  <img src={founder} alt="Founder" />
                  <div className="founder-info">
                    <h4>Roberto Lewis</h4>
                    <span>CEO & Founder</span>
                  </div>
                </div>
              </div>

              <div className="stats-section">
                <div className="testimonial">
                  <p className="testimonial-text">
                    "Solar Powering Your Sustainable Scene is a vibrant and compelling phrase that conveys 
                    the idea of integrating solar energy into a cleaner, greener future."
                  </p>
                  
                  <div className="stats-grid">
                    <div className="stat-item">
                      <div className="circle" style={{ "--value": 89 }}>
                        <span>89%</span>
                      </div>
                      <div className="stat-label">Success Rate</div>
                    </div>

                    <div className="stat-item">
                      <div className="circle" style={{ "--value": 72 }}>
                        <span>72%</span>
                      </div>
                      <div className="stat-label">Energy Savings</div>
                    </div>
                    
                    <div className="stat-item">
                      <div className="circle" style={{ "--value": 95 }}>
                        <span>95%</span>
                      </div>
                      <div className="stat-label">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="performance-image">
            <img src={rating} alt="Solar Panel Work" />
            <div className="image-badge">
              <span>25+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePerf;
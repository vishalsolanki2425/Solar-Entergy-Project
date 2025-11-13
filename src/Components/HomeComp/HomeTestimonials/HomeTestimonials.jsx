import "./HomeTestimonials.css";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Rakesh Mehta",
    feedback: "Excellent service and professional team. My electricity bill is now 60% less!",
    rating: 5,
    location: "Mumbai"
  },
  {
    id: 2,
    name: "Neha Patel",
    feedback: "They guided us through every step. Highly recommend for solar installation.",
    rating: 4,
    location: "Delhi"
  },
  {
    id: 3,
    name: "Vikram Shah",
    feedback: "Great value for money and excellent after-sales support!",
    rating: 5,
    location: "Bangalore"
  },
];

const HomeTestimonials = () => {
  return (
    <section className="home-testimonials">
      <div className="container">
        <div className="testimonials-header">
          <span className="section-subtitle">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-description">
            Don't just take our word for it. Here's what our satisfied customers have to say about their solar journey.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="card-header">
                <div className="client-info">
                  <div className="client-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="client-details">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
                <div className="rating">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar
                      key={index}
                      className={`star ${index < testimonial.rating ? 'filled' : ''}`}
                    />
                  ))}
                </div>
              </div>
              <p className="testimonial-text">"{testimonial.feedback}"</p>
              <div className="card-footer">
                <div className="verified-badge">
                  <span>✓ Verified Customer</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
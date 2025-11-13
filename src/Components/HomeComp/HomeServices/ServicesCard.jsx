import "./ServicesCard.css"

const ServiceCard = ({ icon, heading, desc, color = "var(--solar-orange)" }) => {
    return(
        <div className="service-card" style={{'--card-color': color}}>
            <div className="card-icon-wrapper">
                <div className="card-icon" style={{background: color}}>
                    {icon}
                </div>
            </div>
            <h3 className="card-heading">{heading}</h3>
            <p className="card-desc">{desc}</p>
            <div className="card-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    )
}

export default ServiceCard;
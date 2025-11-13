import React from "react";
import { useNavigate } from "react-router";
import "./Not_found.css";

const Not_found = () => {
    const navigate = useNavigate();

    return (
        <div className="notfound-container">
            <div className="overlay">
                <div className="error-content">
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                    <p>Sorry, the page you're looking for doesn't exist or has been moved.</p>
                    <button onClick={() => navigate("/")}>
                        <span>Back to Homepage</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Not_found;
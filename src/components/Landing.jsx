import React from 'react';
import {Link} from "react-router-dom"
const Landing = () => {
    return (
        <div className="landing-page">
        <div className="row">
        <h1 className="landing-title">
            Awarded Canada's Best Online Library
        </h1>
        <h2 className="landing-description">
            Find your favourite online books here
        </h2>
        <button className="landing-button">
        <Link key={1} to="/books" className="landing-button-link">Browse Books</Link>
        </button>
        </div>
        </div>
    );
}

export default Landing;

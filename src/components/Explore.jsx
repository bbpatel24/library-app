import React from "react";
import { Link } from "react-router-dom";
const Explore = () => {
  return (
    <div>
      <div className="row">
        <div className="explore-container">
          <h1 className="explore-heading">Bhavya Explore more Books</h1>
          <button className="explore-button">
            <Link to="/books" className="explore-button-link">Explore</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore;

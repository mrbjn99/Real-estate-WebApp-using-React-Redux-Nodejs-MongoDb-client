import React from "react";
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className="header">
      <div className="intro">
        <p>Looking for a Property !</p>
        <h1>
          <span>Everyone Deserves</span> the<span> Opportunity</span> of
          <span> Home</span>
        </h1>
        <p className="details">
          Provides a more general overview of real estate in Da Nang. Make it
          possible for everyone to invest safely and smartly.
        </p>
        <Link to="/PostList" className="header-btn">
          Details
        </Link>
      </div>
    </div>
  );
}

export default Header;

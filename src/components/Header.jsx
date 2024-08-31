import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center p-3 bg-light">
        <div className="h3 mb-0">
          HMC
        </div>
        <div className="d-flex gap-3">
          <Link to="/" className="text-dark text-decoration-none">Home</Link>
          <Link to="/login" className="text-dark text-decoration-none">Login</Link>
        </div>
      </div>
    </>
  );
}

export default Header;

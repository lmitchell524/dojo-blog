import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        
        <Link to="/">Home</Link>
        {/* camelcase css attributes b/c dashes look like minus signs and we are in a JS file */}
        <Link to="/create" style={{
          color: "white",
          backgroundColor: "#f1356d",
          borderRadius: "8px"
        }}>New Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar;
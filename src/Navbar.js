import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        {/* camelcase css attributes b/c dashes look like minus signs and we are in a JS file */}
        <a href="/create" style={{
          color: "white",
          backgroundColor: "#f1356d",
          borderRadius: "8px"
        }}>New Blog</a>
      </div>
    </nav>
  );
}

export default Navbar;
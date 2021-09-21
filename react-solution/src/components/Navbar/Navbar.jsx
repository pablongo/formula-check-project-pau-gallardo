import React from 'react';

import './Navbar.css';

export default function Navbar() {
  return (
    <nav data-testid="navbar" className="navbar">
      <a href="/">
        <img
          className="navbar__logo"
          src="https://www.netrivals.com/wp-content/uploads/2020/11/logo-negatiu-1024x247.png"
          alt="netrivals-logo"
        />
      </a>
      <a href="/">My Products</a>
      <a href="/">Prices formulas</a>
      <hr />
      <a href="/">Market position</a>
      <a href="/">Settings</a>
    </nav>
  );
}

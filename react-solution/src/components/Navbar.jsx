import React from 'react';

import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="/">
        <img src="https://www.netrivals.com/wp-content/uploads/2020/11/logo-positiu-1-1.png" alt="netrivals-logo" />
      </a>
      <a href="/">My Products</a>
      <a href="/">Prices formulas</a>
      <a href="/">Market position</a>
      <a href="/">Settings</a>
    </nav>
  );
}

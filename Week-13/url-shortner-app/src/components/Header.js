import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">URL Shortener</a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">Contact</a>
          </li>
         
        </ul>
      </div>
    </nav>
  );
};

export default Header;

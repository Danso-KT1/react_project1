import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './layout.css';

const Layout1 = () => {
  return (
    <>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/Homepage">Home</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li>
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
              <Link to="/search" className="search-button">
                Search
              </Link>
            </div>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout1;


import React from 'react';
import { Link } from 'react-router-dom'


const Navbar = () => (
  <header className="navbar">
    <Link to="/info">
      <h2 className="c-name">
        Info
      </h2>
    </Link>

    <Link to="/result">
      <h2 className="c-name">
        Result
      </h2>
    </Link>

    <Link to="/setting">
      <h2 className="c-name">
        Setting
      </h2>
    </Link>
  </header>
)

export default Navbar;

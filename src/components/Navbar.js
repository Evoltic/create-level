import React from 'react';
import { Link } from 'react-router-dom'


const Navbar = () => (
  <header className="navbar">

    <h2 className="c-project-name">
      Level Creator
    </h2>

    <a
      href="https://github.com/Evoltic/create-level#create-simple-game-levels"
      target="_blank"
    >
      <h2 className="c-name">
        Info
      </h2>
    </a>


    <Link to={process.env.PUBLIC_URL + "/result"}>
      <h2 className="c-name">
        Result
      </h2>
    </Link>

    <Link to={process.env.PUBLIC_URL + "/setting"}>
      <h2 className="c-name">
        Setting
      </h2>
    </Link>
  </header>
)

export default Navbar;

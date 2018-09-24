import React from 'react';
import { Link } from "react-router-dom";

import './SideWaysNav.scss';

function SideWaysNav() {

  return(
    <nav className="SideWaysNavContainer">
      <ul>
        <Link to="/map/moon"><li>Moon</li></Link>
        <Link to="/map/mars"><li>Mars</li></Link>
        <Link to="/map/vesta"><li>Vesta</li></Link>
      </ul>
    </nav>
  );
}

export default SideWaysNav;

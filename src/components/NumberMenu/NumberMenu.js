import React from 'react';
import './NumberMenu.scss';

function NumberMenu() {
  return(
    <nav className="numberNav">

      <ul>
        <a data-scroll href="#home"><li className="selected">01</li></a>
        <a href="#mission"><li>02</li></a>
        <a href="#maps"><li>03</li></a>
        <a href="#news"><li>04</li></a>
      </ul>

    </nav>
  );
}

export default NumberMenu;

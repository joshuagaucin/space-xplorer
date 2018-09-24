import React from 'react';
import './TitleGreeting.scss';

function TitleGreeting() {
  return(
    <header className="titleGreetingContainer">
      <h2 className="greetingText">Unleash the stellar</h2>
      <h1 className="mainLogo typewritter">Space<br/> Xplorer</h1>
      <p className="codedBy">Code and design by Alan Ayala</p>
    </header>
  );
}

export default TitleGreeting;

import React from 'react';
import './Footer.scss';

function Footer() {
  return(
    <footer className="mainFooter">

      <header>
        <h2 className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".5s">Just Scratching the Surface</h2>
      </header>

      <div className="footerContentContainer">
        <div className="footerGridContainer">

          <div className="footerItem wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".5s">

            <header>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M190.4 354.1L91.9 256l98.4-98.1-30-29.9L32 256l128.4 128 30-29.9zm131.2 0L420 256l-98.4-98.1 30-29.9L480 256 351.6 384l-30-29.9z"/></svg>
              <h3>Looking to hire?</h3>
            </header>

            <p>I'm always looking for a unique project to challenge me. Take a look at some of my work.</p>
            <a href="http://www.abwtechnologies.com/" target="_blank" rel="noopener noreferrer">Learn more<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M192 128l128 128-128 128z"/></svg></a>
          </div>

          <div className="footerItem wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".5s">
            <header>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M135.7 151c-2.5 3-4.9 6-7.2 9.2 32.2 36.3 76.1 76.5 124.2 113.7 37.8 29.2 76.3 55.2 111.4 75.1 5.9 3.3 11.7 6.5 17.3 9.4 2.5-3 4.9-6 7.2-9.2 11.7-16.1 18.1-33.2 23.3-53.6.8-3.2 1.5-6.4 2.1-9.5 15.8-83-35.6-164.9-118.5-185.9-37-9.4-74.1-5.1-106.3 9.7-21.4 9.9-38.2 22.9-53.5 41.1z"/><path d="M418.2 326.8c-4.1 11-7.4 17.5-7.4 17.5 18.2 21.1 24.6 33.9 31.9 46.4 2.4 4.1 7.4 13.1.9 12.4-1.7-.3-3.5-.7-5.5-1.3-21.3-5.4-51.2-18.7-84.3-37.4-35.8-20.3-74.9-46.7-113.3-76.3-51.1-39.5-97.5-82.3-130.6-120.5-15.3-17.6-27.6-34.2-35.7-47.9-2.4-4.1-3.9-6.3-5.6-10.4-2.5-6.2 5-5.1 7-4.6 14.9 3.8 35 9.9 58.2 23.8 0 0 4.3-4.8 13.9-11.4-22.8-15.4-44.6-27.7-65.2-35.5-23.1-8.8-41.1-6.8-47.5 3.7-12.2 19.9 14 72.3 65.3 132-21.5 86 30.6 173.3 116.5 195 41.1 10.4 82.4 3.9 116.8-15 38.1 17.6 72.1 28.6 96.9 34.9 23.9 6.1 40.4 5.5 46.8-4.9 11.1-18.2-12.1-51.8-59.1-100.5z"/></svg>
              <h3>NASA's api list</h3>
            </header>

            <p>NASA encourages developers to leverage their apis and use them in their applications!</p>
            <a href="https://api.nasa.gov/" target="_blank" rel="noopener noreferrer">Learn more<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M192 128l128 128-128 128z"/></svg></a>
          </div>

          <div className="footerItem wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".5s">

            <header>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M437.333 64c-2.176 0-4.396 1.369-9.176 3.207L320 108.802 192 64 71.469 104.531C67.197 105.604 64 109.864 64 115.197v322.136C64 443.729 68.271 448 74.666 448c1.828 0 6.505-2.33 9.087-3.319L192 403.197 320 448l120.531-40.531c4.271-1.073 7.469-5.334 7.469-10.667V74.666C448 68.271 443.729 64 437.333 64zM320 405.333l-128-44.802V106.666l128 44.803v253.864z"/></svg>
              <h3>Esri api</h3>
            </header>

            <p>Official page for the rendering api I used to map out NASA's WMTS layers.</p>
            <a href="https://www.esri.com/en-us/home" target="_blank" rel="noopener noreferrer">Learn more<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M192 128l128 128-128 128z"/></svg></a>
          </div>

          <div className="footerItem wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".5s">

            <header>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 160h-67.4c-10.8-18.7-25.7-34.8-43.7-47L376 73.8 342.2 40l-52.1 52.1C279 89.4 267.8 88 256 88s-23 1.4-33.8 4.1L169.8 40 136 73.8l38.9 39.1c-17.8 12.2-32.6 28.3-43.4 47H64v48h50.2c-1.2 7.9-2.2 15.8-2.2 24v24H64v48h48v24c0 8.2 1 16.1 2.2 24H64v48h67.4c25 43 71.3 72 124.6 72s99.6-29 124.6-72H448v-48h-50.2c1.2-7.9 2.2-15.8 2.2-24v-24h48v-48h-48v-24c0-8.2-1-16.1-2.2-24H448V160z"/></svg>
              <h3>NASA's open source page</h3>
            </header>

            <p>Want to contribute to the wonders of space exploration?</p>
            <a href="https://www.nasa.gov/open/open-source-development.html" target="_blank" rel="noopener noreferrer">Learn more<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M192 128l128 128-128 128z"/></svg></a>
          </div>
        </div>

        <hr/>

        <div className="footerCopyright">
          <p>&copy;2018 Code and Design by <a href="https://joshuagaucin.github.io/Portfolio/" target="_blank" rel="noopener noreferrer">Joshua Gaucin</a>. Data provided by <a href="https://api.nasa.gov/" target="_blank" rel="noopener noreferrer">NASA</a>.</p>
          <p></p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

import React, { Component } from 'react';
import './Preloader.scss';

class Preloader extends Component {
	componentDidMount() {

		// Sets loading screen duration
    setTimeout(() => {
  		document.querySelector('body').classList.add('loaded');
  	}, 4000);
  }

  render() {
    return(
		<div id="loader-wrapper">
			<div id="loader"></div>
			<div className="loader-section section-left"></div>
      <div className="loader-section section-right"></div>
		</div>
    );
  }
};

export default Preloader;

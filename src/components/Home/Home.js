import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleNavMenuOpen, toggleNavMenuClose } from '../../actions/navToggleActions.js';
import { toggleSearchBarOpen, toggleSearchBarClose } from '../../actions/toggleSearchBarActions.js';
import './Home.scss';
import MainNav from '../MainNav/MainNav';
import TitleGreeting from '../TitleGreeting/TitleGreeting';
import NumberMenu from '../NumberMenu/NumberMenu';
import SideWaysNav from '../SideWaysNav/SideWaysNav';
import StarParticles from '../StarParticles/StarParticles';

class Home extends Component {
  render() {

    // Content passed down to be rendered by Nav Component
    const navContent = `
    <a href="#home"><li>Home</li></a>
    <a href="#mission"><li>About the mission</li></a>
    <a href="#maps"><li>Maps</li></a>
    <a href="#news"><li>News</li></a>
    `;

    return(
      <div className="HomeContainer" id="home">

        <StarParticles/>
        <MainNav content={navContent} handleNavMenuToggle={{toggleOff: this.props.toggleNavMenuClose, toggleOn: this.props.toggleNavMenuOpen, state: this.props.navToggle}} handleSearchBarToggle={{toggleOff: this.props.toggleSearchBarClose, toggleOn: this.props.toggleSearchBarOpen, state: this.props.toggleSearchBar}}/>
        <TitleGreeting/>
        <NumberMenu/>
        <SideWaysNav/>

      </div>
    );
  }
}

// Check propTypes for Redux
toggleNavMenuOpen.propTypes = {
  toggleNavMenu: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired
}

toggleNavMenuClose.propTypes = {
  toggleNavMenu: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired
}

toggleSearchBarOpen.propTypes = {
  toggleSearchBar: PropTypes.func.isRequired,
  payload: PropTypes.bool.isRequired
}

toggleSearchBarClose.propTypes = {
  toggleSearchBar: PropTypes.func.isRequired,
  payload: PropTypes.bool.isRequired
}

// Map state to props
const mapStateToProps = state => {
  return {navToggle: state.navToggle.toggleNavMenu, toggleSearchBar: state.searchBarToggle.toggleSearchBar}
};

export default connect(mapStateToProps, { toggleNavMenuOpen, toggleNavMenuClose, toggleSearchBarOpen, toggleSearchBarClose })(Home);

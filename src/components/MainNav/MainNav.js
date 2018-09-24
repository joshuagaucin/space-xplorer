import React, { Component } from 'react';
import './MainNav.scss';

class MainNav extends Component {

  componentDidMount() {
    // Inserts content from props into Nav component
    this.insertContent(this.props.content);

    // Settings for google search bar
    var cx = '011524871223353318336:ojegtjh34rw';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);

  }

  // Opens and closes search bar
  toggleSearchBar = e => {

    const barStatus = this.props.handleSearchBarToggle.state;
    const navStatus = this.props.handleNavMenuToggle.state;

    document.querySelector('.searchBar').focus();

    document.querySelector('.searchBarContainer').classList.toggle('activeSearchBarContainer');
    document.querySelector('.searchBar').classList.toggle('activeSearchBar');
    document.querySelector('.searchIcon').classList.toggle('activeSearchIcon');

    if (barStatus) {
      this.props.handleSearchBarToggle.toggleOff();
    } else if (!barStatus) {
      e.preventDefault();
      this.props.handleSearchBarToggle.toggleOn();
    }

    if (navStatus) {
      document.querySelector('.searchBarContainer').classList.add('activeSearchBarContainer');
      document.querySelector('.searchBar').classList.add('activeSearchBar');
      document.querySelector('.searchIcon').classList.add('activeSearchIcon');
      this.props.handleSearchBarToggle.toggleOn();
    }

  }

  // Opens and closes hamburger nav menu
  toggleNavMenu = e => {
    const res = this.props.handleNavMenuToggle.state;
    e.target.closest('.navMenuIconContainer').classList.toggle('activeNavMenuIconContainer');
    document.querySelector('.searchBar').classList.toggle('remove');
    document.querySelector('.searchIcon').classList.toggle('remove');
    document.querySelector('.mainNav').classList.toggle('reveal');
    document.querySelector('.navMenuIconContainer').classList.toggle('pushed');

    this.toggleSearchBar(e);
    if (res === true) {
      this.props.handleNavMenuToggle.toggleOff();
      document.querySelector('.searchBarContainer').classList.remove('activeSearchBarContainer');
    } else if (res === false) {
      this.props.handleNavMenuToggle.toggleOn();
      document.querySelector('.searchBarContainer').classList.add('activeSearchBarContainer');
    }
  }

  // Injects content from props into nav menu
  insertContent = contentStr => {
    document.querySelector('.mainNav').insertAdjacentHTML('beforeend', contentStr);
  }

  render() {
    return (
        <nav className="navContainer" >
          <form onSubmit={(e) => {if (document.querySelector('.searchBar').value.length < 1) {e.preventDefault()}}} method="get" name="cse" id="searchbox" action="http://google.com/cse" className="searchBarContainer" target="blank">

            <div onClick={(e) => {this.toggleNavMenu(e)}} className="navMenuIconContainer">
              <div className="toggle-icon">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            </div>

            <input className="searchBar remove" type="text" name="q" placeholder="search.."/>
            <input type="hidden" name="cx" value="011524871223353318336:ojegtjh34rw" />
            <input type="hidden" name="ie" value="utf-8" />
            <input type="hidden" name="hl" value="en" />

            <label className="searchIcon remove" htmlFor="searchSubmit">
            <input onClick={(e) => {this.toggleSearchBar(e)}} type="submit" id="searchSubmit" name="submit" alt="Go" title="Submit Search Query" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M337.509 305.372h-17.501l-6.571-5.486c20.791-25.232 33.922-57.054 33.922-93.257C347.358 127.632 283.896 64 205.135 64 127.452 64 64 127.632 64 206.629s63.452 142.628 142.225 142.628c35.011 0 67.831-13.167 92.991-34.008l6.561 5.487v17.551L415.18 448 448 415.086 337.509 305.372zm-131.284 0c-54.702 0-98.463-43.887-98.463-98.743 0-54.858 43.761-98.742 98.463-98.742 54.7 0 98.462 43.884 98.462 98.742 0 54.856-43.762 98.743-98.462 98.743z"/></svg>
            </label>

          </form>

          <ul className="mainNav"></ul>

        </nav>
    );
  }
}

export default MainNav;

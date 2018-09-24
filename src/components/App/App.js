import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Preloader from '../Preloader/Preloader';
import Home from '../Home/Home';
import HomeContent from '../HomeContent/HomeContent';
import Footer from '../Footer/Footer';
import Moon from '../Maps/Moon/Moon';
import Mars from '../Maps/Mars/Mars';
import Vesta from '../Maps/Vesta/Vesta';
import './App.scss';

// HomePage Component
const MainPage = () => (
    <div>
      <Home/>
      <HomeContent/>
      <Footer/>
    </div>
  );

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">

          <Preloader/>

          <Route path="/" exact strict render={() => MainPage()}/>
          <Route path="/map/moon" exact strict render={() => <Moon/>}/>
          <Route path="/map/mars" exact strict render={() => <Mars/>}/>
          <Route path="/map/vesta" exact strict render={() => <Vesta/>}/>

        </div>
      </Router>
    );
  }
}

export default App;

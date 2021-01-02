import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { render } from 'react-dom';
// import Navbar from './components/Navbar.component';
import Hero from './components/Hero.component';
import About from './components/About.component';
import GoogleAnalytics, { initialize } from 'react-ga';

function initializeAnalytics() {
  // GoogleAnalytics.initialize("UA-166322599-1")  //obinnaokere.herokuapp.com
  GoogleAnalytics.initialize("UA-166671718-1") //obinnaokere.now.sh
  GoogleAnalytics.pageview('/HomePage')
}

class App extends Component {
  render() {
    initializeAnalytics()
    return (
      <div className="App">
        {/* <Navbar /> */}
        <Hero />
        <About />
        {/* <p>
            Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }

}

export default App;

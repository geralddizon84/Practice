import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import Profile from './Components/Profile';


class App extends Component {
  render() {
    return (
      <Router>
        <div> 
          <Route exact path="/" component = {Home} />
          <Route exact path="/Contact" component = {Contact} />
          <Route exact path="/AboutUs" component = {AboutUs} />
          <Route exact path="/Profile" component = {Profile} />
        </div>
      </Router>
    );
  }
}

export default App;

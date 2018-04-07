import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';

const Test = () => {<div> test</div>}

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/test" component={Home} />
          </div>
        </Router>
    );
  }
}

export default App;

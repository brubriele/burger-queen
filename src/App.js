import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Saloon from "./components/Saloon";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Home />
          <Router>
            <div>
              <Route exact path="/Saloon" component={Saloon} />
            </div>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";


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
              {/* <Route exact path="/page" component={page} /> */}
            </div>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;

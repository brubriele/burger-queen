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
      <Router>
        <div className="App">
          <header className="App-header">
            {/* <Home /> */}
            <div>
              <Route path="/" exact component={Home} />
              <Route path="/saloon" exact component={Saloon} />
            </div>

          </header>
        </div>
      </Router>
    );
  }
}

export default App;
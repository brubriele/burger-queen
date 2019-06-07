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

            <section className="App-form">
              <Route path="/" exact component={Home} />
            </section>
            <section>
              <Route path="/saloon" exact component={Saloon} />
            </section>

          </header>

        </div>
      </Router>
    );
  }
}

export default App;
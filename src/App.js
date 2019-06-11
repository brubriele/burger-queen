import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Saloon from "./components/Saloon";

function App() {
  return (
    <Router>
      <div className="App">

        <header className="App-header">
          <Route path="/saloon" exact component={Saloon} />

          <section className="App-form">
            <Route path="/" exact component={Home} />
          </section>
          <section>

          </section>

        </header>

      </div>
    </Router>
  );
}

export default App;
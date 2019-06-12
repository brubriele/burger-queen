import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Saloon from "./pages/Saloon";

function App() {
  return (
    <Router>
      <div className="App">

        <header className="App-header">
          <Route path="/" exact component={Home} />
          <Route path="/saloon" component={Saloon} />
        </header>

      </div>
    </Router>
  );
}

export default App;
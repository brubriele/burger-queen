import React from 'react';
import './App.css';
import firebase from "./firebaseConfig";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Login from "./Login";
import SignUp from "./SignUp";
// import Home from "./Home";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>#partiuBurgerQueen</h1>
        </header>
        <Router>
          <div>
            {/* <Route exact path="/" component={Home} /> */}
            {/* <Route exact path="/login" component={Login} /> */}
            <Route exact path="/signup" component={SignUp} />
          </div>
        </Router>
      </div>


    );
  }
}

export default App;

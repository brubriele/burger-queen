import React from 'react';
import './App.css';
import firebase from "./firebaseConfig";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Login from "./Login";
import SignUp from "./components/SignUp";
// import Home from "./Home";
import imgBanner from './assets/img/burger_queen_gif.gif'
import iconSaloon from './assets/img/pedidos-pic-salao.png'
import iconKitchen from './assets/img/kitchen-pic.png'

const database = firebase.firestore()



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>#partiuBurgerQueen??</h1>
          <img src={imgBanner} alt="Logo" />
          <div className="App-menu-container">
            <img src={iconSaloon} alt="Logo" />
            <img src={iconKitchen} alt="Logo" />
          </div>
          <Router>
            <div>
              <Route exact path="/signup" component={SignUp} />
            </div>
          </Router>
        </header>

      </div>


    );
  }
}

export default App;

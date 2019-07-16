import React from 'react';
import './Home.css';
import firebase from '../firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth';
import RegisterBox from "../components/RegisterBox";
import LoginBox from "../components/LoginBox";
import logo from '../assets/img/bq-logo.png'
const firebaseAppAuth = firebase.auth();
const imgLogo = require('../assets/img/bq-logo.png')


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showLoginBox() {
    this.setState({ isLoginOpen: true, isRegisterOpen: false });
  }

  showRegisterBox() {
    this.setState({ isRegisterOpen: true, isLoginOpen: false });
  }

  render() {
    return (
      <section className="container">
        <img className="imgLogo" src={imgLogo} />
        <div className="container-form">
                <div className="box-container">
                  {this.state.isLoginOpen && <LoginBox />}
                  {this.state.isRegisterOpen && <RegisterBox />}
                </div>

                <div className="box-controller">
                  <div
                    className={"controller " + (this.state.isLoginOpen
                      ? "selected-controller"
                      : "")}
                    onClick={this
                      .showLoginBox
                      .bind(this)}>
                    Login
       </div>
                  <div
                    className={"controller " + (this.state.isRegisterOpen
                      ? "selected-controller"
                      : "")}
                    onClick={this
                      .showRegisterBox
                      .bind(this)}>
                    Register
       </div>
                </div>
              </div>

            </section>

    )
  }
}

export default withFirebaseAuth({
  firebaseAppAuth,
})(Home);
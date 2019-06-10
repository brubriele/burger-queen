import React from 'react';
import Button from './Button'
import './Home.css';
import firebase from '../firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth';
import RegisterBox from "../components/RegisterBox";
import LoginBox from "../components/LoginBox";

const firebaseAppAuth = firebase.auth();

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: "",
    };
  }

  handleChange = (event, element) => {
    const newState = this.state;
    newState[element] = event.target.value
    this.setState(newState);
  }

  createUser = () => {
    this.props.createUserWithEmailAndPassword(this.state.email, this.state.senha);
  }

  signIn = () => {
    this.props.signInWithEmailAndPassword(this.state.email, this.state.senha)
      .then(() => {
        alert("uhul");
      });
  }

  showLoginBox() {
    this.setState({isLoginOpen: true, isRegisterOpen: false});
  }

  showRegisterBox() {
    this.setState({isRegisterOpen: true, isLoginOpen: false});
  }

  render() {
    return (
      <div className="Home-form">
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
    )
  }
}

export default withFirebaseAuth({
  firebaseAppAuth,
})(Home);
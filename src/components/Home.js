import React from 'react';
import Button from './Button'
import './Home.css';
import firebase from '../firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth';

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

  render() {
    return (
      <div className="Home-form">

        <input value={this.state.email}
          placeholder="email"
          onChange={(e) => this.handleChange(e, "email")} />
        <input value={this.state.senha}
          placeholder="senha"
          onChange={(e) => this.handleChange(e, "senha")} />
        <div>
          <Button text="Entrar" onClick={this.signIn} />
          <Button text="Novo Usuário" onClick={this.createUser} />
        </div>

      </div>
    )
  }
}

export default withFirebaseAuth({
  firebaseAppAuth,
})(Home);
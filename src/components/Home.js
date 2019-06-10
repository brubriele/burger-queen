import React from 'react';
import Button from './Button'
import './Home.css';
import firebase from '../firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth';

const firebaseAppAuth = firebase.auth();
const database = firebase.firestore();

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
      senha: "",
      perfil: "--selecione--",
    };
  }

  handleChange = (event, element) => {
    const newState = this.state;
    newState[element] = event.target.value
    this.setState(newState);
  }

  createUser = () => {
    this.props.createUserWithEmailAndPassword(this.state.email, this.state.senha)
      .then(resp => {
        const id = resp.user.uid;
        database.collection("burger-queen-users").doc(id).set({
          email: this.state.email,
          nome: this.state.nome
        });
      });
  }

  signIn = () => {
    this.props.signInWithEmailAndPassword(this.state.email, this.state.senha)
      .then(() => {
        alert("uhul");
      });
  }

  render() {
    console.log(this.state)
    return (

      <div className="Home-header">


        <div className="dashboard">
          <div className="dashboard-card main">
            <div className="dashboard-card-content">
              <form className="pure-form">
                <fieldset>
                  <input value={this.state.nome} className="pure-form item" type="text" placeholder="Nome" onChange={(e) => this.handleChange(e, "nome")} />
                  <input value={this.state.email} className="pure-form item" onChange={(e) => this.handleChange(e, "email")} type="email" placeholder="Email" />
                  <input value={this.state.senha}
                    placeholder="senha"
                    onChange={(e) => this.handleChange(e, "senha")} className="pure-form item" type="password" placeholder="Senha" />

                  <select onChange={(e) => this.handleChange(e, "perfil")}>
                    <option value="">--selecione--</option>
                    <option>SALÃO</option>
                    <option>COZINHA</option>
                  </select>

                  <div>
                    <button text="Entrar" onClick={this.signIn} className="button-warning pure-button">Entrar</button>
                    <button text="Novo Usuário" onClick={this.createUser} className="button-warning pure-button">Cadastrar</button>

                  </div>


                </fieldset>
              </form>


            </div>
          </div>
        </div>
      </div>


    )
  }
}

export default withFirebaseAuth({
  firebaseAppAuth,
  database
})(Home);
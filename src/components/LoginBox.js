import React from 'react';
import './FormBoxStyle.css';
import firebase from '../firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth';
import { withRouter } from "react-router-dom";
import { compose} from 'recompose';
const firebaseAppAuth = firebase.auth();
const  db = firebase.firestore();

class LoginBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            senha: ""
        };
    }

    handleChange = (event, element) => {
        const newState = this.state;
        newState[element] = event.target.value
        this.setState(newState);
    }


    signIn = () => {
        this.props.signInWithEmailAndPassword(this.state.email, this.state.senha)
          .then((resp) => {
           const id = resp.user.uid
           db.collection('burger-queen-users').doc(id).get()
            .then(resp => {
                this.props.history.push(`/${resp.data().tipo}`);
                console.log('aqui')
                console.log(resp.data().tipo)
                // `/${this.state.tipo}`
            })
            alert("uhul");
          });
      }


    render() {
        return (
            <div className="inner-container">
                <div className="header">
                    Login
          </div>
                <div className="box">

                    <div className="input-group">
                        <label htmlFor="username">E-mail</label>
                        <input value={this.state.email}
                            type="text"
                            name="username"
                            className="login-input"
                            placeholder="Username" onChange={(e) => this.handleChange(e, "email")}/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input value={this.state.senha}
                            type="password"
                            name="password"
                            className="login-input"
                            placeholder="Password" onChange={(e) => this.handleChange(e, "senha")} />
                    </div>

                    <button onClick={this.signIn} 
                        type="button"
                        className="login-btn"
                        onClick={this.signIn} >Login</button>
                </div>
            </div>
        );
    }

}


export default compose (
    withFirebaseAuth({
        firebaseAppAuth,
    }),
    withRouter,
)(LoginBox);
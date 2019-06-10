import React from 'react';
import './FormBoxStyle.css';
import firebase from '../firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth';
const firebaseAppAuth = firebase.auth();

class LoginBox extends React.Component {

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


    signIn = () => {
        this.props.signInWithEmailAndPassword(this.state.email, this.state.senha)
          .then(() => {
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
                        <label htmlFor="username">Username</label>
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

export default withFirebaseAuth({
    firebaseAppAuth,
})(LoginBox);
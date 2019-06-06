import React from 'react';
import 'purecss/build/pure.css'
import './Saloon.css';
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

    addItem = () => {

    }


    render() {
        return (
            <div className="pure-g">
                <button className="button-success pure-button">Menu Cofee</button>
                <button className="button-success pure-button">Menu Snacks</button>
                <button className="button-warning pure-button">Café americano</button>
            </div>
        )
    }
}

export default withFirebaseAuth({
    firebaseAppAuth,
})(Home);
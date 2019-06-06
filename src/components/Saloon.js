import React from 'react';
import 'purecss/build/pure.css';
import './Saloon.css';
import firebase from '../firebaseConfig';

class Saloon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pedido: "",
            mesa: "",
        };
    };

    handleChange = (event, element) => {
        const newState = this.state;
        newState[element] = event.target.value
        this.setState(newState);
    }

    addItem = () => {

    }

    render() {
        return (
            <div className="btn">
                <button className="button-success pure-button">Menu Cofee</button>
                <button className="button-success pure-button">Menu Snacks</button>
                <div className="btn">
                    <button className="button-warning pure-button">Café americano</button>
                </div>
            </div>
        )
    }
}

export default Saloon


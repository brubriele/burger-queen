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
            <div className="Pannel-header">
                <div className="pure-g">
                    <div className="pure-u-1-2">
                    <button className="button-success pure-button">Café da Manhã</button>
                <button className="button-success pure-button">Diário</button>
                        <table class="pure-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Make</th>
                                    <th>Model</th>
                                    <th>Year</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Honda</td>
                                    <td>Accord</td>
                                    <td>2009</td>
                                </tr>

                                <tr>
                                    <td>2</td>
                                    <td>Toyota</td>
                                    <td>Camry</td>
                                    <td>2012</td>
                                </tr>

                                <tr>
                                    <td>3</td>
                                    <td>Hyundai</td>
                                    <td>Elantra</td>
                                    <td>2010</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="pure-u-1-2"><p>Thirds</p>
                        <table class="pure-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Make</th>
                                    <th>Model</th>
                                    <th>Year</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Honda</td>
                                    <td>Accord</td>
                                    <td>2009</td>
                                </tr>

                                <tr>
                                    <td>2</td>
                                    <td>Toyota</td>
                                    <td>Camry</td>
                                    <td>2012</td>
                                </tr>

                                <tr>
                                    <td>3</td>
                                    <td>Hyundai</td>
                                    <td>Elantra</td>
                                    <td>2010</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

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


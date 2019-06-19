import React from 'react';
import 'purecss/build/pure.css';
import './Saloon.css';
import firebase from '../firebaseConfig';

const menu = [
    {
        nome: "Café americano",
        preco: 5,
        período: "manhã"
    },
    {
        nome: "Sanduíche de presunto e queijo",
        preco: 10,
        período: "manhã"
    },
    {
        nome: "Suco de fruta natural",
        preco: 7,
        tipo: "manhã"
    },
    {
        nome: "Hambúrguer simples",
        preco: 10,
        tipo: "diário"
    },
    {
        nome: "Hambúrguer duplo",
        preco: 15,
        tipo: "diário"
    },
    {
        nome: "Batata frita",
        preco: 5,
        tipo: "diário"
    },
    {
        nome: "Anéis de cebola",
        preco: 5,
        tipo: "diário"
    },
    {
        nome: "Água 500ml",
        preco: 5,
        tipo: "bebidas"
    },
    {
        nome: "Água 750ml",
        preco: 7,
        tipo: "bebidas"
    },
    {
        nome: "Bebida gaseificada 500ml",
        preco: 7,
        tipo: "bebidas"
    },
    {
        nome: "Bebida gaseificada 750ml",
        preco: 10,
        tipo: "bebidas"
    }
]

class Saloon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comprar: []
        };
    }

    handleChange = (event, element) => {
        const newState = this.state;
        newState[element] = event.target.value
        this.setState(newState);
    }

    buyItem = (item) => {
        
    }

    render() {
        console.log(this.state.comprar)
        return (
            <div className="Pannel-header">
                <div className="pc-tab">
                    <input checked="checked" id="tab1" type="radio" name="pct" />
                    <input id="tab2" type="radio" name="pct" />
                    <input id="tab3" type="radio" name="pct" />
                    <nav>
                        <ul>
                            <li className="tab1">
                                <label for="tab1">Café da Manhã</label>
                            </li>
                            <li className="tab2">
                                <label for="tab2">Menu Diário</label>
                            </li>
                        </ul>
                    </nav>
                    <section>
                        <div className="tab1">
                            <h2>Café da Manhã</h2>
                            {
                                menu.map((menu, i) => {
                                    return menu.tipo === 'manhã' ?
                                    <button className="button-xsmall pure-button" key={i} onClick={() => {alert (menu.nome)}}>{menu.nome} <br></br>{'R$' + menu.preco}</button> : false
                                }) 
                            }


                        </div>
                        <div className="tab2">
                            <h2>Menu Diário</h2>
                            {
                                menu.map((menu, i) => {
                                    return menu.tipo === 'diário' ?
                                    <button className="button-xsmall pure-button" key={i} onClick={() => {alert (menu.nome)}}>{menu.nome} <br></br>{"R$" + menu.preco}</button> : false
                                }) 
                            }
                        </div>
                    </section>
                    <section>
                    <div class="tab1">
                            <h2>Total pedido:</h2>
                        </div>
                    </section>
                    <section>
                    <div class="tab2">
                            <h2>Total pedido:</h2>
                        </div>
                    </section>
                </div>
            </div>
        )

    }
}

export default Saloon


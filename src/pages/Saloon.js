import React from 'react';
import 'purecss/build/pure.css';
import './Saloon.css';
import firebase from '../firebaseConfig';
import Button from '../components/Button';

const menu = [
    {
        nome: "Café americano",
        preco: 5,
        tipo: "manhã"
    },
    {
        nome: "Sanduíche de presunto e queijo",
        preco: 10,
        tipo: "manhã"
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
        tipo: "diário"
    },
    {
        nome: "Água 750ml",
        preco: 7,
        tipo: "diário"
    },
    {
        nome: "Bebida gaseificada 500ml",
        preco: 7,
        tipo: "diário"
    },
    {
        nome: "Bebida gaseificada 750ml",
        preco: 10,
        tipo: "diário"
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
            <section className="container">
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
                            <div className="tab-content-morning">
                                {
                                    menu.map((item, i) => { 
                                        return item.tipo === 'manhã' ? <Button key={i} text={item.nome} onClick={() => { alert(item.nome) }}/> : false
                                    })
                                }
                            </div>



                        </div>
                        <div className="tab2">
                            <h2>Menu Diário</h2>    
                            <div className="tab-content-daily"> 

                            </div>

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
            </section>
        )

    }
}

export default Saloon


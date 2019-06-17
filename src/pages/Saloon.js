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
                <div class="pc-tab">
                    <input checked="checked" id="tab1" type="radio" name="pct" />
                    <input id="tab2" type="radio" name="pct" />
                    <input id="tab3" type="radio" name="pct" />
                    <nav>
                        <ul>
                            <li class="tab1">
                                <label for="tab1">Café da Manhã</label>
                            </li>
                            <li class="tab2">
                                <label for="tab2">Lanches</label>
                            </li>
                        </ul>
                    </nav>
                    <section>
                        <div class="tab1">
                            <h2>First</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus itaque quidem minus nostrum, voluptatem accusamus aspernatur quia harum ratione, officia laudantium inventore autem doloribus atque labore numquam non. Hic, animi.</p>
                        </div>
                        <div class="tab2">
                            <h2>Second</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum nesciunt ipsum dolore error repellendus officiis aliquid a, vitae reprehenderit, accusantium vero, ad. Obcaecati numquam sapiente cupiditate. Praesentium eaque, quae error!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, maiores.</p>
                        </div>
                    </section>
                </div>
            </div>
        )
        
    }
}

export default Saloon


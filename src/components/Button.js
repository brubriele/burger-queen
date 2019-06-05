import React from 'react';

import './Button.css';

function Button(props) {
    return (
        <button className="button" onClick={props.onClick}>
            Clique
        </button>
    );
}

export default Button;
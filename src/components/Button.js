import React from 'react';

import './Button.css';

function Button(props) {
  return (
    <button className="pure-button pure-button-primary" onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default Button;
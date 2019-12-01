import React from 'react';
import './button.css';

const Button = ({ text, type }) => {
  return(
    <button className={`btn btn-${type}`}>
      {text}
    </button>
  );
}

export default Button;
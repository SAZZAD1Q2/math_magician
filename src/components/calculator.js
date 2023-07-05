import React, { useState } from 'react';
import Screen from './screen';
import './calculator.css';

const Calculator = () => {
  const [display] = useState('');

  return (
    <div className="calculator">
      <Screen display={display} />
      <div className="buttons">
        <button className="number" type="button">AC</button>
        <button className="number" type="button">+/-</button>
        <button className="number" type="button">%</button>
        <button className="operator" type="button">/</button>
        <button className="number" type="button">7</button>
        <button className="number" type="button">8</button>
        <button className="number" type="button">9</button>
        <button className="operator" type="button">x</button>
        <button className="number" type="button">4</button>
        <button className="number" type="button">5</button>
        <button className="number" type="button">6</button>
        <button className="operator" type="button">-</button>
        <button className="number" type="button">1</button>
        <button className="number" type="button">2</button>
        <button className="number" type="button">3</button>
        <button className="operator" type="button">+</button>
        <button className="number" type="button">0</button>
        <button className="number" type="button">.</button>
        <button className="equals" type="button">C</button>
        <button className="operator" type="button">=</button>
      </div>
    </div>
  );
};

export default Calculator;

import React, { useState } from 'react';
import Screen from './screen';
import buttonData from './buttonData.json';
import './calculator.css';

const Calculator = () => {
  const [display] = useState('');

  const renderButtons = () => buttonData.map((button) => (
    <button className={button.className} key={button.id} type="button">
      {button.content}
    </button>
  ));

  return (
    <div className="calculator">
      <Screen display={display} />
      <div className="buttons">{renderButtons()}</div>
    </div>
  );
};

export default Calculator;

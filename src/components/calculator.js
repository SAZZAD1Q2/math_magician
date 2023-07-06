import React, { useState } from 'react';
import Screen from './screen';
import buttonData from './buttonData.json';
import calculate from '../logic/calculate';
import './calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [calculatorData, setCalculatorData] = useState({});

  const handleClick = (buttonContent) => {
    const newData = calculate(calculatorData, buttonContent);
    setCalculatorData(newData);

    if (newData.total !== null) {
      setDisplay(newData.total);
    } else if (newData.next !== null) {
      setDisplay(newData.next);
    } else {
      setDisplay('0');
    }
  };

  const renderButtons = () => buttonData.map((button) => (
    <button
      className={button.className}
      key={button.id}
      type="button"
      onClick={() => handleClick(button.content)}
    >
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

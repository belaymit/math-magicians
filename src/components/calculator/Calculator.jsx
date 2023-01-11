import React, { useState } from 'react';
import calculate from '../../logic/calculate';
import ButtonsNumbers from '../buttonsNumbers/ButtonsNumbers';
import DisplayItems from '../displayItems/DisplayItems';
import './calculator.scss';

const Calculator = () => {
  const [state, setState] = useState({
    totalValue: 0,
    next: null,
    operator: null,
  });

  const handleClick = (e) => {
    const value = e.target.textContent;
    setState(calculate(state, value));
  };

  const { totalValue, next, operator } = state;
  const output = (totalValue || '') + (operator || '') + (next || '') || 0;

  return (
    <section className="calculator-section">
      <div className="calculator-container">
        <DisplayItems output={output} />
        <ButtonsNumbers handleClick={handleClick} />
      </div>
    </section>
  );
};

export default Calculator;

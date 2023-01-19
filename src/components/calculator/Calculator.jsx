import React, { useState } from 'react';
import calculate from '../../logic/calculate';
import ButtonsNumbers from '../buttonsNumbers/ButtonsNumbers';
import DisplayItems from '../displayItems/DisplayItems';
import './calculator.scss';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const value = e.target.textContent;
    setState(calculate(state, value));
  };

  const { total, next, operation } = state;
  const output = (total || '') + (operation || '') + (next || '') || 0;
  const text = 'Let\'s do Some Math!';

  return (
    <section className="calculator-section">
      <h4 className="title">{text}</h4>
      <div className="calculator-container">
        <DisplayItems output={output} />
        <ButtonsNumbers handleClick={handleClick} />
      </div>
    </section>
  );
};

export default Calculator;

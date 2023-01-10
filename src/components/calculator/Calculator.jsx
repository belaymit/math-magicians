import React, { PureComponent } from 'react';
import './calculator.scss';

class Calculator extends PureComponent {
  render() {
    return (
      <section className="calculator-container">
        <div className="wrapper">
          <div className="display-screen">0</div>
          <div className="button-number">
            <div className="btn clickable-btn">AC</div>
            <div className="btn clickable-btn">+/-</div>
            <div className="btn clickable-btn">%</div>
            <div className="btn orange-btn">÷</div>
            <div className="btn">7</div>
            <div className="btn">8</div>
            <div className="btn">9</div>
            <div className="btn orange-btn">*</div>
            <div className="btn">4</div>
            <div className="btn">5</div>
            <div className="btn">6</div>
            <div className="btn orange-btn">-</div>
            <div className="btn">1</div>
            <div className="btn">2</div>
            <div className="btn">3</div>
            <div className="btn orange-btn">+</div>
            <div className="btn zero">0</div>
            <div className="btn">.</div>
            <div className="btn orange-btn"> = </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Calculator;

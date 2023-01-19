import React from 'react';
import PropTypes from 'prop-types';

const ButtonsNumbers = (props) => {
  const { handleClick } = props;

  const numbersModifiers = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  const operators = ['÷', 'x', '-', '+', '='];
  const zero = ['0'];
  return (
    <>
      {numbersModifiers.map((value) => (
        <button
          type="button"
          className={`${operators.includes(value) ? 'operator' : 'btn'}  ${zero.includes(value) ? 'btn-zero' : ''}`}
          onClick={handleClick}
          key={value}
        >
          {value}
        </button>
      ))}
    </>
  );
};

ButtonsNumbers.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonsNumbers;

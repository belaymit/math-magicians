import React from 'react';
import PropTypes from 'prop-types';

const DisplayItems = (props) => {
  const { output } = props;
  return (
    <div className="output-screen">
      <p className="output">{output}</p>
    </div>
  );
};

DisplayItems.propTypes = {
  output: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default DisplayItems;

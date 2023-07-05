import React from 'react';
import PropTypes from 'prop-types';

const Screen = ({ display }) => (
  <div className="screen">
    <div className="display">{display}</div>
    <div className="corner">0</div>
  </div>
);

Screen.propTypes = {
  display: PropTypes.string.isRequired,
};

export default Screen;

import React from 'react';
import PropTypes from 'prop-types';

const Wrapper = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.any.isRequired
};

export default Wrapper;

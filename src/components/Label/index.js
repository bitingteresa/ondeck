import React from 'react';
import PropTypes from 'prop-types';

const Label = (props) => {
  return (
    <p>
      <b>{props.label}: </b>{props.value}
    </p>
  );
};

Label.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any
};

export default Label;

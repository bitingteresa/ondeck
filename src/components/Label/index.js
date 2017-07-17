import React from 'react';
import PropTypes from 'prop-types';
import './Label.scss';

const Label = (props) => {
  return (
    <p className='shoeLabel'>
      <b>{props.label}: </b>{props.value}
    </p>
  );
};

Label.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any
};

export default Label;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Row extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render () {
    const { children } = this.props;

    return (
      <div className='row'>{children}</div>
    );
  }
}

export default Row;

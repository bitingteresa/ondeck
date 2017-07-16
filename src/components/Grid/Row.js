import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Grid.scss';

class Row extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render () {
    const { children } = this.props;

    return (
      <div className='row gridRow'>{children}</div>
    );
  }
}

export default Row;

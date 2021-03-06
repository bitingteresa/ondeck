import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Grid extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render () {
    const { children } = this.props;

    return (
      <div>{children}</div>
    );
  }
}

export default Grid;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ColItem extends Component {
  static propTypes = {
    col: PropTypes.string,
    row: PropTypes.string,
    item: PropTypes.object,
    onAdd: PropTypes.func,
    onRemove: PropTypes.func,
    size: PropTypes.number
  };

  onAdd () {
    const { onAdd, row, col } = this.props;

    if (onAdd instanceof Function) {
      onAdd(row, col);
    }
  }

  onRemove () {
    const { onRemove, row, col } = this.props;

    if (onRemove instanceof Function) {
      onRemove(row, col);
    }
  }

  renderItem () {
    const { item } = this.props;

    return (
      <p>
        Brand: {item.brand}
      </p>
    );
  }

  render () {
    const { size } = this.props;

    return (
      <span className={`col-xs-${size} text-center`}>col</span>
    );
  }
}

export default ColItem;

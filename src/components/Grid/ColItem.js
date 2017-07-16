import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Shoe from '../../assets/shoe.png';
import './Grid.scss';

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

  renderRemove () {
    return (
      <i
        className='material-icons'
        onClick={::this.onRemove}
      >
        clear
      </i>
    );
  }

  renderAdd () {
    return (
      <i
        className='material-icons addIcon'
        onClick={::this.onAdd}
      >
        add
      </i>
    );
  }

// TODO: refactor this outside of this component when grid id refactored
  renderItem () {
    const { item } = this.props;

    return (
      <p className='text-left inventoryItem'>
        <img src={Shoe} alt='sneaker' className='img-responsive' /><br />
        Brand: {item.brand}<br />
        Style: {item.style}<br />
        Size: {item.size}<br />
        UPC ID: {item.upc}<br />
      </p>
    );
  }

  render () {
    const { size, item } = this.props;

    return (
      <span className={`col-xs-${size} text-center`}>
        {Object.keys(item).length ? this.renderItem() : this.renderAdd()}
      </span>
    );
  }
}

export default ColItem;
